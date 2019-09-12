import controller from "./navbar-menu.controller";
import template from "./navbar-menu.html";

export default {
    require: {
        navbarCtrl: "^^ouiNavbar"
    },
    bindings: {
        backButton: "<?",
        headerBreadcrumb: "@?",
        headerClass: "@?",
        headerTitle: "@?",
        headerHref: "@?",
        menuLinks: "<links",
        menuName: "@name",
        align: "@?",
        fixed: "<?"
    },
    transclude: {
        header: "?ouiNavbarMenuHeader"
    },
    controller,
    template
};
