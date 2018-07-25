import Textarea from "./textarea.component.js";
import TextareaProvider from "./textarea.provider.js";

export default angular
    .module("oui.textarea", [])
    .component("ouiTextarea", Textarea)
    .provider("ouiTextareaConfiguration", TextareaProvider)
    .name;
