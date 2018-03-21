import controller from "./step-form.controller.js";
import template from "./step-form.html";

export default {
    bindings: {
        name: "@",
        header: "@",
        loading: "<?",
        onSubmit: "&",
        state: "@"
    },
    controller,
    template,
    transclude: true
};
