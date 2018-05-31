import controller from "./page-header.controller.js";
import template from "./page-header.html";

export default {
    template,
    controller,
    bindings: {
        title: "@?",
        subtitle: "@?"
    },
    transclude: {
        guide: "?ouiGuide",
        tabs: "?ouiHeaderTabs"
    }
};
