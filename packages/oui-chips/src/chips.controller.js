import { addBooleanParameter } from "@oui-angular/common/component-utils";

export default class {
    constructor ($attrs, $element, $timeout) {
        "ngInject";

        this.$attrs = $attrs; // For addBooleanParameter
        this.$element = $element;
        this.$timeout = $timeout;
    }

    $onInit () {
        addBooleanParameter(this, "closable");
        addBooleanParameter(this, "stacked");
    }

    $postLink () {
        this.$timeout(() =>
            this.$element
                .addClass("oui-chip__container")
        );
    }

    removeItem (index) {
        this.items.splice(index, 1);
        this.onRemove({ items: this.items });
    }
}
