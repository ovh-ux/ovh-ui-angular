import { addBooleanParameter } from "@oui-angular/common/component-utils";

export default class {
    constructor ($attrs, $element, $timeout) {
        "ngInject";

        this.$attrs = $attrs;
        this.$element = $element;
        this.$timeout = $timeout;
    }

    $onInit () {
        // Support presence of attribute 'disabled'
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

    onSearchSubmit (modelValue) {
        this.model = undefined;

        if (angular.isFunction(this.onSubmit)) {
            this.onSubmit({ modelValue });
        }
    }

    onSearchReset () {
        // Since type="reset" doesn't reset the model
        this.model = undefined;

        if (angular.isFunction(this.onReset)) {
            this.onReset();
        }
    }
}
