import defaultTriggerTemplate from "./dropdown-trigger-default.html";

const dropdownTriggerClass = "oui-dropdown__trigger";

export default ($compile, $document) => {
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

            triggerElement.on("click", () => ctrl.onTriggerClick());
            triggerElement.on("blur", evt => ctrl.triggerBlurHandler(evt));

            triggerElement.attr({ "aria-haspopup": true, "aria-expanded": false });
            scope.$watch(() => ctrl.isOpen(), open => {
                triggerElement.attr("aria-expanded", !!open);

                if (open) {
                    // Force focus on Firefox
                    triggerElement[0].focus();
                    $document.on("keydown", evt => ctrl.triggerKeyHandler(evt));
                } else {
                    $document.off("keydown");
                }
            });

            scope.$on("$destroy", () => {
                triggerElement.off("click");
                triggerElement.off("blur");
                $document.off("keydown");
            });
        }
    };
};
