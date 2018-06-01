import { addDefaultParameter, throwErrorOnMissingAttributeValue } from "@oui-angular/common/component-utils";
export default class {
    constructor ($attrs, $element, $timeout) {
        "ngInject";
        this.$attrs = $attrs;
        this.$element = $element;
        this.$timeout = $timeout;
    }

    $onInit () {
        throwErrorOnMissingAttributeValue(this.$element[0], "value");
        throwErrorOnMissingAttributeValue(this.$element[0], "type");
        addDefaultParameter(this, "compact", false);
        addDefaultParameter(this, "maxValue", "100");
    }

    $postLink () {
        this.$timeout(() => {
            this.$element.addClass("oui-progress");
            if (this.compact) {
                this.$element.addClass("oui-progress_compact");
            }
        });
    }
}
