import "@oui-angular/oui-radio/src";
import "@oui-angular/oui-radio-group/src";
import RadioToggleGroup from "./radio-toggle-group.component.js";

export default angular
    .module("oui.radio-toggle-group", [
        "oui.radio",
        "oui.radio-group"
    ])
    .component("ouiRadioToggleGroup", RadioToggleGroup)
    .name;
