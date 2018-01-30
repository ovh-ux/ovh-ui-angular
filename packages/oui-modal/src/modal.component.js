import template from "./modal.html";

export default {
    template,
    bindings: {
        title: "@",
        primaryAction: "&?",
        primaryLabel: "@?",
        secondaryAction: "&?",
        secondaryLabel: "@?",
        onDismiss: "&?"
    },
    transclude: true
};
