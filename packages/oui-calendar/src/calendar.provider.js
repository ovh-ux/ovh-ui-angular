import "flatpickr/dist/l10n/cs.js";
import "flatpickr/dist/l10n/de.js";
import "flatpickr/dist/l10n/es.js";
import "flatpickr/dist/l10n/fi.js";
import "flatpickr/dist/l10n/fr.js";
import "flatpickr/dist/l10n/it.js";
import "flatpickr/dist/l10n/lt.js";
import "flatpickr/dist/l10n/nl.js";
import "flatpickr/dist/l10n/pl.js";
import "flatpickr/dist/l10n/pt.js";
import "flatpickr/dist/l10n/sk.js";

export default class {
    constructor () {
        this.locale = "en";
        this.options = {
            altFormat: "Y-m-d",
            altInput: false,
            allowInput: true,
            dateFormat: "Y-m-d",
            maxDate: null,
            minDate: null,
            mode: "single"
        };
    }

    /**
     * Set the locale of the flatpickr calendar
     * @param {String} locale the locale of the calendar (ISO 639-1)
     */
    setLocale (locale) {
        this.locale = locale;
        return this;
    }

    /**
     * Set the options of the flatpickr calendar
     * @param {Object} options the configuration of the calendar
     */
    setOptions (options) {
        this.options = options;
        return this;
    }

    $get () {
        return {
            locale: this.locale,
            options: this.options
        };
    }
}
