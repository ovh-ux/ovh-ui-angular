import Cell from "./cell/cell.component";
import DefaultPagination from "./pagination/default-pagination.component.js";
import Pagination from "./pagination.directive.js";
import Table from "./table.component";
import TableColumnBuilder from "./table-column-builder.service";
import TableProvider from "./table.provider.js";

angular.module("oui.datagrid", [])
    .service("ouiTableColumnBuilder", TableColumnBuilder)
    .component("ouiTable", Table)
    .component("ouiTableCell", Cell)
    .directive("ouiTablePagination", Pagination)
    .component("ouiTableDefaultPagination", DefaultPagination)
    .provider("ouiTableConfiguration", TableProvider);
