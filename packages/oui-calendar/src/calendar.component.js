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

        appendTo: "<?",
        inline: "<?",
        "static": "<?",

        maxDate: "<?",
        minDate: "<?",
        disableDate: "<?",
        enableDate: "<?",

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
