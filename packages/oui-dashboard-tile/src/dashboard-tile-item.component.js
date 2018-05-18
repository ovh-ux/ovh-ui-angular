import controller from "./dashboard-tile-item.controller.js";
import template from "./dashboard-tile-item.html";

export default {
    bindings: {
        title: "@",
        bordered: "<?"
    },
    controller,
    template,
    transclude: {
        actionMenu: "?ouiActionMenu"
    }
};
