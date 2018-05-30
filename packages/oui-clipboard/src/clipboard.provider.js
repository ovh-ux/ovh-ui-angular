import { merge } from "lodash";
export default class {
    constructor () {
        this.translations = {
            copyToClipboardLabel: "Copy to Clipboard",
            copiedLabel: "Copied"
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
