import KEYBOARD_KEYS from "./keyboard-keys.constant";
import Navbar from "./navbar.component";
import NavbarConfigurationProvider from "./navbar.provider.js";
import NavbarGroup from "./group/navbar-group.directive";
import NavbarGroupService from "./group/navbar-group.service";
import NavbarMenu from "./menu/navbar-menu.component";
import NavbarService from "./navbar.service";

export default angular
    .module("oui.navbar", [
        "ngAria",
        "ngSanitize"
    ])
    .constant("KEYBOARD_KEYS", KEYBOARD_KEYS)
    .component("ouiNavbar", Navbar)
    .directive("ouiNavbarGroup", NavbarGroup)
    .component("ouiNavbarMenu", NavbarMenu)
    .provider("ouiNavbarConfiguration", NavbarConfigurationProvider)
    .service("NavbarService", NavbarService)
    .service("NavbarGroupService", NavbarGroupService)
    .name;
