import controller from "./dashboard-tile-item-container.controller.js";
import template from "./dashboard-tile-item-container.html";

export default {
    bindings: {
        title: "@"
    },
    controller,
    template,
    transclude: true
};
