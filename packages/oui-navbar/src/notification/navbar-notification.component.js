import controller from "./navbar-notification.controller";
import template from "./navbar-notification.html";

export default {
    require: {
        navbarCtrl: "^^ouiNavbar"
    },
    bindings: {
        menuLinks: "<links",
        menuName: "@name",
        limitTo: "<?",
        headerTemplate: "<?",
        headerTitle: "@",
        footerTemplate: "<?",
        footerTitle: "@",
        footerUrl: "@"
    },
    controller,
    template
};
