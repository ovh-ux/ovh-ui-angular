import { addBooleanParameter } from "@oui-angular/common/component-utils";

export default class {
    constructor ($scope, $element, $attrs, $timeout) {
        "ngInject";

        this.$scope = $scope;
        this.$element = $element;
        this.$attrs = $attrs;
        this.$timeout = $timeout;
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

    $onInit () {

        addBooleanParameter(this, "disabled");

        if (!this.id) {
            this.id = `oui-radio-${this.$scope.$id}`;
        }

        this.group = this.radioGroup || this.radioToggleGroup;
        if (this.group) {
            this.name = this.group.name;
            this.$scope.$watch("$ctrl.group.model", (value) => {
                this.model = value;
            });
        } else {
            this.name = this.id;
        }
    }

    onRadioModelChange (event) {
        if (this.group) {
            this.group.setModelValue(event.modelValue);
        }

        if (this.onChange) {
            this.$timeout(() => this.onChange(event));
        }
    }

}
