import { addBooleanParameter, addDefaultParameter } from "@ovh-ui/common/component-utils";

export default class {
    /* @ngInject */
    constructor ($attrs, $element, $scope, $timeout) {
        this.$attrs = $attrs;
        this.$element = $element;
        this.$scope = $scope;
        this.$timeout = $timeout;
    }

    $onInit () {
        addBooleanParameter(this, "disabled");
        addBooleanParameter(this, "required");
        addDefaultParameter(this, "id", `ouiSwitch${this.$scope.$id}`);
    }

    $postLink () {
        this.$timeout(() =>
            this.$element
                .addClass("oui-switch")
                .removeAttr("id")
                .removeAttr("name")
        );
    }
}
