import { addDefaultParameter, throwErrorOnMissingAttributeValue } from "@oui-angular/common/component-utils";
export default class {
    constructor ($attrs, $element) {
        "ngInject";
        this.$attrs = $attrs;
        this.$element = $element;
    }

    $onInit () {
        throwErrorOnMissingAttributeValue(this.$element[0], "type");
        addDefaultParameter(this, "maxValue", "100");
        addDefaultParameter(this, "indeterminate", false);
    }
}
