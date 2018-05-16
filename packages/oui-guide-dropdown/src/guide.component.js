import controller from "./guide.controller";
import template from "./guide.html";

export default {
    template,
    controller,
    bindings: {
        title: "@"
    },
    transclude: true
};
