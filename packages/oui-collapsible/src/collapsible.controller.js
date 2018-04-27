import { addDefaultParameter } from "@oui-angular/common/component-utils";

export default class {
    constructor ($attrs, $element, $timeout) {
        "ngInject";
        this.$attrs = $attrs;
        this.$element = $element;
        this.$timeout = $timeout;
    }

    $onInit () {
        addDefaultParameter(this, "expanded", false);
    }

    $postLink () {
        // Sometimes the digest cycle is done before dom manipulation,
        // So we use $timeout to force the $apply
        this.$timeout(() =>
            this.$element.removeAttr("id")
        );
    }

    toggle () {
        this.expanded = !this.expanded;
    }
}
