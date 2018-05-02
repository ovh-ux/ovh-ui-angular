import controller from "./clipboard.controller";
import template from "./clipboard.html";

export default {
    template,
    controller,
    controllerAs: "$ctrl",
    bindings: {
        text: "@?"
    }
};
