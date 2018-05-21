import { addBooleanParameter } from "@oui-angular/common/component-utils";

export default class {
    constructor ($scope, $timeout, $attrs, $transclude) {
        "ngInject";
        this.$timeout = $timeout;
        this.$attrs = $attrs;
        this.$transcludeFn = $transclude;
        this.ANIMATION_TIME = 200;
    }

    $onInit () {
        addBooleanParameter(this, "disabled");
        addBooleanParameter(this, "active");
        addBooleanParameter(this, "isActivating");
        this.tabsCtrl.addTab(this);
    }

    activate () {
        this.isActivating = true;
        this.$timeout(() => {
            this.isActivating = false;
            this.active = true;
        }, this.ANIMATION_TIME);
    }

    deActivate () {
        this.active = false;
    }

    selectTab () {
        if (this.disabled) {
            return true;
        }
        this.tabsCtrl.selectTab(this);
        return true;
    }

    /**
     * tow tabs are equal of they have same name and same state
     * @param {*} tab
     */
    isEqual (tab) {
        return tab && this.text === tab.text && this.state === tab.state;
    }

    isActive () {
        return this.active;
    }
}
