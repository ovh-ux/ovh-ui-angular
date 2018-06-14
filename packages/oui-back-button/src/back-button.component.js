import controller from "./back-button.controller";
import template from "./back-button.html";

export default {
    template,
    controller,
    bindings: {
        id: "@?",
        name: "@?",
        ariaLabel: "@?",
        heading: "@?",
        title: "@?", // Deprecated: Replaced by 'heading'
        onClick: "&?",
        href: "@?"
    }
};
