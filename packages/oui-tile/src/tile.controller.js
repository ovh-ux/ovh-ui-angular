import { addBooleanParameter } from "@ovh-ui/common/component-utils";

export default class {
    /* @ngInject */
    constructor ($attrs, $element, $timeout) {
        this.$attrs = $attrs;
        this.$element = $element;
        this.$timeout = $timeout;
    }

    $onInit () {
        addBooleanParameter(this, "loading");
    }

    $postLink () {
        this.$timeout(() =>
            this.$element
                .addClass("oui-tile")
        );
    }
}
