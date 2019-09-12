import { addBooleanParameter } from "@ovh-ui/common/component-utils";

export default class {
    /* @ngInject */
    constructor ($attrs) {
        this.$attrs = $attrs;
    }

    $onInit () {
        this.hasLinks = !!this.$attrs.links;

        addBooleanParameter(this, "active");
        addBooleanParameter(this, "loaded");
    }

    $onChanges (changes) {
        // Get links changes for the loader
        if (changes.links) {
            this.linksLoaded = !!changes.links.currentValue;
        }
    }

    onTogglerClick () {
        if (this.hasLinks) {
            this.navbarCtrl.toggleMenu("toggler");
        }

        this.onClick();
    }
}
