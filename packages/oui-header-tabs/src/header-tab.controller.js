export default class {
    constructor ($timeout) {
        "ngInject";

        this.active = false;
        this.isActivating = false;
        const ANIMATION_TIME = 200;
        this.updateActive = tabAttr => {
            this.active = tabAttr.active;
            this.isActivating = tabAttr.isActivating;
            if (tabAttr.isActivating) {
                $timeout(() => {
                    tabAttr.isActivating = false;
                    this.updateActive(tabAttr);
                }, ANIMATION_TIME);
            }
        };
    }
}
