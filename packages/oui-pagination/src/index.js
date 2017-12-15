import Pagination from "./pagination.component";
import PaginationConfigurationProvider from "./pagination.provider";

angular.module("oui.pagination", [])
    .component("ouiPagination", Pagination)
    .provider("ouiPaginationConfiguration", PaginationConfigurationProvider);
