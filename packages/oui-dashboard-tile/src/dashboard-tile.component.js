import controller from "./dashboard-tile.controller.js";
import template from "./dashboard-tile.html";

export default {
    bindings: {
        title: "@"
    },
    controller,
    template,
    transclude: true
};
