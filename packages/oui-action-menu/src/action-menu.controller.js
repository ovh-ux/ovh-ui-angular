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
        this.$timeout(() =>
            this.$element
                .removeAttr("align")
                .removeAttr("aria-label")
        );
    }
}
