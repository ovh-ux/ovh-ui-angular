import InlineAdder from "./inline-adder.component.js";
import InlineAdderCell from "./cell/inline-adder-cell.component.js";
import InlineAdderItem from "./item/inline-adder-item.component.js";
import InlineAdderProvider from "./inline-adder.provider.js";
import InlineAdderRow from "./row/inline-adder-row.component.js";

angular.module("oui.inline-adder", [])
    .component("ouiInlineAdder", InlineAdder)
    .component("ouiInlineAdderItem", InlineAdderItem)
    .component("ouiInlineAdderRow", InlineAdderRow)
    .component("ouiInlineAdderCell", InlineAdderCell)
    .provider("ouiInlineAdderProvider", InlineAdderProvider);
