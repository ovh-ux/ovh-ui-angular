import Field from "./field.component.js";
import FieldConfigurationProvider from "./field.provider.js";

angular.module("oui.field", [])
    .component("ouiField", Field)
    .provider("ouiFieldConfiguration", FieldConfigurationProvider);
