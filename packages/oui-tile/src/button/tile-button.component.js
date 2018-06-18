import controller from "./tile-button.controller";
import template from "./tile-button.html";

export default {
    template,
    controller,
    bindings: {
        text: "@?",
        onClick: "&?",
        href: "@?",
        ariaLabel: "@?"
    },
    transclude: true
};
