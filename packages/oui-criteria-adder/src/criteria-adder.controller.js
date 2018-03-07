import { addDefaultParameter } from "@oui-angular/common/component-utils";

export default class {
    constructor ($attrs, $element, $scope, $timeout, ouiCriteriaAdderConfiguration) {
        "ngInject";

        this.$attrs = $attrs; // For 'addDefaultParameter'
        this.$element = $element;
        this.$scope = $scope;
        this.$timeout = $timeout;
        this.operators = ouiCriteriaAdderConfiguration.operatorsByType;
        this.translations = ouiCriteriaAdderConfiguration.translations;
        this.valueModel = [];
    }

    $onInit () {
        // Set align to "end" if undefined
        addDefaultParameter(this, "align", "center");

        // Auto select first column
        if (this.properties) {
            this.columnModel = this.properties[0];
        }

        if (!this.id) {
            this.id = `oui-criteria-adder-${this.$scope.$id}`;
        }

        this.selectableOperators = this.filterSelectableOperators();
        this.operatorModel = this.selectableOperators[0];
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
        this.resetValueModel();
        this.selectableOperators = this.filterSelectableOperators();
        this.operatorModel = this.selectableOperators[0];
    }

    onFormSubmit (form) {
        if (form.$valid) {
            const modelValue = {
                title: `${this.columnModel.title} ${this.operatorModel.title} ${this.valueModel[this.columnModel.type]}`,
                property: this.columnModel.name,
                operator: this.operatorModel.name,
                value: this.valueModel[this.columnModel.type]
            };

            this.onSubmit({ modelValue });
        }
    }

    resetValueModel () {
        Object.keys(this.valueModel).forEach(key => {
            this.valueModel[key] = undefined;
        });
    }

    filterSelectableOperators () {
        const type = this.columnModel.type;
        const operators = this.operators[type] || [];
        return operators.map((operator) => ({
            name: operator,
            title: this.translations[`operator_${type}_${operator}`]
        }));
    }
}
