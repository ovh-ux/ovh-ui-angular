import Cell from "./cell/cell.component";
import Datagrid from "./datagrid.directive";
import DatagridColumnBuilder from "./datagrid-column-builder.service";
import DatagridExtraTop from "./extra-top/extra-top.component";
import DatagridPaging from "./paging/datagrid-paging.service";
import DatagridProvider from "./datagrid.provider.js";
import DatagridService from "./datagrid.service.js";

angular
    .module("oui.datagrid", [
        "oui.pagination",
        "oui.dropdown",
        "oui.criteria-container",
        "oui.search",
        "ngAria"
    ])
    .service("ouiDatagridColumnBuilder", DatagridColumnBuilder)
    .directive("ouiDatagrid", Datagrid)
    .component("ouiDatagridCell", Cell)
    .component("ouiDatagridExtraTop", DatagridExtraTop)
    .service("ouiDatagridPaging", DatagridPaging)
    .provider("ouiDatagridConfiguration", DatagridProvider)
    .service("ouiDatagridService", DatagridService);
