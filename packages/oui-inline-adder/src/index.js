import InlineAdder from "./inline-adder.component";
import InlineAdderField from "./field/inline-adder-field.component";
import InlineAdderProvider from "./inline-adder.provider";
import InlineAdderRow from "./row/inline-adder-row.component";

export default angular
    .module("oui.inline-adder", [])
    .component("ouiInlineAdder", InlineAdder)
    .component("ouiInlineAdderField", InlineAdderField)
    .component("ouiInlineAdderRow", InlineAdderRow)
    .provider("ouiInlineAdderConfiguration", InlineAdderProvider)
    .name;
