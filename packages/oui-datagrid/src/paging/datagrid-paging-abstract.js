import { hasProperty } from "../util";

export default class DatagridPagingAbstract {
    constructor (columns, currentSorting, pageSize, rowLoader, pagingService) {
        this.columns = columns;
        this.currentSorting = currentSorting;
        this.pageSize = pageSize;
        this.offset = 1;
        this.rowLoader = rowLoader;

        this.$q = pagingService.$q;
        this.orderByFilter = pagingService.orderByFilter;
    }

    setOffset (offset) {
        this.offset = offset;
    }

    setPageSize (pageSize) {
        this.pageSize = pageSize;
    }

    getCurrentPageSize () {
        if (!this.totalCount) {
            return this.pageSize;
        }

        return Math.min(this.pageSize, this.totalCount - (this.offset - 1));
    }

    setSort (columnName) {
        if (columnName === this.currentSorting.columnName) {
            this.currentSorting.dir = this.currentSorting.dir === -1 ? 1 : -1;
        } else {
            this.currentSorting = {
                columnName,
                dir: 1
            };
        }
    }

    getSortColumnName () {
        return this.currentSorting.columnName;
    }

    isSortAsc () {
        return this.currentSorting.dir === 1;
    }

    isSortDesc () {
        return this.currentSorting.dir === -1;
    }

    getSortingConfiguration () {
        const selectedColumn = this.getColumn(this.currentSorting.columnName);
        return Object.assign({
            property: selectedColumn && selectedColumn.sortProperty
        }, this.currentSorting);
    }

    getColumn (name) {
        for (let i = 0; i < this.columns.length; i++) {
            if (this.columns[i].name === name) {
                return this.columns[i];
            }
        }
        return null;
    }

    loadRowsData (rows) {
        if (!this.rowLoader) {
            return;
        }

        rows.forEach(row => this.loadRowData(row));
    }

    loadRowData (row) {
        if (!this.isRowLoaded(row) && !row.$promise) {
            row.$promise = this.$q.when(this.rowLoader({ $row: row }))
                .then(fullRow => Object.assign(row, fullRow))
                .finally(() => {
                    delete row.$promise;
                });

            // TODO: Find a way to forward those error to datagrid
            /* .catch(this.handleError.bind(this)) */
        }
    }

    /**
     * Check if all data is loaded on this row
     * @param  {object}  row a row
     * @return {Boolean}     true if loaded
     */
    isRowLoaded (row) {
        return this.columns.map(column => hasProperty(row, column.name))
            .reduce((a, b) => a && b, true);
    }
}
