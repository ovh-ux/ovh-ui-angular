import get from "lodash/get";
import remove from "lodash/remove";

export default class {
    constructor ($attrs, $element, $timeout) {
        "ngInject";

        this.$attrs = $attrs;
        this.$element = $element;
        this.$timeout = $timeout;
    }

    $postLink () {
        this.$timeout(() =>
            this.$element.addClass("oui-dual-list")
        );
    }

    getProperty (item) {
        return get(item, this.property, item);
    }

    moveToSource (item) {
        if (angular.isArray(this.source)) {
            remove(this.target, (source) => source === item);
            this.source.push(item);

            // Callbacks
            this.onChange({ item });
            this.onRemove({ item });
        }
    }

    moveAllToSource () {
        // Need to do a while for the callbacks
        while (angular.isArray(this.source) && this.target.length) {
            this.moveToSource(this.target[0]);
        }
    }

    moveToTarget (item) {
        if (angular.isArray(this.target)) {
            remove(this.source, (source) => source === item);
            this.target.push(item);

            // Callbacks
            this.onChange({ item });
            this.onAdd({ item });
        }
    }

    moveAllToTarget () {
        // Need to do a while for the callbacks
        while (angular.isArray(this.target) && this.source.length) {
            this.moveToTarget(this.source[0]);
        }
    }
}
