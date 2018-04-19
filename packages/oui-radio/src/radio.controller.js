import { addBooleanParameter, addDefaultParameter } from "@oui-angular/common/component-utils";

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
        addBooleanParameter(this, "thumbnail");
        addBooleanParameter(this, "required");
        addDefaultParameter(this, "id", `ouiRadio${this.$scope.$id}`);

        this.$element.addClass(this.radioToggleGroup ? "oui-radio-toggle" : "oui-radio");
        if (this.thumbnail && !this.radioToggleGroup) {
            this.$element.addClass("oui-radio_thumbnail");
        }

        this.group = this.radioGroup || this.radioToggleGroup;
        if (this.group) {
            this.name = this.group.name;
            this.$scope.$watch("$ctrl.group.model", (value) => {
                this.model = value;
            });
        } else {
            addDefaultParameter(this, "name", this.id);
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
