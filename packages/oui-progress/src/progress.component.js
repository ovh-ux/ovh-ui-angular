import controller from "./progress.controller";
import template from "./progress.html";

export default {
    template,
    controller,
    bindings: {
        type: "@",
        value: "<",
        compact: "<?",
        maxValue: "@?",
        label: "@?"
    },
    transclude: true
};
