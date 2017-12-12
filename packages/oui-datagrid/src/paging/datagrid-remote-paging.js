import DatagridPagingAbstract from "./datagrid-paging-abstract";
import { hasProperty } from "../util";

export default class DatagridRemotePaging extends DatagridPagingAbstract {
    constructor (columns, currentSorting, pageSize, pagingService, rowsLoader, rowLoader) {
        super(columns, currentSorting, pageSize, pagingService);

        this.rowsLoader = rowsLoader;
        this.rowLoader = rowLoader;
    }

    loadData (skipSort) {
        return this.rowsLoader({
            $config: Object.assign({
                offset: this.offset,
                pageSize: this.pageSize,
                sort: this.getSortingConfiguration()
            }, {
                skipSort
            })
        })
            .then(result => {
                this.loadRowsData(result.data);

                return result;
            });
    }

    loadRowsData (rows) {
        rows.forEach(row => this.loadRowData(row));
    }

    loadRowData (row) {
        if (!this.isRowLoaded(row)) {
            this.$q.when(this.rowLoader({ $row: row }))
                .then(fullRow => Object.assign(row, fullRow))

                // TODO: Find a way to forward those error to datagrid
                /* .catch(this.handleError.bind(this)) */;
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
