import DatagridPagingAbstract from "./datagrid-paging-abstract";

export default class DatagridLocalPaging extends DatagridPagingAbstract {
    constructor (columns, currentSorting, pageSize, rowLoader, pagingService, rows) {
        super(columns, currentSorting, pageSize, rowLoader, pagingService);

        this.rows = rows;
        this.rowLoader = rowLoader;
        this.totalCount = rows ? rows.length : 0;
    }

    setRows (rows) {
        this.rows = rows;
        this.totalCount = rows ? rows.length : 0;
    }

    loadData (skipSort) {
        if (!skipSort) {
            this._sort();
        }

        return this.$q.when({
            data: this.sortedRows.slice(this.offset - 1, this.offset - 1 + this.pageSize),
            meta: {
                pageCount: Math.ceil(this.sortedRows.length / this.pageSize),
                totalCount: this.sortedRows.length
            }
        })
            .then(result => {
                this.preventLoadingRows = true;
                this.loadRowsData(result.data)
                    .finally(() => {
                        // Delay the change of the value to prevent $doCheck of DatagridController
                        // calling refreshData for the last update.
                        this.$timeout(() => {
                            this.preventLoadingRows = false;
                        });
                    });
                this.totalCount = result.meta.totalCount;

                return result;
            });
    }

    _sort () {
        const sortConfiguration = this.getSortingConfiguration();
        this.sortedRows = this.orderByFilter(this.rows, sortConfiguration.property, sortConfiguration.dir < 0);
    }
}
