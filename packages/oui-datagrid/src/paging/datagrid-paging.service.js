import DatagridLocalPaging from "./datagrid-local-paging";
import DatagridRemotePaging from "./datagrid-remote-paging";

export default class {
    constructor ($q, orderByFilter) {
        "ngInject";

        this.$q = $q;
        this.orderByFilter = orderByFilter;
    }

    createLocal (columns, sorting, pageSize, rows) {
        return new DatagridLocalPaging(columns, sorting, pageSize, this, rows);
    }

    createRemote (columns, sorting, pageSize, rowsLoader, rowLoader) {
        return new DatagridRemotePaging(columns, sorting, pageSize, this, rowsLoader, rowLoader);
    }
}
