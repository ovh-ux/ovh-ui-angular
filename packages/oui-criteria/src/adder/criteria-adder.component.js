import controller from "./criteria-adder.controller";
import template from "./criteria-adder.html";

export default {
    require: {
        criteriaContainer: "?^^ouiCriteria"
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
