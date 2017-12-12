import { addBooleanParameter } from "@oui-angular/common/component-utils";

export default class {
    constructor ($scope, $element, $attrs) {
        "ngInject";

        this.$scope = $scope;
        this.$element = $element;
        this.$attrs = $attrs;
    }

    $postLink () {
        this.$element.removeAttr(["id", "name"]);
    }

    $onInit () {
        addBooleanParameter(this, "disabled");

        if (!self.id) {
            this.id = `oui-radio-${this.$scope.$id}`;
        }
    }
}
