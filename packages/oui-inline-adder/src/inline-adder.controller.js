import { hasAttributeValue } from "@oui-angular/common/component-utils";
export default class {
    constructor ($element, $q) {
        "ngInject";
        this.$element = $element;
        this.$q = $q;
    }

    $onInit () {
        if (!hasAttributeValue(this.$element[0], "on-add")) {
            throw new Error("ovh-ui-angular: The required callback 'on-add' is not provided.");
        }
        if (!hasAttributeValue(this.$element[0], "on-remove")) {
            throw new Error("ovh-ui-angular: The required callback 'on-remove' is not provided.");
        }
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
