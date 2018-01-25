import controller from "./field.controller.js";
import template from "./field.html";

export default {
    bindings: {
        "for": "@?",
        name: "@?",
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
