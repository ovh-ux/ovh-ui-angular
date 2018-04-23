import DualList from "./dual-list.component";
import DualListFilter from "./dual-list.filter";
import DualListProvider from "./dual-list.provider";

angular.module("oui.dual-list", [])
    .component("ouiDualList", DualList)
    .provider("ouiDualListProvider", DualListProvider)
    .filter("ouiDualListFilter", () => DualListFilter);
