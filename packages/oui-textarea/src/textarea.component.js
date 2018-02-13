import controller from "./textarea.controller";
import template from "./textarea.html";

export default {
    template,
    controller,
    bindings: {
        model: "=?",
        id: "@?",
        name: "@?",
        placeholder: "@?",
        disabled: "<?",
        readonly: "<?",
        minlength: "<?",
        maxlength: "<?",
        required: "<?",
        onChange: "&?"
    }
};
