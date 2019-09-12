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
        addBooleanParameter(this, "primaryDisabled");
        addBooleanParameter(this, "secondaryDisabled");

        // Deprecated: Support for 'title' attribute
        if (!!this.$attrs.title && !this.$attrs.heading) {
            this.heading = this.title;
        }
    }

    $postLink () {
        this.$timeout(() =>
            this.$element
                .addClass("oui-modal")
                .addClass("oui-modal_shadow")
        );
    }
}
