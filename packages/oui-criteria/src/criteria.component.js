import controller from "./criteria.controller";

export default {
    template: "<ng-transclude></ng-transclude>",
    transclude: true,
    controller,
    bindings: {
        onChange: "&"
    }
};
