import "./ui-select";
import Select from "./select.directive";

angular.module("oui.select", [
    "oui.field",
    "ui.select",
    "ngSanitize"
]).directive("ouiSelect", Select);
