import { addBooleanParameter, addDefaultParameter } from "@ovh-ui/common/component-utils";

export default class {
    /* @ngInject */
    constructor ($attrs, $element, $timeout) {
        this.$attrs = $attrs;
        this.$element = $element;
        this.$timeout = $timeout;
    }

    $onInit () {
        addBooleanParameter(this, "compact");
        addBooleanParameter(this, "disabled");
        addDefaultParameter(this, "align", this.compact ? "center" : "start");
    }

    $postLink () {
        this.$timeout(() => this.$element
            .removeAttr("aria-label"));
    }
}
