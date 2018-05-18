import find from "lodash/find";
export default class {
    constructor ($state, $transitions) {
        "ngInject";
        this.$state = $state;
        this.onTransitionHandler = $transitions.onSuccess({}, () => {
            this.updateActiveTab();
        });
    }

    $onInit () {
        this.tabs = [];
        this.activeTab = null;
    }

    updateActiveTab () {
        const currentActiveTab = find(this.tabs, tab => tab.state && this.$state.includes(tab.state));
        if (currentActiveTab && !currentActiveTab.isEqual(this.activeTab)) {
            this.selectTab(currentActiveTab);
        } else if (this.activeTab) {
            this.unselectTab(this.activeTab);
        }
    }

    addTab (tab) {
        this.tabs.push(tab);
        if (!this.activeTab) {
            this.updateActiveTab(tab);
        }
    }

    unselectTab (tab) {
        if (tab) {
            tab.deActivate();
            this.onInactivateHandler(tab);
            this.activeTab = null;
        }
    }

    selectTab (tab) {
        this.unselectTab(this.activeTab);
        this.activeTab = tab;
        tab.activate();
        this.onActivateHandler(tab);
    }

    onActivateHandler (tab) {
        if (this.onActivate) {
            this.onActivate({ tabName: tab.text });
        }
    }

    onInactivateHandler (tab) {
        if (this.onInactivate) {
            this.onInactivate({ tabName: tab.text });
        }
    }
}
