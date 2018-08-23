import { addBooleanParameter } from "@oui-angular/common/component-utils";
import Flatpickr from "flatpickr";

export default class {
    constructor ($attrs, $element, $timeout, ouiCalendarConfiguration) {
        "ngInject";

        this.$attrs = $attrs;
        this.$element = $element;
        this.$timeout = $timeout;
        this.locale = ouiCalendarConfiguration.locale;
        this.options = angular.copy(ouiCalendarConfiguration.options);
    }

    setModelValue (value) {
        this.flatpickr.setDate(value, true);
    }

    setEventHooks (hooks) {
        // Add a callback for each events
        hooks.forEach((hook) => {
            this.options[hook] = (selectedDates, dateStr) => {
                this.model = dateStr;
                this.$timeout(this[hook]({ selectedDates, dateStr }));
            };
        });
    }

    setOptionsProperty (property, value) {
        if (angular.isDefined(value)) {
            this.options[property] = value;
        }
    }

    initCalendarInstance () {
        // Set options from attributes
        this.setOptionsProperty("appendTo", this.appendTo);
        this.setOptionsProperty("defaultDate", this.model);
        this.setOptionsProperty("disable", this.disableDate);
        this.setOptionsProperty("enable", this.enableDate);
        this.setOptionsProperty("inline", this.inline);
        this.setOptionsProperty("locale", this.locale);
        this.setOptionsProperty("maxDate", this.maxDate);
        this.setOptionsProperty("minDate", this.minDate);
        this.setOptionsProperty("mode", this.mode);
        this.setOptionsProperty("weekNumbers", this.weekNumbers);
        this.setOptionsProperty("enableTime", this.enableTime);

        // Set formatting options
        this.setOptionsProperty("dateFormat", this.format);

        if (angular.isDefined(this.altFormat)) {
            this.setOptionsProperty("altInput", true);
            this.setOptionsProperty("altFormat", this.altFormat);
        }

        // Append calendar to control wrapper
        if (!this.appendToBody) {
            const wrapper = this.$element[0].querySelector(".oui-calendar__control-wrapper");
            this.setOptionsProperty("appendTo", wrapper);
        }

        // Set events with array of supported hooks/attributes
        this.setEventHooks([
            "onChange",
            "onOpen",
            "onClose"
        ]);

        // Get instance of flatpickr when component is ready
        this.setOptionsProperty("onReady", (selectedDates, dateStr, instance) => {
            this.flatpickr = instance;

            // Update model with formatted value
            this.model = dateStr;
        });

        // Init the flatpickr instance
        this.flatpickr = new Flatpickr(this.$element.find("input")[0], this.options);
    }

    $onInit () {
        addBooleanParameter(this, "appendToBody");
        addBooleanParameter(this, "disabled");
        addBooleanParameter(this, "inline");
        addBooleanParameter(this, "required");
        addBooleanParameter(this, "weekNumbers");

        this.initCalendarInstance();
    }

    $onDestroy () {
        this.flatpickr.destroy();
    }

    $postLink () {
        // Avoid $element DOM unsync for jqLite methods
        this.$timeout(() => {
            this.$element
                .addClass("oui-calendar")
                .removeAttr("id")
                .removeAttr("name");

            // Add class for `inline`
            if (this.inline) {
                this.$element.addClass("oui-calendar_inline");
            }
        });
    }
}
