import controller from "./chips.controller";
import template from "./chips.html";

export default {
    require: {
        criteriaContainer: "?^^ouiCriteriaContainer"
    },
    template,
    controller,
    bindings: {
        items: "<",
        closable: "<?",
        stacked: "<?",
        onRemove: "&"
    }
};
