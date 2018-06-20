import DropdownDivider from "../../oui-dropdown/src/divider/dropdown-divider.component";
import DropdownGroup from "../../oui-dropdown/src/group/dropdown-group.component";
import DropdownItem from "../../oui-dropdown/src/item/dropdown-item.component";
import GuideMenu from "./guide-menu.component";

angular.module("oui.guide-menu", [])
    .component("ouiGuideMenu", GuideMenu)
    .component("ouiGuideMenuDivider", DropdownDivider)
    .component("ouiGuideMenuGroup", DropdownGroup)
    .component("ouiGuideMenuItem", DropdownItem);
