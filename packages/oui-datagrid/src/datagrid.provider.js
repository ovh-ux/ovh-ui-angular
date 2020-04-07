import merge from "lodash/merge";

export default class {
    constructor () {
        this.pageSize = 25;
        this.refreshable = false;
        this.translations = {
            emptyPlaceholder: "No data available",
            ariaShowHideColumnsLabel: "Show/Hide columns",
            ariaRefreshButtonLabel: "Refresh"
        };
    }

    /**
     * Set the default page size
     * @param {Number} pageSize the default page size
     */
    setPageSize (pageSize) {
        this.pageSize = pageSize;
        return this;
    }

    /**
     * Set the default refresh
     * @param {Boolean} refresh the default refresh
     */
    setRefreshable (refresh) {
        this.refreshable = refresh;
        return this;
    }

    /**
     * Set the translations for the datagrid component
     * @param {Object} translations a map of translations
     */
    setTranslations (translations) {
        this.translations = merge(this.translations, translations);
        return this;
    }

    $get () {
        return {
            pageSize: this.pageSize,
            translations: this.translations,
            refreshable: this.refreshable
        };
    }
}
