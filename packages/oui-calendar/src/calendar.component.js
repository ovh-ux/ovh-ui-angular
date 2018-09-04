import controller from "./calendar.controller";
import template from "./calendar.html";

export default {
    bindings: {
        model: "=",

        id: "@?",
        name: "@?",
        placeholder: "@?",
        mode: "@?",
        format: "@?",
        altFormat: "@?",

        appendToBody: "<?",
        inline: "<?",
        maxDate: "<?",
        minDate: "<?",
        disableDate: "<?",
        enableDate: "<?",

        enableTime: "<?",

        disabled: "<?",
        required: "<?",
        weekNumbers: "<?",

        onChange: "&",
        onClose: "&",
        onOpen: "&"
    },
    controller,
    template
};
