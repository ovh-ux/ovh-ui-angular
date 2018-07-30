import controller from "./button.controller";
import template from "./button.html";

export default {
    bindings: {
        text: "@",
        id: "@?",
        name: "@?",
        type: "@?", // values: submit|button|reset (default: button)
        variant: "@?", // values: primary|secondary|link (default: secondary)
        variantNav: "@?", // values: previous|next
        ariaLabel: "@?",

        disabled: "<?",

        onClick: "&?"
    },
    controller,
    template,
    transclude: true
};
