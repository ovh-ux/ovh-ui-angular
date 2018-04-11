import contentTemplate from "./popover-content.html";

export default () => {
    "ngInject";

    return {
        restrict: "AE",
        require: {
            popover: "^ouiPopover"
        },
        controller: class {},
        controllerAs: "$ctrl",
        bindToController: true,
        scope: {},
        template: contentTemplate,
        transclude: true
    };
};
