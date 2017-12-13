import DatagridPagingAbstract from "./datagrid-paging-abstract";

export default class DatagridLocalPaging extends DatagridPagingAbstract {
    constructor (columns, currentSorting, pageSize, rowLoader, pagingService, rows) {
        super(columns, currentSorting, pageSize, rowLoader, pagingService);

        this.rows = rows;
        this.rowLoader = rowLoader;
    }

    setRows (rows) {
        this.rows = rows;

        return this.loadData();
    }

    loadData (skipSort) {
        if (!skipSort) {
            this._sort();
        }

        console.log(this.offset);

        return this.$q.when({
            data: this.sortedRows.slice(this.offset - 1, this.offset - 1 + this.pageSize),
            meta: {
                pageCount: Math.ceil(this.sortedRows.length / this.pageSize),
                totalCount: this.sortedRows.length
            }
        })
            .then(result => {
                this.loadRowsData(result.data);
                this.totalCount = result.meta.totalCount;

                return result;
            });
    }

    _sort () {
        const sortConfiguration = this.getSortingConfiguration();
        this.sortedRows = this.orderByFilter(this.rows, sortConfiguration.property, sortConfiguration.dir < 0);
    }
}
