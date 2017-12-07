import controller from "./table.controller";

export default {
    controller,
    bindings: {
        id: "@?",
        pageSize: "@",
        rows: "<",
        rowsLoader: "&",
        rowLoader: "&",
        onSelectionChange: "&",
        onRowClick: "&",
        rowLabel: "@"
    }
};
