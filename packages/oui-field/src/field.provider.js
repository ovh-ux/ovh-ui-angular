import merge from "lodash/merge";

export default class {
    constructor () {
        this.translations = {
            errors: {
                invalid: "Invalid field.",
                required: "Mandatory.",
                number: "Invalid number.",
                email: "Invalid email.",
                password: "Invalid password.",
                min: "Too low ({{min}} min).",
                max: "Too high ({{max}} max).",
                minlength: "Too short ({{minlength}} characters min).",
                maxlength: "Too high ({{maxlength}} characters max).",
                maxsize: "This file exceeds the size limit",
                pattern: "Invalid format."
            }
        };

        this.globalErrorVisible = null;
    }

    /**
     * Set the translations for the field component
     * @param {Object} translations a map of translations
     */
    setTranslations (translations) {
        this.translations = merge(this.translations, translations);
        return this;
    }

    setGlobalErrorVisible (func) {
        if (func && angular.isFunction(func)) {
            this.globalErrorVisible = func;
        }
    }

    $get () {
        return {
            translations: this.translations,
            globalErrorVisible: this.globalErrorVisible
        };
    }
}
