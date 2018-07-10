import controller from "./inline-adder-item.controller.js";
import template from "./inline-adder-item.html";

export default {
    bindings: {
        item: "<",
        isNewItem: "<",
        ariaAddItem: "@?",
        ariaRemoveItem: "@?"
    },
    require: {
        inlineAdderCtrl: "^ouiInlineAdder"
    },
    controller,
    template,
    transclude: true
};
