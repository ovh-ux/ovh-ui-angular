import HeaderTabs from "./header-tabs.component";
import HeaderTabsDivider from "../../oui-dropdown/src/divider/dropdown-divider.component";
import HeaderTabsDropdown from "./header-tabs-dropdown.component";
import HeaderTabsItem from "./header-tabs-item.component";

angular.module("oui.header-tabs", [])
    .component("ouiHeaderTabs", HeaderTabs)
    .component("ouiHeaderTabsDivider", HeaderTabsDivider)
    .component("ouiHeaderTabsDropdown", HeaderTabsDropdown)
    .component("ouiHeaderTabsItem", HeaderTabsItem);
