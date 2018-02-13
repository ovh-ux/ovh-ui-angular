import Textarea from "./textarea.component.js";
import TextareaProvider from "./textarea.provider.js";

angular.module("oui.textarea", [])
    .component("ouiTextarea", Textarea)
    .provider("ouiTextareaConfiguration", TextareaProvider);
