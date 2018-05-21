import controller from "./dashboard-tile.controller.js";
import template from "./dashboard-tile.html";

export default {
    bindings: {
        title: "@",
        titleBorder: "<?"
    },
    controller,
    template,
    transclude: true
};
