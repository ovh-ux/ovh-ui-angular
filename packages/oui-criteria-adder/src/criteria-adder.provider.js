export default class {
    constructor () {
        this.operatorsByType = {
            number: [
                "is",
                "smaller",
                "bigger"
            ],
            string: [
                "contains",
                "containsNot",
                "startsWith",
                "endsWith",
                "is",
                "isNot"
            ]
        };

        // TODO: List of operators for all types (Not supported yet)
        /* this.operatorsByType = {
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
            operator_label: "Operator",

            operator_string_contains: "contains",
            operator_string_containsNot: "does not contain",
            operator_string_startsWith: "starts with",
            operator_string_endsWith: "ends with",
            operator_string_is: "is",
            operator_string_isNot: "is not",

            operator_number_is: "is",
            operator_number_smaller: "is smaller than",
            operator_number_bigger: "is bigger than",

            operator_date_is: "is",
            operator_date_before: "is before",
            operator_date_after: "is after",
            operator_date_options: "is in the last",

            operator_date_option_1h: "1 hour",
            operator_date_option_1d: "1 day",
            operator_date_option_1w: "1 week",
            operator_date_option_1M: "1 month",
            operator_date_option_3M: "3 months",
            operator_date_option_6M: "6 months",
            operator_date_option_12M: "12 months",

            operator_options_is: "is",
            operator_options_isNot: "is not",

            value_label: "Value",
            submit_label: "Add"
        };
    }

    /**
     * Set the operators by type
     * @param {Object} operatorsByType a list of operators by type
     */
    setOperatorsByType (operatorsByType) {
        this.operatorsByType = operatorsByType;
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
            operatorsByType: this.operatorsByType,
            translations: this.translations
        };
    }
}
