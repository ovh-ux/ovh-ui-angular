import CriteriaAdder from "./criteria-adder.component";
import CriteriaAdderProvider from "./criteria-adder.provider";

angular
    .module("oui.criteria-adder", [])
    .component("ouiCriteriaAdder", CriteriaAdder)
    .provider("ouiCriteriaAdderConfiguration", CriteriaAdderProvider);
