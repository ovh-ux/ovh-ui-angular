import { addDefaultParameter } from "@ovh-ui/common/component-utils";

export default class {
    constructor ($attrs, $element, $timeout) {
        "ngInject";

        this.$attrs = $attrs;
        this.$element = $element;
        this.$timeout = $timeout;
    }

    $onInit () {
        addDefaultParameter(this, "align", "end");
    }

    $postLink () {
        this.$timeout(() =>
            this.$element
                .removeAttr("aria-label")
        );
    }
}
