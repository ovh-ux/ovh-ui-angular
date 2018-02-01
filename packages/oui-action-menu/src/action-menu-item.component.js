import controller from "./action-menu-item.controller";

export default {
    controller,
    bindings: {
        text: "@",
        disabled: "<?",
        ariaLabel: "@?",
        href: "@?",
        external: "<?",
        onClick: "&?"
    }
};
