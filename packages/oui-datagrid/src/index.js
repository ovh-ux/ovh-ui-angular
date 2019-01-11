import Cell from "./cell/cell.component";
import Checkbox from "@ovh-ui/oui-checkbox";
import Criteria from "@ovh-ui/oui-criteria";
import Datagrid from "./datagrid.directive";
import DatagridColumnBuilder from "./datagrid-column-builder.service";
import DatagridExtraTop from "./extra-top/extra-top.component";
import DatagridPaging from "./paging/datagrid-paging.service";
import DatagridParameters from "./parameters/datagrid-parameters.component";
import DatagridProvider from "./datagrid.provider";
import DatagridService from "./datagrid.service";
import Pagination from "@ovh-ui/oui-pagination";
import Spinner from "@ovh-ui/oui-spinner";

export default angular
    .module("oui.datagrid", [
        "ngAria",
        Checkbox,
        Criteria,
        Pagination,
        Spinner
    ])
    .service("ouiDatagridColumnBuilder", DatagridColumnBuilder)
    .directive("ouiDatagrid", Datagrid)
    .component("ouiDatagridCell", Cell)
    .component("ouiDatagridExtraTop", DatagridExtraTop)
    .service("ouiDatagridPaging", DatagridPaging)
    .provider("ouiDatagridConfiguration", DatagridProvider)
    .service("ouiDatagridService", DatagridService)
    .component("ouiDatagridParameters", DatagridParameters)
    .name;
