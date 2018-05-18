import controller from "./header-tab.controller";
import template from "./header-tab.html";

export default {
    template,
    controller,
    require: {
        tabsCtrl: "^^ouiHeaderTabs"
    },
    transclude: true,
    bindings: {
        state: "@",
        stateParams: "<?",
        text: "@",
        disabled: "<?",
        active: "<?"
    }
};
