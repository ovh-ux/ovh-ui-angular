import controller from "./search.controller";
import template from "./search.html";

export default {
    require: {
        criteriaContainer: "?^^ouiCriteriaContainer"
    },
    bindings: {
        model: "=",
        id: "@?",
        name: "@?",
        placeholder: "@?",
        ariaLabel: "@?",

        disabled: "<?",

        onChange: "&",
        onReset: "&",
        onSubmit: "&"
    },
    controller,
    template
};
