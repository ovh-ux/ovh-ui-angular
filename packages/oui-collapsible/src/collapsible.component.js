import controller from "./collapsible.controller.js";
import template from "./collapsible.html";

export default {
    template,
    controller,
    bindings: {
        title: "@",
        ariaLabel: "@?",
        expanded: "<?"
    },
    transclude: true
};
