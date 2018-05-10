import controller from "./inline-adder.controller.js";
import template from "./inline-adder.html";

export default {
    template,
    controller,
    transclude: true,
    bindings: {
        onAdd: "&",
        onRemove: "&"
    }
};
