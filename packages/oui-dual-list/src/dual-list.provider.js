export default class {
    constructor () {

        this.bulkActionEnabled = false;
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

    setBulkActionEnabled (bulkActionEnabled) {
        this.bulkActionEnabled = bulkActionEnabled;
        return this;
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
            bulkActionEnabled: this.bulkActionEnabled,
            translations: this.translations
        };
    }
}

