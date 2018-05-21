import controller from "./dashboard-tile-item.controller.js";
import template from "./dashboard-tile-item.html";

export default {
    bindings: {
        title: "@",
        bottomBorder: "<?"
    },
    controller,
    template,
    transclude: {
        actionMenu: "?ouiActionMenu"
    }
};
