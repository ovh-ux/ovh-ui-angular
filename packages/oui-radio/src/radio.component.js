import controller from "./radio.controller";
import template from "./radio.html";

export default {
    require: {
        radioGroup: "?^ouiRadioGroup",
        radioToggle: "?^ouiRadioToggle"
    },
    template,
    controller,
    bindings: {
        text: "@",
        value: "<",
        description: "@?",
        id: "@?",
        name: "@?",
        model: "=?",
        onChange: "&?",
        disabled: "<?"
    }
};
