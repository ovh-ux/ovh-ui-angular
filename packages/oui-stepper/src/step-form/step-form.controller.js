import { addBooleanParameter, addDefaultParameter } from "@oui-angular/common/component-utils";

export default class StepFormController {
    constructor ($attrs, $element, $scope, $timeout, ouiStepperConfiguration) {
        "ngInject";

        this.$attrs = $attrs;
        this.$element = $element;
        this.$scope = $scope;
        this.$timeout = $timeout;
        this.translations = angular.copy(ouiStepperConfiguration.translations);
    }

    $onInit () {
        addBooleanParameter(this, "disabled");
        addBooleanParameter(this, "skippable");

        // Add default name
        addDefaultParameter(this, "name", `ouiStepForm${this.$scope.$id}`);

        // Force custom validation if no attribute 'valid'
        if (angular.isUndefined(this.$attrs.valid)) {
            this.valid = true;
        }

        // Check if Stepper parent
        if (this.stepperCtrl) {
            this.stepper = {};
            this.stepperCtrl.addStep(this);

            this.linear = this.stepperCtrl.linear;
        }
    }

    $postLink () {
        // Sometimes the digest cycle is done before dom manipulation,
        // So we use $timeout to force the $apply
        this.$timeout(() =>
            this.$element
                .addClass("oui-stepper__step oui-stepper__step_form")
                .removeAttr("id")
                .removeAttr("name")
        );
    }

    onFormSubmit (form) {
        if (form.$valid && this.valid) {
            this.onSubmit({ form });

            // Focus next step
            this.stepperCtrl.addForm(form, this.stepper.index);
        }
    }

    setFocus (form) {
        this.stepperCtrl.focusStep(this.stepper.index);
        form.$setPristine();
    }
}
