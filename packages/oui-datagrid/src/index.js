import Cell from "./cell/cell.component";
import Datagrid from "./datagrid.component";
import DatagridColumnBuilder from "./datagrid-column-builder.service";
import DatagridProvider from "./datagrid.provider.js";
import DefaultPagination from "./pagination/default-pagination.component.js";
import Pagination from "./pagination.directive.js";

angular.module("oui.datagrid", [])
    .service("ouiDatagridColumnBuilder", DatagridColumnBuilder)
    .component("ouiDatagrid", Datagrid)
    .component("ouiDatagridCell", Cell)
    .directive("ouiTablePagination", Pagination)
    .component("ouiTableDefaultPagination", DefaultPagination)
    .provider("ouiDatagridConfiguration", DatagridProvider);
