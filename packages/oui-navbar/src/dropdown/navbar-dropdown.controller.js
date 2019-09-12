export default class {
    /* @ngInject */
    constructor ($element, $timeout) {
        this.$element = $element;
        this.$timeout = $timeout;
    }

    $postLink () {
        this.$timeout(() =>
            this.$element
                .addClass("oui-navbar-dropdown")
                .addClass("oui-navbar-list__item")
        );
    }
}
