import controller from "./tabs-item.controller";
import template from "./tabs-item.html";

export default {
    require: {
        tabsCtrl: "^ouiTabs"
    },
    bindings: {
        id: "@?",
        heading: "@?",
        ariaLabel: "@?",
        checked: "<?"
    },
    controller,
    template,
    transclude: true
};
