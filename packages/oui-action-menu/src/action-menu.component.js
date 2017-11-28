import controller from "./action-menu.controller.js";
import template from "./action-menu.html";

export default {
    template,
    controller,
    bindings: {
        text: "@",
        align: "@?",
        ariaLabel: "@?",
        compact: "<?"
    },
    transclude: true
};
