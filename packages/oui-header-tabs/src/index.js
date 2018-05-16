import "@oui-angular/oui-header-tabs/src";
import HeaderTab from "./header-tab.directive";
import HeaderTabs from "./header-tabs.component";
import HeaderTabsService from "./header-tabs.service";

angular
    .module("oui.header-tabs", ["ngAria"])
    .component("ouiHeaderTabs", HeaderTabs)
    .directive("ouiHeaderTab", HeaderTab)
    .service("ouiHeaderTabsService", HeaderTabsService);
