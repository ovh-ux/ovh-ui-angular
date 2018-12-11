import Autocomplete from "./autocomplete.directive";
import AutocompleteHightlight from "./filter/autocomplete-highlight.filter";
import AutocompleteProvider from "./autocomplete.provider";

export default angular
    .module("oui.autocomplete", [])
    .directive("ouiAutocomplete", Autocomplete)
    .filter("ouiAutocompleteHightlight", AutocompleteHightlight)
    .provider("ouiAutocompleteConfiguration", AutocompleteProvider)
    .name;
