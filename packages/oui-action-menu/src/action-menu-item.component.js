import controller from "./action-menu-item.controller";

export default {
    controller,
    bindings: {
        text: "@",
        ariaLabel: "@?",
        href: "@?",
        divider: "<?",
        external: "<?",
        onClick: "&?"
    }
};
