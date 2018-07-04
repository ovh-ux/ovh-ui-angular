import controller from "./switch.controller";
import template from "./switch.html";

export default {
    controller,
    template,
    bindings: {
        disabled: "<?",
        id: "@?",
        model: "=?",
        name: "@?",
        onChange: "&?",
        required: "<?"
    }
};
