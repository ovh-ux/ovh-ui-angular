import { addDefaultParameter } from "@oui-angular/common/component-utils";

export default class {
    constructor ($attrs, $element, $timeout) {
        "ngInject";

        this.$attrs = $attrs;
        this.$element = $element;
        this.$timeout = $timeout;
    }

    $onInit () {
        addDefaultParameter(this, "size", "auto");
    }

    $postLink () {
        this.$timeout(() =>
            this.$element
                .addClass(`oui-skeleton oui-skeleton_${this.size}`)
        );
    }
}
