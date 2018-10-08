import Popover from "./popover.component.js";
import PopoverContent from "./content/popover-content.directive";
import PopoverTrigger from "./trigger/popover-trigger.directive";

export default angular
    .module("oui.popover", [])
    .component("ouiPopover", Popover)
    .directive("ouiPopoverContent", PopoverContent)
    .directive("ouiPopoverTrigger", PopoverTrigger)
    .name;
