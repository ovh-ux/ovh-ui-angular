import controller from "./loader.controller";
import template from "./loader.html";

export default {
    template,
    controller,
    bindings: {
        inline: "<?",
        size: "@?"
    }
};
