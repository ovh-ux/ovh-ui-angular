import { merge } from "lodash";

export default class {
    constructor () {
        this.translations = {
            optionalLabel: "(optional)",
            modifyThisStep: "Modify this step",
            skipThisStep: "Skip this step",
            nextButtonLabel: "Next",
            submitButtonLabel: "Submit",
            cancelButtonLabel: "Cancel"
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
