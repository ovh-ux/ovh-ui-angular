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
        description: "@?",

        disabled: "<?",
        loading: "<?",
        loadingText: "@?",
        skippable: "<?",

        onFocus: "&",
        onSubmit: "&"
    },
    controller,
    template,
    transclude: true
};
