const rootClass = "oui-list_steps oui-list_separated";

export default class {
    constructor ($element, $timeout) {
        "ngInject";

        this.$element = $element;
        this.$timeout = $timeout;
    }

    $onInit () {
        this.steps = [];
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

    add (step) {
        // Delete same preview step if it exists.
        const previewStep = step;
        previewStep.preview = true;

        const previewStepIndex = this.indexOfStep(previewStep);
        if (previewStepIndex > -1) {
            this.steps.splice(previewStepIndex, 1);
        }

        // Add the step if it does not exist.
        if (this.indexOfStep(step) < 0) {
            this.steps.push(step);
            this.triggerChange();
        }
    }

    update (step) {
        const stepIndex = this.indexOfStep(step);
        this.steps[stepIndex] = step;
    }

    indexOfStep (step) {
        let stepIndex = this.steps.length - 1;
        while (stepIndex >= 0 && !angular.equals(this.steps[stepIndex].id, step.id)) {
            --stepIndex;
        }
        return stepIndex;
    }

    triggerChange () {
        // Disable step
        return this;
    }
}
