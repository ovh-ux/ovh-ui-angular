import controller from "./modal.controller";
import template from "./modal.html";

export default {
    template,
    controller,
    bindings: {
        heading: "@?",
        title: "@?", // Deprecated: Replaced by 'heading'
        type: "@?",
        loading: "<?",
        primaryLabel: "@?",
        primaryAction: "&",
        secondaryLabel: "@?",
        secondaryAction: "&",
        onDismiss: "&"
    },
    transclude: true
};
