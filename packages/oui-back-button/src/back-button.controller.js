export default class {
    constructor ($element, $timeout, $window) {
        "ngInject";

        this.$element = $element;
        this.$timeout = $timeout;
        this.$window = $window;
    }

    $postLink () {
        // Remove ID and Name to avoid duplicate
        // And accessibility attributes on the root component
        this.$timeout(() =>
            this.$element
                .removeAttr("aria-label")
                .removeAttr("id")
                .removeAttr("name")
        );
    }

    onBtnClick () {
        if (angular.isFunction(this.onClick)) {
            this.onClick();
        } else {
            this.$window.history.back();
        }
    }
}
