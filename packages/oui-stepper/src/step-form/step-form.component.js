import controller from "./step-form.controller.js";
import template from "./step-form.html";

export default {
    require: {
        stepper: "^ouiStepper"
    },
    bindings: {
        id: "@",
        name: "@",
        header: "@",
        loading: "<?",
        onSubmit: "&",
        disabled: "<?"
    },
    controller,
    template,
    transclude: true
};
