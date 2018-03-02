import { addDefaultParameter } from "@oui-angular/common/component-utils";

export default class {
    constructor ($attrs, $element, $timeout, ouiCriteriaAdderConfiguration) {
        "ngInject";

        this.$attrs = $attrs; // For 'addDefaultParameter'
        this.$element = $element;
        this.$timeout = $timeout;
        this.conditions = ouiCriteriaAdderConfiguration.conditionsByType;
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
        this.$timeout(() =>
            this.$element
                .removeAttr("id")
                .removeAttr("name")
        );
    }

    getConditionsByType (type) {
        const conditions = this.conditions[type] || [];
        return conditions.map((condition) => ({
            name: condition,
            title: this.translations[`condition_${type}_${condition}`]
        }));
    }

    onColumnChange () {
        // Reset value model
        this.valueModel = undefined;
    }

    onFormSubmit (form) {
        if (form.$valid) {
            const modelValue = {
                title: `${this.columnModel.title} ${this.conditionModel.title} ${this.valueModel}`,
                property: this.columnModel.name,
                condition: this.conditionModel.name,
                value: this.valueModel
            };

            this.onSubmit({ modelValue });
        }
    }
}
