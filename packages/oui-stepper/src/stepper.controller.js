export default class {
    constructor ($attrs, $element, $timeout) {
        "ngInject";

        this.$attrs = $attrs;
        this.$element = $element;
        this.$timeout = $timeout;
    }

    $onInit () {
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
                .addClass("oui-stepper")
        );
    }

    addStep (step) {
        if (!step.position) {
            this.steps.push(step);
        } else {
            this.steps.splice(step.position - 1, 0, step);
        }

        this.focusStep(this.currentIndex);
    }

    removeStep (step) {
        const indexOfStep = this.steps.indexOf(step);
        if (indexOfStep > -1) {
            this.steps.splice(indexOfStep, 1);
        }
    }

    addForm (form, index) {
        this.forms[index] = form;
        this.nextStep();

        // Check index for onFinish event
        if (index === this.steps.length - 1) {
            this.onFinish({ forms: this.forms });
        }
    }

    nextStep () {
        const indexToFocus = Math.min(this.currentIndex + 1, this.steps.length);
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
                step.stepper.disabled = index > this.currentIndex;
                step.stepper.last = index === this.steps.length - 1;
            }

            // Call onFocus step event
            if (focused) {
                step.onFocus();
            }
        });
    }
}
