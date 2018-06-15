import "@oui-angular/oui-radio/src";
import RadioGroup from "./radio-group.component.js";

export default angular
    .module("oui.radio-group", [
        "oui.radio"
    ])
    .component("ouiRadioGroup", RadioGroup)
    .name;
