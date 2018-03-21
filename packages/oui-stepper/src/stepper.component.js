import controller from "./stepper.controller.js";
import template from "./stepper.html";

export default {
    bindings: {
        name: "@",
        onInit: "&",
        onFinish: "&"
    },
    controller,
    template,
    transclude: true
};
