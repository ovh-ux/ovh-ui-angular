import { hasAttributeValue } from "@oui-angular/common/component-utils";

export default class {
    constructor ($element, $q, $timeout) {
        "ngInject";
        this.$element = $element;
        this.$q = $q;
        this.$timeout = $timeout;
    }

    $onInit () {
        if (!hasAttributeValue(this.$element[0], "on-add")) {
            throw new Error("ovh-ui-angular: The required callback 'on-add' is not provided.");
        }
        if (!hasAttributeValue(this.$element[0], "on-remove")) {
            throw new Error("ovh-ui-angular: The required callback 'on-remove' is not provided.");
        }
    }

    $postLink () {
        this.$timeout(() =>
            this.$element
                .addClass("oui-inline-adder")
        );
    }

    addItem (item) {
        return this.onAdd ?
            this.onAdd({ item }) :
            this.$q.resolve();
    }

    removeItem (item) {
        return this.onRemove ?
            this.onRemove({ item }) :
            this.$q.resolve();
    }
}
