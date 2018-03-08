import Cell from "./cell/cell.component";
import Datagrid from "./datagrid.directive";
import DatagridColumnBuilder from "./datagrid-column-builder.service";
import DatagridPaging from "./paging/datagrid-paging.service";
import DatagridProvider from "./datagrid.provider.js";

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
    .service("ouiDatagridPaging", DatagridPaging)
    .provider("ouiDatagridConfiguration", DatagridProvider);
