import controller from "./navbar-menu.controller";
import template from "./navbar-menu.html";

export default {
    bindings: {
        backButton: "<?",
        childrenClass: "@?",
        headerBreadcrumb: "@?",
        headerClass: "@?",
        headerTitle: "@?",
        menuLinks: "<links",
        menuName: "@name",
        navigation: "=",

        expanded: "<"
    },
    controller,
    template
};
