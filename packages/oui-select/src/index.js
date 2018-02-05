import "./ui-select";
import Select from "./select.directive";

angular.module("oui.select", [
    "ui.select",
    "ngSanitize"
]).directive("ouiSelect", Select);
