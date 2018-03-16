import controller from "./field.controller.js";
import template from "./field.html";

export default {
    bindings: {
        label: "@?",
        helpText: "@?",
        size: "@?",
        errorMessages: "<?"
    },
    controller,
    require: {
        form: "?^^form"
    },
    template,
    transclude: true
};
