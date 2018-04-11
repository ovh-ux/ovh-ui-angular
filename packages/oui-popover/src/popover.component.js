import controller from "./popover.controller";
import template from "./popover.html";

export default {
    template,
    controller,
    bindings: {
        placement: "@?"
    },
    transclude: true
};
