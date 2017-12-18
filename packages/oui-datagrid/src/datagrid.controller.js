import { hasProperty } from "./util";

import template from "./datagrid.html";

const cssSorted = "oui-datagrid__cell_sorted";
const cssSortable = "oui-datagrid__header_sortable";
const cssSortableAsc = "oui-datagrid__header_sortable-asc";
const cssSortableDesc = "oui-datagrid__header_sortable-desc";

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

        const originalContent = angular.element(this.$element.data("originalContent"));
        const columnElements = DatagridController.filterElements(originalContent, "oui-column");
        const actionColumnElements = DatagridController.filterElements(originalContent, "oui-action-menu");

        const builtColumns = this.ouiDatagridColumnBuilder.build(columnElements, this.$scope);

        if (actionColumnElements.length) {
            builtColumns.columns.push(this.ouiDatagridColumnBuilder.buildActionColumn(actionColumnElements[0]));
            this.hasActionMenu = true;
        }

        this.columns = builtColumns.columns;

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
        this.scrollablePanel = this.$element[0].querySelector(".oui-datagrid-responsive-container__overflow-container");
        if (this.scrollablePanel) {
            angular.element(this.$window).on("resize", this.checkScroll);
            angular.element(this.scrollablePanel).on("scroll", this.checkScroll);
        }
    }

    $doCheck () {
        if (!angular.equals(this.previousRows, this.rows)) {
            this.previousRows = angular.copy(this.rows);

            if (this.rows && this.paging) {
                this.refreshData(() => this.paging.setRows(this.rows));
            }
        }
    }

    $onDestroy () {
        angular.element(this.$window).off("resize", this.checkScroll);
        angular.element(this.scrollablePanel).off("scroll");
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

    // TODO
    handleError () { // eslint-disable-line
        // do nothing.
    }

    onPaginationChange ($event) {
        if ($event.offset !== this.paging.offset) {
            this.changeOffset($event.offset);
        }

        if ($event.pageSize !== this.paging.pageSize) {
            this.setPageSize($event.pageSize);
        }
    }

    setPageSize (pageSize) {
        this.refreshData(() => {
            // Reset offset without trigger reload.
            this.paging.offset = 1;
            return this.paging.setPageSize(pageSize);
        }, true);
    }

    changeOffset (newOffset) {
        this.refreshData(() => this.paging.setOffset(newOffset), true, true);
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
                this.displayedRows = DatagridController.createEmptyRows(25); // eslint-disable-line no-magic-numbers
                return this.paging.loadData(skipSort);
            })
            .then(result => {
                this.displayedRows = result.data;
                if (requireScrollToTop) {
                    this.scrollToTop();
                }
                setTimeout(() => this.checkScroll(), 1000); // eslint-disable-line no-magic-numbers
            })
            .finally(() => {
                this.loading = false;
                this.firstLoading = false;
            })
            .catch(this.handleError.bind(this));
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
