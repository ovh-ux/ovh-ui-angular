import DatagridPagingAbstract from "./datagrid-paging-abstract";

export default class DatagridLocalPaging extends DatagridPagingAbstract {
    constructor (columns, currentSorting, pageSize, pagingService, rows) {
        super(columns, currentSorting, pageSize, pagingService);

        this.rows = rows;
    }

    setRows (rows) {
        this.rows = rows;

        return this.loadData();
    }

    loadData (skipSort) {
        if (!skipSort) {
            this._sort();
        }

        return this.$q.when({
            data: this.sortedRows.slice(this.offset, this.offset + this.pageSize),
            meta: {
                pageCount: Math.ceil(this.sortedRows.length / this.pageSize),
                totalCount: this.sortedRows.length
            }
        });
    }

    _sort () {
        const sortConfiguration = this.getSortingConfiguration();
        this.sortedRows = this.orderByFilter(this.rows, sortConfiguration.property, sortConfiguration.dir < 0);
    }
}
