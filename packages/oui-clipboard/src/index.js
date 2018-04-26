import Clipboard from "./clipboard.component.js";
import ClipboardProvider from "./clipboard.provider.js";

angular
    .module("oui.clipboard", []).component("ouiClipboard", Clipboard)
    .provider("ouiClipboardConfiguration", ClipboardProvider);
