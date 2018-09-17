import Radio from "./radio.component";
import RadioGroup from "./group/radio-group.component";
import RadioToggleGroup from "./toggle-group/radio-toggle-group.component";

export default angular
    .module("oui.radio", [])
    .component("ouiRadio", Radio)
    .component("ouiRadioGroup", RadioGroup)
    .component("ouiRadioToggleGroup", RadioToggleGroup)
    .name;
