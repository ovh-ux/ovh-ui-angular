import controller from "./popover.controller";

export default () => {
    "ngInject";

    return {
        restrict: "AE",
        bindToController: {
            text: "@ouiPopover",
            title: "@?",
            placement: "@?ouiPopoverPlacement",
            scope: "<?ouiPopoverScope",
            template: "@?ouiPopoverTemplate",
            open: "<?ouiPopoverOpen",
            onOpen: "&ouiPopoverOnOpen",
            onClose: "&ouiPopoverOnClose"
        },
        controller,
        controllerAs: "$popoverCtrl"
    };
};
