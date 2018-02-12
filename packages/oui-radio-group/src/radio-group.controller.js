export default class {
    constructor ($scope, $timeout, $element) {
        "ngInject";

        this.$scope = $scope;
        this.$timeout = $timeout;
        this.$element = $element;
    }

    $postLink () {
        // Sometimes the digest cycle is done before dom manipulation,
        // So we use $timeout to force the $apply
        this.$timeout(() => {
            this.$element
                .attr("role", "radiogroup");
        });
    }

    $onInit () {
        if (!this.name) {
            this.name = `oui-radio-group-${this.$scope.$id}`;
        }
    }

    setModelValue (value) {
        this.model = value;
    }
}
