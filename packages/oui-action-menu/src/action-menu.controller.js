import { addBooleanParameter, addDefaultParameter } from "@oui-angular/common/component-utils";

export default class {
    constructor ($attrs, $element, $timeout) {
        "ngInject";

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
