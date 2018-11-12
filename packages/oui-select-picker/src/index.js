import SelectPicker from "./select-picker.component";
import SelectPickerSection from "./section/select-picker-section.component";

export default angular
    .module("oui.select-picker", [])
    .component("ouiSelectPicker", SelectPicker)
    .component("ouiSelectPickerSection", SelectPickerSection)
    .name;
