import controller from "./criteria-container.controller";

export default {
    template: "<ng-transclude></ng-transclude>",
    transclude: true,
    controller,
    bindings: {
        criteria: "=model",
        onChange: "&?"
    }
};
