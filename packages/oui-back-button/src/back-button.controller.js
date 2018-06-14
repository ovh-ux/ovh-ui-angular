export default class {
    constructor ($attrs, $element, $timeout, $window) {
        "ngInject";

        this.$attrs = $attrs;
        this.$element = $element;
        this.$timeout = $timeout;
        this.$window = $window;
    }

    $onInit () {
        // Deprecated: Support for 'title' attribute
        if (!!this.$attrs.title && !this.$attrs.heading) {
            this.heading = this.title;
        }
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
