import StepForm from "./step-form/step-form.component";
import Stepper from "./stepper.component";
import StepperProvider from "./stepper.provider";

angular.module("oui.stepper", [])
    .component("ouiStepper", Stepper)
    .component("ouiStepForm", StepForm)
    .provider("ouiStepperConfiguration", StepperProvider);
