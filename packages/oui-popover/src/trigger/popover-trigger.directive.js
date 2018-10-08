import controller from "./popover-trigger.controller";

export default () => {
    "ngInject";

    return {
        restrict: "AE",
        require: {
            popover: "^ouiPopover"
        },
        controller,
        bindToController: true,
        scope: {}
    };
};
