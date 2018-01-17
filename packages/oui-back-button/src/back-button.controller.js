export default class {
    constructor ($element, $window) {
        "ngInject";

        this.$element = $element;
        this.$window = $window;
    }

    $postLink () {
        // Remove ID and Name to avoid duplicate
        // And accessibility attributes on the root component
        this.$element
            .removeAttr("aria-label")
            .removeAttr("id")
            .removeAttr("name");
    }

    onBtnClick () {
        if (angular.isFunction(this.onClick)) {
            this.onClick();
        } else {
            this.$window.history.back();
        }
    }
}
