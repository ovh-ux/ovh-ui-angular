import { merge } from "lodash";

export default class {
    constructor () {
        this.translations = {
            ariaAddItem: "Add Item",
            ariaRemoveItem: "Remove Item"
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
