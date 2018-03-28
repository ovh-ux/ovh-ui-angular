import { addBooleanParameter } from "@oui-angular/common/component-utils";

const rootClass = "oui-list_steps oui-list_separated";

export default class {
    constructor ($attrs, $element, $timeout) {
        "ngInject";

        this.$attrs = $attrs;
        this.$element = $element;
        this.$timeout = $timeout;
    }

    $onInit () {
        addBooleanParameter(this, "linear");

        this.forms = [];
        this.steps = [];
        this.currentIndex = 0;
        this.onInit();
    }

    $postLink () {
        this.$timeout(() =>
            this.$element
                .removeAttr("id")
                .removeAttr("name")
                .addClass(rootClass)
        );
    }

    addStep (step) {
        this.steps.push(step);
        this.focusStep(this.currentIndex);
    }

    addForm (form, index) {
        this.forms[index] = form;

        // Check index for next step or onFinish event
        if (index === this.steps.length - 1) {
            this.onFinish({ forms: this.forms });
        } else {
            this.nextStep();
        }
    }

    nextStep () {
        const indexToFocus = Math.min(this.currentIndex + 1, this.steps.length - 1);
        this.focusStep(indexToFocus);
    }

    prevStep () {
        const indexToFocus = Math.max(this.currentIndex - 1, 0);
        this.focusStep(indexToFocus);
    }

    focusStep (indexToFocus) {
        this.currentIndex = indexToFocus;
        this.steps.forEach((step, index) => {
            const focused = index === indexToFocus;

            // Disable steps not focused
            if (angular.isDefined(step.stepper)) {
                step.stepper.index = index;
                step.stepper.focused = focused;
            }

            // Call onFocus step event
            if (focused) {
                step.onFocus();
            }
        });
    }
}
