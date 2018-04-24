import { addBooleanParameter } from "@oui-angular/common/component-utils";

const baseClass = "oui-collapsible";

export default class {
    constructor ($attrs, $element, $timeout) {
        "ngInject";

        this.$attrs = $attrs;
        this.$element = $element;
        this.$timeout = $timeout;
    }

    $onInit () {
        this.baseClass = baseClass;
        addBooleanParameter(this, "expanded");
    }

    toggle () {
        this.expanded = !this.expanded;
    }
}
