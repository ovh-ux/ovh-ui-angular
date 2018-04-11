const popoverTriggerClass = "oui-popover__trigger";

export default () => {
    "ngInject";

    return {
        restrict: "AE",
        require: "^ouiPopover",
        scope: {},
        link: (scope, element, attrs, ctrl) => {
            const triggerElement = element;

            triggerElement.addClass(popoverTriggerClass);

            triggerElement.attr("id", ctrl.id);
            triggerElement.attr({ "aria-haspopup": true, "aria-expanded": false });

            triggerElement.on("click", () => ctrl.onTriggerClick());

            scope.$on("oui:popover:afterOpen", (e, id) => {
                if (id !== ctrl.id) {
                    return;
                }

                triggerElement.attr("aria-expanded", true);
            });

            scope.$on("oui:popover:afterClose", (e, id) => {
                if (id !== ctrl.id) {
                    return;
                }

                triggerElement.attr("aria-expanded", false);
            });

            scope.$on("$destroy", () => {
                triggerElement.off("click");
            });
        }
    };
};
