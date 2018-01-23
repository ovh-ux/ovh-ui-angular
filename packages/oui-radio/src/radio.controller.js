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

        if (!self.id) {
            this.id = `oui-radio-${this.$scope.$id}`;
        }
    }
}
