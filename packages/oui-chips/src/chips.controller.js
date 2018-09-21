import { addBooleanParameter } from "@ovh-ui/common/component-utils";

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

        this.items = this.items ? angular.copy(this.items) : [];
    }

    $postLink () {
        this.$timeout(() =>
            this.$element
                .addClass("oui-chip__container")
        );
    }

    removeItem (index) {
        // angular.copy to remove the $$hashKey
        const removed = angular.copy(this.items.splice(index, 1)[0]);
        const items = angular.copy(this.items);
        this.onRemove({ items, removed });

        if (this.criteriaContainer) {
            this.criteriaContainer.remove(removed);
        }
    }
}
