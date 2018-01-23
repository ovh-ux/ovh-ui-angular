import controller from "./navbar.controller";
import template from "./navbar.html";

export default {
    bindings: {
        brand: "<?",
        activeLink: "@?",
        mainLinks: "<?",
        asideLinks: "<?",

        fixed: "<?"
    },
    controller,
    template
};
