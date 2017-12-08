import { hasProperty, range } from "./util";

const keyCodes = {
    escape: 27,
    space: 32
};

const cssSorted = "oui-datagrid__cell_sorted";
const cssSortable = "oui-datagrid__header_sortable";
const cssSortableAsc = "oui-datagrid__header_sortable-asc";
const cssSortableDesc = "oui-datagrid__header_sortable-desc";
const cssClosed = "oui-datagrid__row_closed";

export default class DatagridController {
    constructor ($attrs, $compile, $element, $transclude, $parse, $q, $scope, $timeout, orderByFilter, ouiTableColumnBuilder, ouiTableConfiguration) {
        "ngInject";

        this.$attrs = $attrs;
        this.$compile = $compile;
        this.$element = $element;
        this.$transclude = $transclude;
        this.$parse = $parse;
        this.$q = $q;
        this.$scope = $scope;
        this.$timeout = $timeout;
        this.orderBy = orderByFilter;
        this.ouiTableColumnBuilder = ouiTableColumnBuilder;

        this.config = ouiTableConfiguration;

        if (this.config.selectorTemplate && !this.compiledSelectorTemplate) {
            this.compiledSelectorTemplate = $compile(`<div>${this.config.selectorTemplate}</div>`);
        }
    }

    $onInit () {
        if (this.$attrs.rows && (!this.rows || !(this.rows instanceof Array))) {
            this.rows = [];
        }

        this.loading = false;
        this.currentSorting = {
            columnName: undefined,
            dir: 0
        };
        this.filterConfig = {};

        this.displayedRows = [];
        this.filteredRows = this.rows;
        this.sortedRows = this.rows;

        // Opened rows (for phone screens)
        this.isRowOpen = {};

        this._pageSize = parseInt(this.pageSize, 10) || this.config.pageSize;
        this.pageMeta = {
            currentOffset: 0,
            currentPage: 1,
            pageSize: this._pageSize
        };

        this.allSelected = false;
        this.selection = [];

        this.canClickOnRow = this.$attrs.onRowClick;
    }

    $postLink () {
        this.$transclude((clone) => {
            const columnElements = DatagridController.filterElements(clone, "column");

            const builtColumns = this.ouiTableColumnBuilder.build(columnElements, this.$scope);
            this.columns = builtColumns.columns;
            this.currentSorting = builtColumns.currentSorting;

            // Once columns has been processed,
            // we can proceed with the first loading
            this.initPage();

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
                this.updateRows();
            }
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

    initPage () {
        if (this.rowsLoader) {
            this.changePage({ skipSort: true })
                .catch(this.handleError.bind(this));
        } else if (!this.rows) {
            throw new Error("No data nor data loader found");
        }
    }

    updateRows () {
        this.filteredRows = this.rows;
        this.sortedRows = this.rows;

        this.updatePageMeta({
            currentOffset: 0,
            pageCount: Math.ceil(this.rows.length / this._pageSize),
            totalCount: this.rows.length
        });

        // TODO: Use a custom template when empty
        if (this.rows.length) {
            this.changePage()
                .catch(this.handleError.bind(this));
        } else {
            this.displayedRows = this.rows;
        }
    }

    getParentScope () {
        return this.$scope.$parent;
    }

    isSelectable () {
        return this.$attrs.onSelectionChange;
    }

    selectionChange () {
        const $selection = this.displayedRows.filter((row, index) => this.selection[index]);
        this.onSelectionChange({ $selection });
        this.allSelected = $selection.length === this.getPageRepeatRange().length;
    }

    allSelectedChange () {
        this.getPageRepeatRange().forEach(index => {
            this.selection[index] = this.allSelected;
        });
        this.onSelectionChange({
            $selection: this.allSelected ? this.displayedRows : []
        });
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

        this.changePage({ skipSort: true })
            .catch(this.handleError.bind(this));
    }

    scrollToTop () {
        this.$element[0].scrollIntoView(true);
    }

    changeOffset (newOffset) {
        const oldOffset = this.getCurrentOffset();
        const oldSelection = angular.copy(this.selection);
        const oldAllSelected = this.allSelected;

        this.scrollToTop();

        this.pageMeta.currentOffset = newOffset;
        this.selection = [];
        this.allSelected = false;

        this.changePage({ skipSort: true })
            .then(() => {
                this.selectionChange();
            })
            .catch(() => {
                this.pageMeta.currentOffset = oldOffset;
                this.selection = oldSelection;
                this.allSelected = oldAllSelected;
            });
    }

    refreshFilter (filterConfig = {}) {
        this.pageMeta.currentOffset = 0;
        this.filterConfig = filterConfig;
        this.changePage();
    }

    /**
     * Show current data frame according currentOffset, pageSize and currentSorting.
     * Controls the loading state.
     * Possibility to skip sort on page change with local data.
     */
    changePage (config = {}) {
        if (this.loading) {
            return this.$q.reject(false);
        }

        let loadPage;

        if (this.rows) {
            loadPage = this.localLoadData.bind(this, config, this.filterConfig);
        } else {
            loadPage = this.loadData.bind(this, this.filterConfig);
        }

        this.loading = true;
        return this.$q.when(loadPage())
            .then(result => {
                this.displayedRows = result.data;
                this.updatePageMeta(result.meta);

                this.loadRowsData(this.displayedRows);

                this.$timeout(() => {
                    this.isRowOpen = {};
                    this.loading = false;
                });
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

    /**
     * Change page with local data
     */
    localLoadData (config = {}, filterConfig = {}) {
        // Filter data
        this.filteredRows = this.rows;
        if (filterConfig.searchText) {
            const regExp = new RegExp(filterConfig.searchText, "i");

            this.filteredRows = this.rows.filter(row => {
                const columnsPropertiesGetters = this.columns
                    .filter(column => !!column.getValue) // column must have a name
                    .map(column => column.getValue);
                for (let i = 0; i < columnsPropertiesGetters.length; i++) {
                    if (regExp.test(columnsPropertiesGetters[i](row))) {
                        return true;
                    }
                }
                return false;
            });
        }

        // Sorting, only executed if sortConfiguration has changed
        if (!config.skipSort) {
            const sortConfiguration = this.getSortingConfiguration();
            this.sortedRows = this.orderBy(this.filteredRows, sortConfiguration.property, sortConfiguration.dir < 0);
        }

        return this.$q.when({
            data: this.sortedRows.slice(this.getCurrentOffset(), this.getCurrentOffset() + this.getPageSize()),
            meta: Object.assign(this.pageMeta, {
                pageCount: Math.ceil(this.sortedRows.length / this.pageMeta.pageSize),
                totalCount: this.sortedRows.length
            })
        });
    }

    /**
     * Change page with remote data
     */
    loadData (config = {}) {
        return this.rowsLoader({
            $config: Object.assign({
                offset: this.getCurrentOffset(),
                pageSize: this.getPageSize(),
                sort: this.getSortingConfiguration()
            }, config)
        });
    }

    loadRowsData (rows) {
        rows.forEach(row => this.loadRowData(row));
    }

    loadRowData (row) {
        if (!this.isRowLoaded(row)) {
            this.$q.when(this.rowLoader({ $row: row }))
                .then(fullRow => Object.assign(row, fullRow))
                .catch(this.handleError.bind(this));
        }
    }

    /**
     * Check if all data is loaded on this row
     * @param  {object}  row a row
     * @return {Boolean}     true if loaded
     */
    isRowLoaded (row) {
        return this.columns.map(column => this.hasProperty(row, column.name))
            .reduce((a, b) => a && b, true);
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

        const oldOffset = this.getCurrentOffset();
        const oldSorting = angular.copy(this.currentSorting);
        const oldSelection = angular.copy(this.selection);
        const oldAllSelected = this.allSelected;

        if (column.name === this.currentSorting.columnName) {
            this.currentSorting.dir = this.currentSorting.dir === -1 ? 1 : -1;
        } else {
            this.currentSorting = {
                columnName: column.name,
                dir: 1
            };
        }

        this.pageMeta.currentOffset = 0;
        this.selection = [];
        this.allSelected = false;
        this.changePage()
            .then(() => {
                this.selectionChange();
            })
            .catch(() => {
                this.pageMeta.currentOffset = oldOffset;
                this.currentSorting = oldSorting;
                this.selection = oldSelection;
                this.allSelected = oldAllSelected;
            });
    }

    getSortingConfiguration () {
        const selectedColumn = this.getColumn(this.currentSorting.columnName);
        return Object.assign({
            property: selectedColumn && selectedColumn.sortProperty
        }, this.currentSorting);
    }

    getSortableClasses (column) {
        if (column.name !== this.currentSorting.columnName) {
            return {
                [cssSortable]: !!column.sortable
            };
        }
        return {
            [cssSortable]: !!column.sortable,
            [cssSorted]: true,
            [cssSortableAsc]: this.currentSorting.dir === 1,
            [cssSortableDesc]: this.currentSorting.dir === -1
        };
    }

    isClosed (index) {
        return !this.isRowOpen[index];
    }

    getClosedClass (index) {
        return {
            [cssClosed]: this.isClosed(index)
        };
    }

    toggleLine (index) {
        this.isRowOpen[index] = !this.isRowOpen[index];
    }

    rowClick ($row, $event) {
        if (this.canClickOnRow) {
            this.onRowClick({ $row, $event });
        }
    }

    rowKeyDown ($row, $event) {
        // Space
        if ($event.keyCode === keyCodes.space && this.canClickOnRow) {
            this.onRowClick({ $row, $event });
        }
    }

    getRowLabel ($row) {
        if (this.$attrs.onRowClick) {
            return this.$parse(this.rowLabel)({ $row });
        }
        return "";
    }

    getColumn (name) {
        for (let i = 0; i < this.columns.length; i++) {
            if (this.columns[i].name === name) {
                return this.columns[i];
            }
        }
        return null;
    }

    setPaginationTemplate (paginationTemplate) {
        if (paginationTemplate) {
            this.paginationTemplate = `<div>${paginationTemplate}</div>`;
        }
    }
}
