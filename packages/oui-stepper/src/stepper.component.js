import controller from "./stepper.controller.js";
import template from "./stepper.html";

export default {
    bindings: {
        name: "@",
        linear: "<?",
        onInit: "&",
        onFinish: "&"
    },
    controller,
    template,
    transclude: true
};
