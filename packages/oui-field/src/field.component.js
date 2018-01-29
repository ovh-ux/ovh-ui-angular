import controller from "./field.controller.js";
import template from "./field.html";

export default {
    bindings: {
        "for": "@?",
        label: "@?",
        helpText: "@?"
    },
    controller,
    require: {
        form: "?^^form"
    },
    template,
    transclude: true
};
