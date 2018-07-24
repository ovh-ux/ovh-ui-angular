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
import merge from "lodash/merge";

export default class {
    constructor () {
        this.locale = "en";
        this.options = {
            altInputClass: "oui-calendar__control_alt",
            allowInput: false,
            dateFormat: "Y-m-d",
            disableMobile: true,
            maxDate: null,
            minDate: null,
            mode: "single",
            nextArrow: '<span class="oui-icon oui-icon-chevron-right"></span>',
            prevArrow: '<span class="oui-icon oui-icon-chevron-left"></span>',
            showMonths: 1
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
        this.options = merge(this.options, options);
        return this;
    }

    $get () {
        return angular.copy({
            locale: this.locale,
            options: this.options
        });
    }
}
