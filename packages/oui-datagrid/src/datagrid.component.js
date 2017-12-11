import controller from "./datagrid.controller";
import template from "./datagrid.html";

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
        rowLabel: "@?"
    }
};
