import { hasProperty, range } from "./util";

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
        this._pageSize = parseInt(this.pageSize, 10) || this.config.pageSize;
        this.pageMeta = {
            currentOffset: 0,
            currentPage: 1,
            pageSize: this._pageSize
        };
    }

    $postLink () {
        this.$transclude((clone) => {
            const columnElements = DatagridController.filterElements(clone, "oui-column");

            const builtColumns = this.ouiDatagridColumnBuilder.build(columnElements, this.$scope);
            this.columns = builtColumns.columns;

            if (this.rowsLoader) {
                this.paging = this.ouiDatagridPaging.createRemote(this.columns, builtColumns.currentSorting, this.pageMeta.pageSize, this.rowLoader, this.rowsLoader);
                this.pageMeta.currentOffset = 0;
                this.refreshData(() => this.paging.setOffset(this.pageMeta.currentOffset));
            } else {
                this.paging = this.ouiDatagridPaging.createLocal(this.columns, builtColumns.currentSorting, this.pageMeta.pageSize, this.rowLoader, this.rows);
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
                this.pageMeta.currentOffset = 0;
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

    getCurrentOffset () {
        return this.pageMeta.currentOffset;
    }

    getCurrentPage () {
        return Math.floor(this.getCurrentOffset() / this.getPageSize()) + 1;
    }

    getPageCount () {
        return this.pageMeta.pageCount;
    }

    getPageSize () {
        return this.pageMeta.pageSize;
    }

    getTotalCount () {
        return this.pageMeta.totalCount;
    }

    previousPage () {
        this.changeOffset(+this.getCurrentOffset() - this.getPageSize());
    }

    nextPage () {
        this.changeOffset(+this.getCurrentOffset() + this.getPageSize());
    }

    goToPage (newPage) {
        this.changeOffset(((newPage - 1) * this.getPageSize()) + 1);
    }

    setPageSize (pageSize) {
        this._pageSize = pageSize;
        this.updatePageMeta({
            currentOffset: 0,
            pageCount: Math.ceil(this.pageMeta.totalCount / this._pageSize),
            totalCount: this.pageMeta.totalCount
        });

        this.scrollToTop();

        this.refreshData(() => this.paging.setPageSize(pageSize));
    }

    scrollToTop () {
        this.$element[0].scrollIntoView(true);
    }

    changeOffset (newOffset) {
        this.scrollToTop();

        this.pageMeta.currentOffset = newOffset;

        this.refreshData(() => this.paging.setOffset(newOffset, true));
    }

    refreshData (callback) {
        if (this.loading) {
            return this.$q.reject(false);
        }

        return callback()
            .then(result => {
                this.displayedRows = result.data;
                this.updatePageMeta(Object.assign(this.pageMeta, result.meta));
                this.loading = false;
            })
            .catch(this.handleError.bind(this));
    }

    updatePageMeta ({ currentOffset, pageCount, totalCount, pageSize }) {
        const newPageSize = pageSize || this._pageSize;
        this.pageMeta = {
            currentOffset,
            currentPage: Math.ceil(currentOffset / newPageSize),
            pageCount,
            totalCount,
            pageSize: newPageSize
        };
    }

    getPageRepeatRange () {
        if (this.getPageCount() === this.getCurrentPage()) {
            return range(this.getTotalCount() - ((this.getPageCount() - 1) * this.getPageSize()));
        }

        return range(this.getPageSize());
    }

    getRepeatRange (size) { // eslint-disable-line
        return range(size);
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
