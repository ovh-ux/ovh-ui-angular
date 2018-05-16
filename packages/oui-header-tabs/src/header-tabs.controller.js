export default class {
    constructor (ouiHeaderTabsService) {
        "ngInject";

        this.tabsService = ouiHeaderTabsService;
    }

    $onInit () {
        this.tabs = [];
    }

    addTab (tab) {
        this.tabsService.registerTab(tab);
        this.tabs = this.tabsService.getRegisteredTabs();
    }
}
