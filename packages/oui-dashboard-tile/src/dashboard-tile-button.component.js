import controller from "./dashboard-tile-button.controller.js";
import template from "./dashboard-tile-button.html";

export default {
    bindings: {
        text: "@",
        id: "@?",
        name: "@?",
        ariaLabel: "@?",
        disabled: "<?",
        onClick: "&?"
    },
    controller,
    template
};
