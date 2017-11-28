import { addBooleanParameter } from "@oui-angular/common/component-utils";

const baseClass = "oui-action-menu";

export default class {
    constructor ($attrs, $element) {
        "ngInject";

        this.$attrs = $attrs;
        this.$element = $element;
    }

    $onInit () {
        this.baseClass = baseClass;
        addBooleanParameter(this, "compact");
    }

    $postLink () {
        this.$element.removeAttr("aria-label");
    }
}
