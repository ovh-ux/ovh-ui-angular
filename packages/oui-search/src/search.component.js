import controller from "./search.controller";
import template from "./search.html";

export default {
    require: {
        criteriaContainer: "?^^ouiCriteria"
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
        onSubmit: "&",

        autocomplete: "<?",
        autocompleteProperty: "@?",
        autocompleteOnSelect: "&"
    },
    controller,
    template
};
