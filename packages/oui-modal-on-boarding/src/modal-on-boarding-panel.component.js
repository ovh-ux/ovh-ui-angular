import controller from "./modal-on-boarding-panel.controller";
import template from "./modal-on-boarding-panel.html";

export default {
    template,
    controller,
    bindings: {
        title: "@?",
        text: "@?",
        picture: "@?",
        onClick: "&?",
        href: "@?",
        external: "<?",
        label: "@?"
    }
};
