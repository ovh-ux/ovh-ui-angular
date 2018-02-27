import controller from "./search.controller";
import template from "./search.html";

export default {
    bindings: {
        model: "=",
        id: "@?",
        name: "@?",
        placeholder: "@?",
        ariaLabel: "@?",

        disabled: "<?",

        onChange: "&?",
        onReset: "&?",
        onSubmit: "&?"
    },
    controller,
    template
};
