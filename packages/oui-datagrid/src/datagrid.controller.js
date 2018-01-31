import { hasProperty } from "./util";

import template from "./datagrid.html";

const cssSorted = "oui-datagrid__cell_sorted";
const cssSortable = "oui-datagrid__header_sortable";
const cssSortableAsc = "oui-datagrid__header_sortable-asc";
const cssSortableDesc = "oui-datagrid__header_sortable-desc";

// On initial render we need to wait few seconds before calling
// the checkScroll method otherwise panel size would be wrong.
// This timing is not perfect, if the page render takes more time
// than usual the scroll position could be miscalculated.
const checkScrollOnRefreshDataDelay = 1000;

export default class DatagridController {
    constructor ($compile, $element, $transclude, $q, $scope, $window, $timeout, ouiDatagridPaging,
                 ouiDatagridColumnBuilder, ouiDatagridConfiguration) {
        "ngInject";

        this.$compile = $compile;
        this.$element = $element;
        this.$transclude = $transclude;
        this.$q = $q;
        this.$scope = $scope;
        this.$window = $window;
        this.$timeout = $timeout;
        this.ouiDatagridPaging = ouiDatagridPaging;
        this.ouiDatagridColumnBuilder = ouiDatagridColumnBuilder;

        this.config = ouiDatagridConfiguration;

        this.checkScroll = () => {
            const panel = this.scrollablePanel;
            const stickyBorderWidth = 10;

            // Ugly and not efficient way to instantly add or remove classes because
            // checkScroll is run thousands times.
            this.$scope.$apply(() => {
                if (panel.scrollWidth - panel.scrollLeft - stickyBorderWidth <= panel.clientWidth) {
                    this.scrollBegin = false;
                } else {
                    this.scrollBegin = true;
                }

                if (panel.scrollLeft <= stickyBorderWidth) {
                    this.scrollEnd = false;
                } else {
                    this.scrollEnd = true;
                }
            });
        };
    }

    $onInit () {
        this.hasActionMenu = false;
        this.scrollBegin = false;
        this.scrollEnd = false;
        this.firstLoading = true;
        this.pageSize = parseInt(this.pageSize, 10) || this.config.pageSize;
    }

    $postLink () {
        this.$compile(template)(this.$scope, (clone) => {
            this.$element.append(clone);
        });

        const originalContent = angular.element(this.htmlContent);
        const columnElements = DatagridController.filterElements(originalContent, "oui-column");
        const actionColumnElements = DatagridController.filterElements(originalContent, "oui-action-menu");

        const builtColumns = this.ouiDatagridColumnBuilder.build(columnElements, this.$scope);

        if (actionColumnElements.length) {
            builtColumns.columns.push(this.ouiDatagridColumnBuilder.buildActionColumn(actionColumnElements[0]));
            this.hasActionMenu = true;
        }

        this.columns = builtColumns.columns;

        this.columns.forEach(column => {
            if (column.title) {
                return;
            }

            column.disableWatcher = this.$scope.$watch(
                () => this.ouiDatagridColumnBuilder.buildTitle(column.rawTitle, this.getParentScope()),
                newTitle => {
                    if (newTitle) {
                        column.title = newTitle;
                        column.disableWatcher();
                    }
                }
            );
        });

        if (this.rowsLoader) {
            this.paging = this.ouiDatagridPaging.createRemote(this.columns, builtColumns.currentSorting, this.pageSize, this.rowLoader, this.rowsLoader);
            this.refreshData(() => this.paging.setOffset(1));
        } else {
            this.paging = this.ouiDatagridPaging.createLocal(this.columns, builtColumns.currentSorting, this.pageSize, this.rowLoader, this.rows);

            if (this.rows) {
                this.refreshData(() => this.paging.setRows(this.rows));
            }
        }

        // Manage responsiveness
        if (this.hasActionMenu) {
            this.scrollablePanel = this.$element[0].querySelector(".oui-datagrid-responsive-container__overflow-container");
            if (this.scrollablePanel) {
                angular.element(this.$window).on("resize", this.checkScroll);
                angular.element(this.scrollablePanel).on("scroll", this.checkScroll);
            }
        }
    }

    $doCheck () {
        if (!angular.equals(this.previousRows, this.rows)) {
            this.previousRows = angular.copy(this.rows);

            // Prevent recall this if there is no page change.
            // this.paging.preventLoadingRows is true if there has been no page
            // or page size change since last call.
            if (this.rows && this.paging && !this.paging.preventLoadingRows) {
                this.refreshData(() => this.paging.setRows(this.rows));
            }
        }
    }

    $onDestroy () {
        if (this.hasActionMenu) {
            angular.element(this.$window).off("resize", this.checkScroll);
            angular.element(this.scrollablePanel).off("scroll");
        }
    }

    getParentScope () {
        return this.$scope.$parent;
    }

    hasProperty (obj, prop) { // eslint-disable-line
        if (!obj) {
            return false;
        }

        return hasProperty(obj, prop);
    }

    onPaginationChange ($event) {
        this.refreshData(() => {
            this.paging.setOffset($event.offset);
            this.paging.setPageSize($event.pageSize);
        }, true, true);
    }

    scrollToTop () {
        // Small delay otherwise rows could not be rendered
        // yet and position would be wrong
        this.$timeout(() => {
            this.$element[0].scrollIntoView(true);
        });
    }

    refreshData (callback, skipSort, requireScrollToTop) {
        if (this.loading) {
            return this.$q.reject(false);
        }

        this.loading = true;

        return this.$q.when(callback())
            .then(() => {
                this.displayedRows = DatagridController.createEmptyRows(this.paging.getCurrentPageSize());
                return this.paging.loadData(skipSort);
            })
            .then(result => {
                this.displayedRows = result.data;
                if (requireScrollToTop) {
                    this.scrollToTop();
                }
                if (this.hasActionMenu) {
                    setTimeout(() => this.checkScroll(), checkScrollOnRefreshDataDelay);
                }
            })
            .finally(() => {
                this.loading = false;
                this.firstLoading = false;
            });
    }

    sort (column) {
        if (!column || !column.sortable) {
            return;
        }

        this.refreshData(() => this.paging.setSort(column.name));
    }

    getSortableClasses (column) {
        if (column.name !== this.paging.getSortColumnName()) {
            return {
                [cssSortable]: !!column.sortable
            };
        }
        return {
            [cssSortable]: !!column.sortable,
            [cssSorted]: true,
            [cssSortableAsc]: this.paging.isSortAsc(),
            [cssSortableDesc]: this.paging.isSortDesc()
        };
    }

    static createEmptyRows (pageSize) {
        return Array(...{ length: pageSize })
            .map(() => undefined);
    }

    static filterElements (elements, tagName) {
        const tagNameUpper = tagName.toUpperCase();
        const filteredElements = [];

        angular.forEach(elements, element => {
            if (element.tagName === tagNameUpper) {
                filteredElements.push(element);
            }
        });

        return filteredElements;
    }
}
