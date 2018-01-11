import controller from "./navbar.controller";
import template from "./navbar.html";

export default {
    bindings: {
        brand: "<?",
        universe: "@?",
        user: "<?",

        mainLinks: "<?",
        asideLinks: "<?",

        fixed: "<?"
    },
    controller,
    template
};
