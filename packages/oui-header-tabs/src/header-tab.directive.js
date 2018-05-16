import _ from "lodash";
import controller from "./header-tab.controller";
import template from "./header-tab.html";

export default () => ({
    template,
    controller,
    replace: true,
    restrict: "E",
    require: ["^^ouiHeaderTabs", "ouiHeaderTab"],
    controllerAs: "$ctrl",
    bindToController: true,
    scope: {
        state: "@",
        stateParams: "<?",
        text: "@",
        disabled: "<?"
    },
    transclude: true,
    link: ($scope, $element, $attrs, $ctrls) => {
        const parentCtrl = $ctrls[0];
        const childCtrl = $ctrls[1];
        const tabAttr = _.pick(childCtrl, ["state", "stateParams", "text"]);
        tabAttr.updateActive = (active, isActivating) => {
            tabAttr.active = active;
            tabAttr.isActivating = isActivating;
            childCtrl.updateActive(tabAttr);
        };
        parentCtrl.addTab(tabAttr);
    }
});

