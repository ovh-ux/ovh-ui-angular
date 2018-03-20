export default class {
    constructor ($element, $timeout, $window) {
        "ngInject";

        this.$element = $element;
        this.$timeout = $timeout;
        this.$window = $window;
    }

    $postLink () {

        this.$element.addClass("oui-back-button");

        // Sometimes the digest cycle is done before dom manipulation,
        // So we use $timeout to force the $apply
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
        } else if (!this.href) {
            this.$window.history.back();
        }
    }

}
