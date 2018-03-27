import controller from "./step-form.controller.js";
import template from "./step-form.html";

export default {
    require: {
        stepperCtrl: "^ouiStepper"
    },
    bindings: {
        id: "@",
        name: "@",
        header: "@",
        disabled: "<?",
        loading: "<?",
        onFocus: "&",
        onSubmit: "&",
        skippable: "<?"
    },
    controller,
    template,
    transclude: true
};
