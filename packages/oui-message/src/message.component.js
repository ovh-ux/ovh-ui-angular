import controller from "./message.controller";
import template from "./message.html";

export default {
    template,
    controller,
    bindings: {
        type: "@",
        ariaCloseButtonLabel: "@?",
        onDismissed: "&?"
    },
    transclude: true
};
