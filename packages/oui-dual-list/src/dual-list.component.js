import controller from "./dual-list.controller";
import template from "./dual-list.html";

export default {
    template,
    controller,
    controllerAs: "$ctrl",
    bindings: {
        sourceListLabel: "@?",
        targetListLabel: "@?",
        moveAllLabel: "@?",
        removeAllLabel: "@?",
        sourceListEmptyLabel: "@?",
        targetListEmptyLabel: "@?",
        addLabel: "@?",
        property: "@?",
        sourceList: "<?",
        targetList: "<?",
        onAdd: "&?",
        onRemove: "&?",
        bulkActionEnabled: "<?"
    }
};
