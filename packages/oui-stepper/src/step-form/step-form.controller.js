import { addBooleanParameter } from "@oui-angular/common/component-utils";

const baseClass = "oui-list__item";
const validClass = "oui-list__group";
const disabledClass = "oui-list__item_disabled";
const completeClass = "oui-list__item_checked";

export default class {
    constructor ($attrs, $element, $timeout) {
        "ngInject";

        this.$attrs = $attrs;
        this.$element = $element;
        this.$timeout = $timeout;
    }

    $onInit () {
        addBooleanParameter(this, "autovalidate");

        if (!angular.isDefined(this.state)) {
            this.state = "valid";
        }
    }

    $postLink () {
        this.$element.addClass(baseClass);
        this.onStateChanges();

        // Sometimes the digest cycle is done before dom manipulation,
        // So we use $timeout to force the $apply
        this.$timeout(() =>
            this.$element
                .removeAttr("id")
                .removeAttr("name")
        );
    }

    onFormSubmit (form) {
        this.onSubmit({ form });
    }

    onStateChanges () {
        this.$element.toggleClass(validClass, this.state === "valid");
        this.$element.toggleClass(disabledClass, this.state === "disabled");
        this.$element.toggleClass(completeClass, this.state === "complete");
    }
}

