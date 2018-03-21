import StepForm from "./step-form/step-form.component.js";
import Stepper from "./stepper.component.js";

angular.module("oui.stepper", [])
    .component("ouiStepper", Stepper)
    .component("ouiStepForm", StepForm);
