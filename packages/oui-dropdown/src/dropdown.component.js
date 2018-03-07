import controller from "./dropdown.controller";
import template from "./dropdown.html";

export default {
    template,
    controller,
    bindings: {
        align: "@?",
        arrow: "<?",
        persistent: "<?"
    },
    transclude: true
};
