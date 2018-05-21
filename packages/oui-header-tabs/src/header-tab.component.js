import controller from "./header-tab.controller";
import template from "./header-tab.html";

export default {
    template,
    controller,
    require: {
        tabCtrl: "^ouiHeaderTab",
        tabsCtrl: "^ouiHeaderTabs"
    },
    transclude: {
        tabHeading: "?ouiTabHeading"
    },
    bindings: {
        state: "@",
        stateParams: "<?",
        text: "@",
        disabled: "<?",
        active: "<?"
    }
};
