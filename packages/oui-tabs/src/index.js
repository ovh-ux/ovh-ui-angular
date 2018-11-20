import Tabs from "./tabs.component";
import TabsItem from "./item/tabs-item.component";

export default angular
    .module("oui.tabs", [])
    .component("ouiTabs", Tabs)
    .component("ouiTabsItem", TabsItem)
    .name;
