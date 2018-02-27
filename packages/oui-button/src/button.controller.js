import { addBooleanParameter } from "@oui-angular/common/component-utils";

export default class {
    constructor ($attrs, $element, $timeout) {
        "ngInject";

        this.$attrs = $attrs;
        this.$element = $element;
        this.$timeout = $timeout;
    }

    $onInit () {
        // Add default value for attribute 'type'
        if (angular.isUndefined(this.type)) {
            this.type = "button";
        }

        // Add default value for attribute 'variant'
        if (angular.isUndefined(this.variant)) {
            this.variant = "secondary";
        }

        addBooleanParameter(this, "disabled");
    }

    $postLink () {
        // Sometimes the digest cycle is done before dom manipulation,
        // So we use $timeout to force the $apply
        this.$timeout(() =>
            this.$element
                .removeAttr("aria-label")
                .removeAttr("id")
                .removeAttr("name")
        );
    }
}
