import { merge } from "lodash";

export default class {
    constructor () {
        this.translations = {
            optional: "(optional)",
            modify: "Modify this step",
            next: "Next",
            skip: "Skip this step",
            submit: "Submit"
        };
    }

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
