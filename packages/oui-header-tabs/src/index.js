import "@oui-angular/oui-header-tabs/src";
import HeaderTab from "./header-tab.component";
import HeaderTabContentTransclude from "./header-tab-content-transclude.directive";
import HeaderTabs from "./header-tabs.component";

angular
    .module("oui.header-tabs", ["ngAria"])
    .component("ouiHeaderTabs", HeaderTabs)
    .component("ouiHeaderTab", HeaderTab)
    .directive("ouiTabContentTransclude", HeaderTabContentTransclude);
