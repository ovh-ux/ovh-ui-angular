import File from "./file.component";
import FileProvider from "./file.provider";

export default angular
    .module("oui.file", [])
    .component("ouiFile", File)
    .provider("ouiFileConfiguration", FileProvider)
    .name;
