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

        maxDate: "<?",
        minDate: "<?",
        disableDate: "<?",
        enableDate: "<?",

        disabled: "<?",
        required: "<?",

        onChange: "&",
        onClose: "&",
        onOpen: "&"
    },
    controller,
    template
};
