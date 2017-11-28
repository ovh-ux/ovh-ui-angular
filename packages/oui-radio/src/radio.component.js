import controller from "./radio.controller";
import template from "./radio.html";

export default {
    require: {
        group: "?^ouiRadioGroup"
    },
    template,
    controller,
    bindings: {
        label: "@?",
        value: "@",
        disabled: "<?",
        checked: "<?"
    },
    transclude: {
        label: "?ouiRadioLabel",
        description: "?ouiRadioDescription"
    }
};
