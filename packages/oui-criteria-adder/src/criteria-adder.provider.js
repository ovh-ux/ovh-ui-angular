export default class {
    constructor () {
        this.conditionsByType = {
            number: ["is"],
            string: ["contains"]
        };

        // TODO: List of conditions for all types (Not supported yet)
        /* this.conditionsByType = {
            number: [
                "is",
                "smaller",
                "bigger"
            ],
            date: [
                "is",
                "before",
                "after",
                "options"
            ],
            options: [
                "is",
                "isNot"
            ],
            string: [
                "contains",
                "containsNot",
                "start",
                "end",
                "is",
                "isNot"
            ]
        }; */

        this.translations = {
            column_label: "Column",
            condition_label: "Condition",

            condition_string_contains: "contains",
            condition_string_containsNot: "does not contain",
            condition_string_start: "starts with",
            condition_string_end: "ends with",
            condition_string_is: "is",
            condition_string_isNot: "is not",

            condition_number_is: "is",
            condition_number_smaller: "is smaller than",
            condition_number_bigger: "is bigger than",

            condition_date_is: "is",
            condition_date_before: "is before",
            condition_date_after: "is after",
            condition_date_options: "is in the last",

            condition_date_option_1h: "1 hour",
            condition_date_option_1d: "1 day",
            condition_date_option_1w: "1 week",
            condition_date_option_1M: "1 month",
            condition_date_option_3M: "3 months",
            condition_date_option_6M: "6 months",
            condition_date_option_12M: "12 months",

            condition_options_is: "is",
            condition_options_isNot: "is not",

            value_label: "Value",
            submit_label: "Apply"
        };
    }

    /**
     * Set the conditions by type
     * @param {Object} conditionsByType a list of conditions by type
     */
    setConditionsByType (conditionsByType) {
        this.conditionsByType = conditionsByType;
        return this;
    }

    /**
     * Set the translations
     * @param {Object} translations a map of translations
     */
    setTranslations (translations) {
        this.translations = translations;
        return this;
    }

    $get () {
        return {
            conditionsByType: this.conditionsByType,
            translations: this.translations
        };
    }
}
