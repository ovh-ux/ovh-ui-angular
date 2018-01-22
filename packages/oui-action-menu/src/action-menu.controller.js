import { addBooleanParameter } from "@oui-angular/common/component-utils";

const baseClass = "oui-action-menu";

export default class {
    constructor ($attrs, $element, $timeout) {
        "ngInject";

        this.$attrs = $attrs;
        this.$element = $element;
        this.$timeout = $timeout;
    }

    $onInit () {
        this.baseClass = baseClass;
        addBooleanParameter(this, "compact");
    }

    $postLink () {
        // Sometimes the digest cycle is done before dom manipulation,
        // So we use $timeout to force the $apply
        this.$timeout(() =>
            this.$element
                .removeAttr("align")
                .removeAttr("aria-label")
        );
    }
}
