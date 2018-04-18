import DualList from "./dual-list.directive";
import DualListFilter from "./dual-list.filter";
import DualListProvider from "./dual-list.provider";

angular.module("oui.dual-list", [])
    .directive("ouiDualList", DualList)
    .provider("ouiDualListProvider", DualListProvider)
    .filter("ouiDualListFilter", () => DualListFilter);
