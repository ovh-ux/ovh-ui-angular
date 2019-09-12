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
        addDefaultParameter(this, "minValue", "0");
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

    getPercentageValue (value) {
        const percent = 100;
        const minValue = this.minValue;
        const maxValue = Math.max(this.maxValue - this.minValue, minValue);
        const currentValue = Math.max(value - this.minValue, minValue);

        return `${(currentValue / maxValue) * percent}%`;
    }
}
