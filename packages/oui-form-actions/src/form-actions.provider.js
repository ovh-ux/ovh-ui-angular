export default class {
    constructor () {
        this.translations = {
            submit: "Submit",
            cancel: "Cancel"
        };
    }

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
