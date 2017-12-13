import { hasProperty } from "./util";

const cssSorted = "oui-datagrid__cell_sorted";
const cssSortable = "oui-datagrid__header_sortable";
const cssSortableAsc = "oui-datagrid__header_sortable-asc";
const cssSortableDesc = "oui-datagrid__header_sortable-desc";

export default class DatagridController {
    constructor ($attrs, $element, $transclude, $q, $scope, orderByFilter, ouiDatagridPaging, ouiDatagridColumnBuilder, ouiDatagridConfiguration) {
        "ngInject";

        this.$attrs = $attrs;
        this.$element = $element;
        this.$transclude = $transclude;
        this.$q = $q;
        this.$scope = $scope;
        this.orderBy = orderByFilter;
        this.ouiDatagridPaging = ouiDatagridPaging;
        this.ouiDatagridColumnBuilder = ouiDatagridColumnBuilder;

        this.config = ouiDatagridConfiguration;
    }

    $onInit () {
        this.firstLoading = true;
        this.pageSize = parseInt(this.pageSize, 10) || this.config.pageSize;
    }

    $postLink () {
        this.$transclude((clone) => {
            const columnElements = DatagridController.filterElements(clone, "oui-column");

            const builtColumns = this.ouiDatagridColumnBuilder.build(columnElements, this.$scope);
            this.columns = builtColumns.columns;

            if (this.rowsLoader) {
                this.paging = this.ouiDatagridPaging.createRemote(this.columns, builtColumns.currentSorting, this.pageSize, this.rowLoader, this.rowsLoader);
                this.refreshData(() => this.paging.setOffset(1));
            } else {
                this.paging = this.ouiDatagridPaging.createLocal(this.columns, builtColumns.currentSorting, this.pageSize, this.rowLoader, this.rows);
            }

            const paginationElement = this.$element.find("pagination");
            if (paginationElement.length) {
                this.setPaginationTemplate(paginationElement.html());
            }
        });
    }

    $doCheck () {
        if (!angular.equals(this.previousRows, this.rows)) {
            this.previousRows = angular.copy(this.rows);

            if (this.rows) {
                this.refreshData(() => this.paging.setRows(this.rows));
            }
        }
    }

    getParentScope () {
        return this.$scope.$parent;
    }

    hasProperty (obj, prop) { // eslint-disable-line
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
        });
    }

    changeOffset (newOffset) {
        this.refreshData(() => this.paging.setOffset(newOffset, true));
    }

    scrollToTop () {
        this.$element[0].scrollIntoView(true);
    }

    refreshData (callback) {
        if (this.loading) {
            return this.$q.reject(false);
        }

        this.loading = true;
        return callback()
            .then(result => {
                this.displayedRows = result.data;
                this.scrollToTop();
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

    setPaginationTemplate (paginationTemplate) {
        if (paginationTemplate) {
            this.paginationTemplate = `<div>${paginationTemplate}</div>`;
        }
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
