import controller from "./select-picker.controller";
import template from "./select-picker.html";

export default {
    template,
    controller,
    transclude: {
        descriptionSlot: "?ouiSelectPickerDescription",
        footerSlot: "?ouiSelectPickerFooter",
        pictureSlot: "?ouiSelectPickerPicture",
        sectionSlot: "?ouiSelectPickerSection",
        deprecatedSlot: "?span" // Deprecated: Replaced by "oui-select-picker-section"
    },
    bindings: {
        model: "=?",
        id: "@?",
        name: "@?",
        text: "@", // Deprecated: Replaced by "label"
        label: "@",
        description: "@?",
        footer: "@?",
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
