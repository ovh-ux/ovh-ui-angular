export default class {
    constructor () {
        this.translations = {
            notification: {
                errorInNotification: "Oups, there’s an error!",
                errorInNotificationDescription: "We can’t initialize the menu.",
                markRead: "Mark as read",
                markUnread: "Mark as unread",
                noNotification: "You are all caught up!",
                noNotificationDescription: "You don't have any notification."
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
