import { addBooleanParameter } from "@ovh-ui/common/component-utils";

export default class {
    /* @ngInject */
    constructor ($attrs) {
        this.$attrs = $attrs;
    }

    $onInit () {
        addBooleanParameter(this, "active");
        addBooleanParameter(this, "disabled");
        addBooleanParameter(this, "external");

        if (this.external) {
            this.linkTarget = "_blank";
            this.linkRel = "noopener";
        }
    }

    // Return value of "ui-sref"
    getFullSref () {
        return `${this.state}(${JSON.stringify(this.stateParams)})`;
    }
}
