import DualList from "./dual-list.component";
import DualListProvider from "./dual-list.provider";
import DualListSource from "./source/dual-list-source.component";
import DualListTarget from "./target/dual-list-target.component";

export default angular
    .module("oui.dual-list", [])
    .component("ouiDualList", DualList)
    .component("ouiDualListSource", DualListSource)
    .component("ouiDualListTarget", DualListTarget)
    .provider("ouiDualListConfiguration", DualListProvider)
    .name;
