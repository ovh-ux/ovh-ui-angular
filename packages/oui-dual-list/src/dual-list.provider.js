import merge from "lodash/merge";

export default class {
    constructor () {
        this.translations = {
            source: {
                heading: "Unselected items",
                placeholder: "No items to select",
                move: "Add",
                moveAll: "Add all",
                search: "Search in source content"
            },
            target: {
                heading: "Selected items",
                placeholder: "No items are selected",
                move: "Remove",
                moveAll: "Remove all",
                search: "Search in target content"

            }
        };
    }

    /**
     * Set the translations
     * @param {Object} translations a map of translations
     */
    setTranslations (translations) {
        this.translations = merge(this.translations, translations);
        return this;
    }

    $get () {
        return {
            translations: this.translations
        };
    }
}

