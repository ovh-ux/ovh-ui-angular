import controller from "./status.controller";
import template from "./status.html";

export default {
    template,
    controller,
    bindings: {
        type: "@"
    },
    transclude: true
};
