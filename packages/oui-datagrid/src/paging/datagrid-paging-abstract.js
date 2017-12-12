export default class DatagridPagingAbstract {
    constructor (columns, currentSorting, pageSize, pagingService) {
        this.columns = columns;
        this.currentSorting = currentSorting;
        this.pageSize = pageSize;
        this.offset = 0;

        this.$q = pagingService.$q;
        this.orderByFilter = pagingService.orderByFilter;
    }

    setOffset (offset, skipSort) {
        this.offset = offset;

        return this.loadData(skipSort);
    }

    setPageSize (pageSize) {
        this.pageSize = pageSize;

        return this.loadData();
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

        return this.loadData();
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
}
