import CriteriaAdder from "./criteria-adder.component";
import CriteriaAdderProvider from "./criteria-adder.provider";

export default angular
    .module("oui.criteria-adder", [])
    .component("ouiCriteriaAdder", CriteriaAdder)
    .provider("ouiCriteriaAdderConfiguration", CriteriaAdderProvider)
    .name;
