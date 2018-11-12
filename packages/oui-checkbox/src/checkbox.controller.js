import { addBooleanParameter, addDefaultParameter } from "@ovh-ui/common/component-utils";

export default class {
    constructor ($scope, $element, $attrs, $timeout) {
        "ngInject";

        this.$scope = $scope;
        this.$element = $element;
        this.$attrs = $attrs;
        this.$timeout = $timeout;
    }

    $postLink () {
        addBooleanParameter(this, "required");

        // Sometimes the digest cycle is done before dom manipulation,
        // So we use $timeout to force the $apply
        this.$timeout(() =>
            this.$element
                .removeAttr("id")
                .removeAttr("name")
        );

        this.checkboxElement = this.$element.find("input");

        // $watch is required because there is no other way
        // to be notified when the value has changed from the
        // outside
        this.$scope.$watch("$ctrl.model", (newValue) =>
            this._updateIndeterminateState(newValue)
        );
    }

    $onInit () {
        addBooleanParameter(this, "disabled");
        addBooleanParameter(this, "required");
        addDefaultParameter(this, "id", `ouiCheckbox${this.$scope.$id}`);
    }

    hasError () {
        if (!this.form) {
            return false;
        }
        return this.form.$submitted && this.form[this.name].$invalid;
    }

    _updateIndeterminateState (model) {
        this.checkboxElement.prop("indeterminate", model === null);
    }
}
