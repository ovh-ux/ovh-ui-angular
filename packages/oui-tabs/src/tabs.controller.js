import find from "lodash/find";

export default class {
    constructor ($element, $timeout) {
        "ngInject";

        this.$element = $element;
        this.$timeout = $timeout;
    }

    addItem (item, index) {
        // Position item in items array
        if (angular.isNumber(index)) {
            this.items.splice(index, 0, item);
        } else {
            this.items.push(item);
        }
    }

    removeItem (item) {
        const index = this.items.indexOf(item);

        if (index > -1) {
            this.items.splice(index, 1);
        }

        // If was model, set first item as active
        if (this.items.length && item.id === this.model) {
            this.setActiveTab(this.items[0]);
        }
    }

    setActiveTab (item) {
        this.model = item.id;
        if (angular.isFunction(item.onActive)) {
            item.onActive();
        }
    }

    $onInit () {
        this.items = [];
    }

    $postLink () {
        this.$timeout(() =>
            this.$element
                .addClass("oui-tabs")
                .removeAttr("aria-label")
        );

        if (this.items.length > 0) {
            this.setActiveTab(find(this.items, { id: this.model }) || this.items[0]);
        }
    }
}
