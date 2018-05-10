export default class {
    constructor () {
        this.translations = {
            ariaAddItem: "Add Item",
            ariaRemoveItem: "Remove Item"
        };
    }

    /**
     * Set the translations for the inline adder component
     * @param {Object} translations a map of translations
     */
    setTranslations (translations) {
        this.translations = translations;
        return this;
    }

    $get () {
        return {
            translations: this.translations
        };
    }
}
