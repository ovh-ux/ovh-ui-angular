import controller from "./criteria-adder.controller";
import template from "./criteria-adder.html";

export default {
    require: {
        criteriaContainer: "?^^ouiCriteriaContainer"
    },
    bindings: {
        id: "@?",
        name: "@",
        align: "@?",
        properties: "<",
        disabled: "<?",
        onSubmit: "&"
    },
    controller,
    template
};
