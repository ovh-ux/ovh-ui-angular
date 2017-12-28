export default class {
    constructor ($element, $window) {
        "ngInject";

        this.$element = $element;
        this.$window = $window;
    }

    $postLink () {
        this.$element.removeAttr("id name aria-label");
    }

    onBtnClick () {
        if (angular.isFunction(this.onClick)) {
            this.onClick();
        } else {
            this.$window.history.back();
        }
    }
}
