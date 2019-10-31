import controller from "./stepper.controller.js";
import template from "./stepper.html";

export default {
    bindings: {
        name: "@",
        id: "@",
        indexToFocus: "=?currentIndex",
        onInit: "&",
        onFinish: "&"
    },
    controller,
    template,
    transclude: true
};
