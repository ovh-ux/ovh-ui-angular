import Clipboard from "./clipboard.component.js";
import ClipboardProvider from "./clipboard.provider.js";

export default angular
    .module("oui.clipboard", [])
    .component("ouiClipboard", Clipboard)
    .provider("ouiClipboardConfiguration", ClipboardProvider)
    .name;
