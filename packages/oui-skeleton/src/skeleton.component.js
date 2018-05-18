import controller from "./skeleton.controller";
import template from "./skeleton.html";

export default {
    controller,
    controllerAs: "$ctrl",
    template,
    bindings: {
        loading: "<",
        width: "@"
    },
    transclude: true
};
