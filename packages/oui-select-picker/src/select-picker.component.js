import controller from "./select-picker.controller";
import template from "./select-picker.html";

export default {
    template,
    controller,
    transclude: {
        sectionSlot: "?span"
    },
    bindings: {
        text: "@",
        description: "@?",
        picture: "@?",
        placeholder: "@?",
        values: "<",
        id: "@?",
        name: "@?",
        match: "@",
        model: "=?",
        onChange: "&?",
        disabled: "<?"
    }
};
