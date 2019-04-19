import controller from "./stepper.controller.js";
import template from "./stepper.html";

export default {
    bindings: {
        name: "@",
        id: "@",
        onInit: "&",
        onFinish: "&",
        currentIndex: "=?"
    },
    controller,
    template,
    transclude: true
};
