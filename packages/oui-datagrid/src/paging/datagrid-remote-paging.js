import DatagridPagingAbstract from "./datagrid-paging-abstract";

export default class DatagridRemotePaging extends DatagridPagingAbstract {
    constructor (columns, currentSorting, pageSize, rowLoader, pagingService, rowsLoader) {
        super(columns, currentSorting, pageSize, rowLoader, pagingService);

        this.rowsLoader = rowsLoader;
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
}
