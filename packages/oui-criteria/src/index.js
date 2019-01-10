import Chips from "@ovh-ui/oui-chips";
import Criteria from "./criteria.component";
import CriteriaAdder from "./adder/criteria-adder.component";
import CriteriaAdderProvider from "./adder/criteria-adder.provider";
import Search from "@ovh-ui/oui-search";

export default angular
    .module("oui.criteria", [
        Chips,
        Search
    ])
    .component("ouiCriteria", Criteria)
    .component("ouiCriteriaAdder", CriteriaAdder)
    .provider("ouiCriteriaAdderConfiguration", CriteriaAdderProvider)
    .name;
