import { addBooleanParameter } from "@ovh-ui/common/component-utils";

export default class {
    /* @ngInject */
    constructor ($attrs, $element, $timeout) {
        this.$attrs = $attrs;
        this.$element = $element;
        this.$timeout = $timeout;
    }

    $onInit () {
        addBooleanParameter(this, "adaptive");
    }

    $postLink () {
        this.$timeout(() => {
            this.$element.addClass("oui-inline-adder__field");

            if (this.adaptive) {
                this.$element.addClass("oui-inline-adder__field_adaptive");
            }
        });
    }
}
