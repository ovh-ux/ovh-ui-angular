export default class {
    constructor (ouiHeaderTabsService) {
        "ngInject";

        this.tabsService = ouiHeaderTabsService;
    }

    $onInit () {
        this.tabs = [];
    }

    $onDestroy () {
        this.tabsService.destroy();
    }

    addTab (tab) {
        this.tabsService.registerTab(tab);
        this.tabs = this.tabsService.getRegisteredTabs();
    }
}
