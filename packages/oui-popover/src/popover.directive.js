import controller from "./popover.controller";

export default () => ({
    restrict: "AE",
    bindToController: {
        text: "@ouiPopover",
        id: "@?ouiPopoverId",
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
});
