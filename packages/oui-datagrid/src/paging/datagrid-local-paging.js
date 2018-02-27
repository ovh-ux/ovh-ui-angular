import DatagridPagingAbstract from "./datagrid-paging-abstract";
import Filter from "../filter";

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
        this._filter();

        if (!skipSort) {
            this._sort();
        } else {
            this.sortedRows = this.filteredRows;
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

    _filter () {
        const filter = new Filter(this.criteria, this.columns);
        this.filteredRows = filter.applyFilter(this.rows);
    }

    _sort () {
        const sortConfiguration = this.getSortingConfiguration();
        this.sortedRows = this.orderByFilter(this.filteredRows, sortConfiguration.property, sortConfiguration.dir < 0);
    }
}
