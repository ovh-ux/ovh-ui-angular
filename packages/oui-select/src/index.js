import "./ui-select";
import Select from "./select.directive";

export default angular
    .module("oui.select", [
        "oui.field",
        "oui.ui.select",
        "ngSanitize"
    ])
    .directive("ouiSelect", Select)
    .name;
