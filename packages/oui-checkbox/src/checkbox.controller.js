export default class {
    constructor ($scope, $element, $attrs) {
        "ngInject";

        this.$scope = $scope;
        this.$element = $element;
        this.$attrs = $attrs;
    }

    $postLink () {
        this.$element.removeAttr("id name");

        this.checkboxElement = this.$element.find("input");

        // $watch is required because there is no other way
        // to be notified when the value has changed from the
        // outside
        this.$scope.$watch("$ctrl.model", (newValue) =>
            this._updateIndeterminateState(newValue)
        );
    }

    $onInit () {
        if (angular.isDefined(this.$attrs.disabled) && this.$attrs.disabled === "") {
            this.disabled = true;
        }

        if (!self.id) {
            this.id = `oui-checkbox-${this.$scope.$id}`;
        }
    }

    _updateIndeterminateState (model) {
        this.checkboxElement.prop("indeterminate", model === null);
    }
}
