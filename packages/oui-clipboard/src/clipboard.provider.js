export default class {
    constructor () {
        this.translations = {
            copy_to_clipboard_label: "Copy to Clipboard",
            copied_label: "Copied"
        };
        this.action = {
            copy: "copy"
        };
        this.status = {
            initial: "initial",
            success: "success"
        };
    }

    /**
     * Set the translations
     * @param {Object} translations a map of translations
     */
    setTranslations (translations) {
        this.translations = translations;
        return this;
    }

    setStatus (status) {
        this.status = status;
        return this;
    }

    setAction (copy) {
        this.action = copy;
        return this;
    }

    $get () {
        return {
            action: this.action,
            status: this.status,
            translations: this.translations
        };
    }
}
