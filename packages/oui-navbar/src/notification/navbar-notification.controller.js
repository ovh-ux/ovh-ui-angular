export default class {
    constructor ($element, $timeout, ouiNavbarConfiguration) {
        "ngInject";

        this.$element = $element;
        this.$timeout = $timeout;
        this.translations = ouiNavbarConfiguration.translations;
    }

    $postLink () {
        this.$timeout(() =>
            this.$element
                .addClass("oui-navbar-menu")
                .addClass("oui-navbar-menu_notifications")
        );
    }
}
