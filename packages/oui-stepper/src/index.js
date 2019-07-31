import StepForm from "./step-form/step-form.component";
import Stepper from "./stepper.component";
import StepperProvider from "./stepper.provider";
import UnsafeFilter from "./filter/unsafe.filter";

export default angular
    .module("oui.stepper", [])
    .component("ouiStepper", Stepper)
    .component("ouiStepForm", StepForm)
    .provider("ouiStepperConfiguration", StepperProvider)
    .filter("unsafe", UnsafeFilter)
    .name;
