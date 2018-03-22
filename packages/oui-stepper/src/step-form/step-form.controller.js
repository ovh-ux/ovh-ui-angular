import { addBooleanParameter } from "@oui-angular/common/component-utils";

const baseClass = "oui-list__item oui-list__group";
const disabledClass = "oui-list__item_disabled";
const completeClass = "oui-list__item_complete";

export default class StepFormController {
    constructor ($attrs, $element, $timeout) {
        "ngInject";

        this.$attrs = $attrs;
        this.$element = $element;
        this.$timeout = $timeout;
    }

    $onInit () {
        addBooleanParameter(this, "disabled");
    }

    $onChanges () {
        this.onStateChanges();
    }

    $postLink () {
        this.onStateChanges();

        // Sometimes the digest cycle is done before dom manipulation,
        // So we use $timeout to force the $apply
        this.$timeout(() =>
            this.$element
                .removeAttr("id")
                .removeAttr("name")
                .addClass(baseClass)
        );
    }

    onFormSubmit (form) {
        if (form.$valid) {
            this.complete = true;
            this.onStateChanges();
            this.onSubmit({ form });
        }
    }

    onStateChanges () {
        this.$timeout(() =>
            this.$element
                .toggleClass(disabledClass, !!this.disabled)
                .toggleClass(completeClass, !!this.complete)
        );
    }

    setPristine (form) {
        this.complete = false;
        this.onStateChanges();
        form.$setPristine();
        form.$setUntouched();
    }
}
