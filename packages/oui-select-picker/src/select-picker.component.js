import controller from "./select-picker.controller";
import template from "./select-picker.html";

export default {
    template,
    controller,
    transclude: {
        sectionSlot: "?span"
    },
    bindings: {
        model: "=?",
        id: "@?",
        name: "@?",
        text: "@", // Deprecated: Replaced by "label"
        label: "@",
        description: "@?",
        placeholder: "@?",
        picture: "@?",
        match: "@",
        values: "<",
        disabled: "<?",
        required: "<?",
        onChange: "&?",
        variant: "@?"
    }
};
