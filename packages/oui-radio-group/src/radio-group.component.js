import controller from "./radio-group.controller";

export default {
    template: "<ng-transclude></ng-transclude>",
    controller,
    bindings: {
        name: "@?",
        value: "<?",
        onChange: "&?"
    },
    transclude: true
};
