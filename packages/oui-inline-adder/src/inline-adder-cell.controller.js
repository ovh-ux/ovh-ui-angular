import { addDefaultParameter } from "@oui-angular/common/component-utils";
export default class {
    constructor ($attrs, $element) {
        "ngInject";
        this.$attrs = $attrs;
        this.$element = $element;
    }

    $onInit () {
        addDefaultParameter(this, "autoGrow", true);
    }

    $postLink () {
        if (this.autoGrow) {
            this.$element.addClass("oui-inline-adder__cell_auto-grow");
        }
    }
}
