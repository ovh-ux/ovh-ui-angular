import { throwErrorOnMissingAttributeValue } from "@oui-angular/common/component-utils";

export default class {
    constructor ($attrs, $element) {
        "ngInject";
        this.$element = $element;
    }

    $onInit () {
        throwErrorOnMissingAttributeValue(this.$element[0], "value");
    }
}
