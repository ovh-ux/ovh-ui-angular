import _ from "lodash";
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
        const currentTab = _.find(this.tabs, tab => tab.state && this.$state.includes(tab.state));
        if (currentTab && currentTab !== this.activeTab) {
            this.selectTab(currentTab);
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
        this.activeTab = null;
        tab.deActivate();
        this.onInactivateHandler(tab);
    }

    selectTab (tab) {
        this.tabs.forEach((t) => {
            this.unselectTab(t);
        });
        this.activeTab = tab;
        tab.activate();
        this.onActivateHandler(tab);
    }

    onActivateHandler (tab) {
        if (this.onActivate) {
            this.onActivate({ tab: tab.text });
        }
    }

    onInactivateHandler (tab) {
        if (this.onInactivate) {
            this.onInactivate({ tab: tab.text });
        }
    }

}
