import { addBooleanParameter } from "@oui-angular/common/component-utils";

export default class {
    constructor ($attrs, $compile, $element, $scope) {
        "ngInject";

        this.$attrs = $attrs;
        this.$compile = $compile;
        this.$element = $element;
        this.$scope = $scope;
    }

    $onInit () {
        addBooleanParameter(this, "disabled");
        addBooleanParameter(this, "required");
    }

    $postLink () {
        this.$compile(this.htmlContent)(this.$scope, (clone) => {
            this.$element.append(clone);
        });
    }
}
