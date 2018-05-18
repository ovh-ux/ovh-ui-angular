import { addBooleanParameter } from "@oui-angular/common/component-utils";

export default class {
    constructor ($timeout, $attrs) {
        "ngInject";
        this.$timeout = $timeout;
        this.$attrs = $attrs;
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
