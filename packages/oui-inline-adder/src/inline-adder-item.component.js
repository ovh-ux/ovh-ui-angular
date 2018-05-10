import controller from "./inline-adder-item.controller.js";
import template from "./inline-adder-item.html";

export default {
    template,
    controller,
    transclude: true,
    bindings: {
        item: "<",
        isNewItem: "<",
        ariaAddItem: "@?",
        ariaRemoveItem: "@?"
    },
    require: {
        parent: "^ouiInlineAdder"
    }
};
