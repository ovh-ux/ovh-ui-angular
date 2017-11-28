import controller from "./checkbox.controller";
import template from "./checkbox.html";

export default {
    template,
    controller,
    bindings: {
        text: "@",
        id: "@?",
        name: "@?",
        model: "=?",
        onChange: "&?",
        disabled: "<?"
    }
};
