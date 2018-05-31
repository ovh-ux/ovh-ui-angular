import controller from "./modal-on-boarding.controller";
import template from "./modal-on-boarding.html";

export default {
    template,
    controller,
    transclude: true,
    bindings: {
        onDismiss: "&",
        loading: "<?",
        loop: "<?",
        theme: "@?"
    }
};
