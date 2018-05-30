export default class {
    constructor () {
        this.translations = {
            title: "Guides"
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
