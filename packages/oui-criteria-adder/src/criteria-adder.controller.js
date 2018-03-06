import { addDefaultParameter } from "@oui-angular/common/component-utils";

export default class {
    constructor ($attrs, $element, $timeout, ouiCriteriaAdderConfiguration) {
        "ngInject";

        this.$attrs = $attrs; // For 'addDefaultParameter'
        this.$element = $element;
        this.$timeout = $timeout;
        this.operators = ouiCriteriaAdderConfiguration.operatorsByType;
        this.translations = ouiCriteriaAdderConfiguration.translations;
    }

    $onInit () {
        // Set align to "end" if undefined
        addDefaultParameter(this, "align", "center");

        // Auto select first column
        if (this.properties) {
            this.columnModel = this.properties[0];
        }
    }

    $postLink () {
        // Sometimes the digest cycle is done before dom manipulation,
        // So we use $timeout to force the $apply
        this.$timeout(() => {
            this.$element
                .addClass("oui-criteria-adder")
                .removeAttr("id")
                .removeAttr("name");
        });
    }

    getOperatorsByType (type) {
        const operators = this.operators[type] || [];
        return operators.map((operator) => ({
            name: operator,
            title: this.translations[`operator_${type}_${operator}`]
        }));
    }

    onColumnChange () {
        // Reset value model
        this.valueModel = undefined;
    }

    onFormSubmit (form) {
        if (form.$valid) {
            const modelValue = {
                title: `${this.columnModel.title} ${this.operatorModel.title} ${this.valueModel}`,
                property: this.columnModel.name,
                operator: this.operatorModel.name,
                value: this.valueModel
            };

            this.onSubmit({ modelValue });
        }
    }
}
