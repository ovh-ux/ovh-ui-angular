export default class {
    constructor () {

        this.translations = {
            sourceListLabel: "Unselected items",
            targetListLabel: "Selected items",
            moveAllLabel: "Add all",
            removeAllLabel: "Remove all",
            sourceListEmptyLabel: "No items to select",
            targetListEmptyLabel: "No items are selected",
            addLabel: "Add"
        };
    }

    /**
     * Set the translations for the dual list component
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

