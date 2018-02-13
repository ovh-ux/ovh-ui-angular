export default class {
    constructor () {
        this.translations = {
            lengthCounter: "{{length}}/{{max}} characters"
        };
    }

    /**
     * Set the translations for the datagrid component
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
