import controller from "./table.controller";
import template from "./table.html";

export default {
    controller,
    template,
    transclude: true,
    bindings: {
        id: "@?",
        pageSize: "@?",
        rows: "<?",
        rowsLoader: "&?",
        rowLoader: "&?",
        onSelectionChange: "&?",
        onRowClick: "&?",
        rowLabel: "@?"
    }
};
