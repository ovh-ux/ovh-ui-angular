export default class {
    constructor () {
        this.translations = {
            submit: "Submit",
            cancel: "Cancel"
        };
    }

    /**
     * Set the translations for the pagination component
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
