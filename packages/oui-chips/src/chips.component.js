import controller from "./chips.controller";
import template from "./chips.html";

export default {
    require: {
        criteriaContainer: "?^^ouiCriteria"
    },
    template,
    controller,
    bindings: {
        items: "=",
        closable: "<?",
        stacked: "<?",
        onRemove: "&"
    }
};
