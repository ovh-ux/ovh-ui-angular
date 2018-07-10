import controller from "./inline-adder.controller.js";

export default {
    bindings: {
        onAdd: "&",
        onRemove: "&"
    },
    controller,
    template: "<ng-transclude></ng-transclude>",
    transclude: true
};
