export default class {
    constructor () {
        this.translations = {
            notification: {
                markRead: "Mark as read",
                markUnread: "Mark as unread"
            }
        };
    }

    /**
     * Set the translations for the navbar component
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
