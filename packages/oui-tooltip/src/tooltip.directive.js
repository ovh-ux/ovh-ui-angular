import controller from "./tooltip.controller";

export default () => ({
    restrict: "A",
    bindToController: {
        text: "@ouiTooltip",
        placement: "@?ouiTooltipPlacement", // values: top|top-start|top-end|bottom|bottom-start|bottom-end (default: top)
        isHtml: "<?ouiTooltipIsHtml"
    },
    controller,
    controllerAs: "$ctrl"
});
