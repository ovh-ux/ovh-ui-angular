import controller from "./progress-threshold.controller";
import template from "./progress-threshold.html";

export default {
    template,
    controller,
    bindings: {
        value: "<"
    },
    require: {
        parent: "^^ouiProgress"
    }
};
