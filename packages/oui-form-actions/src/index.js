import FormActions from "./form-actions.component";
import FormActionsProvider from "./form-actions.provider";

export default angular
    .module("oui.form-actions", [])
    .component("ouiFormActions", FormActions)
    .provider("ouiFormActionsConfiguration", FormActionsProvider)
    .name;
