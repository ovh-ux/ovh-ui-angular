import FormActions from "./form-actions.component";
import FormActionsProvider from "./form-actions.provider";

angular.module("oui.form-actions", [])
    .component("ouiFormActions", FormActions)
    .provider("ouiFormActions", FormActionsProvider);
