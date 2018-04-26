import controller from "./modal.controller";
import template from "./modal.html";

export default {
    template,
    controller,
    bindings: {
        title: "@?",
        primaryAction: "&?",
        primaryLabel: "@?",
        secondaryAction: "&?",
        secondaryLabel: "@?",
        onDismiss: "&?",
        loading: "<?",
        type: "@?"
    },
    transclude: true
};
