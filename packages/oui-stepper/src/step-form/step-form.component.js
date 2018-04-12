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

        loadingText: "@?",
        submitText: "@?",

        disabled: "<?",
        loading: "<?",
        navigation: "<?",
        skippable: "<?",
        valid: "<?",

        onFocus: "&",
        onSubmit: "&"
    },
    controller,
    template,
    transclude: true
};
