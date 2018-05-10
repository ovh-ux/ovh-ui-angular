import controller from "./inline-adder-cell.controller.js";
import template from "./inline-adder-cell.html";

export default {
    template,
    controller,
    transclude: true,
    bindings: {
        autoGrow: "<?"
    }
};
