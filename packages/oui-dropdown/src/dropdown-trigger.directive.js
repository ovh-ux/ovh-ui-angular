import defaultTriggerTemplate from "./dropdown-trigger-default.html";

const dropdownTriggerClass = "oui-dropdown__trigger";

export default ($compile) => {
    "ngInject";

    return {
        restrict: "AE",
        require: "^ouiDropdown",
        controller: class {},
        controllerAs: "$ctrl",
        bindToController: {
            ariaLabel: "@?",
            text: "@?"
        },
        scope: {},
        link: (scope, element, attrs, ctrl) => {
            let triggerElement = element;

            if (!ctrl.text) {
                element.removeAttr("aria-label");
            }

            if (triggerElement[0].tagName.toLowerCase() === "oui-dropdown-trigger") {
                triggerElement = $compile(defaultTriggerTemplate)(scope);
                element.replaceWith(triggerElement);
            }

            ctrl.referenceElement = triggerElement[0];
            triggerElement.addClass(dropdownTriggerClass);

            triggerElement.attr("id", ctrl.id);
            triggerElement.attr({ "aria-haspopup": true, "aria-expanded": false });

            triggerElement.on("click", () => ctrl.onTriggerClick());
            triggerElement.on("blur", evt => ctrl.triggerBlurHandler(evt));

            scope.$on("open", (e, id) => {
                if (id !== ctrl.id) {
                    return;
                }

                triggerElement.attr("aria-expanded", true);

                // Force focus on Firefox
                triggerElement[0].focus();
                triggerElement.on("keydown", evt => ctrl.triggerKeyHandler(evt));
            });

            scope.$on("close", (e, id) => {
                if (id !== ctrl.id) {
                    return;
                }

                triggerElement.attr("aria-expanded", false);
                triggerElement.off("keydown");
            });

            scope.$on("$destroy", () => {
                triggerElement.off("click");
                triggerElement.off("blur");
                triggerElement.off("keydown");
            });
        }
    };
};
