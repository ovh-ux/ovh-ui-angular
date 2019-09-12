export default class {
    /* @ngInject */
    constructor ($element, $timeout) {
        this.$element = $element;
        this.$timeout = $timeout;
    }

    $postLink () {
        this.$timeout(() =>
            this.$element
                .addClass("oui-navbar-list__item")
        );
    }

    // Return value of "ui-sref"
    getFullSref () {
        return `${this.state}(${JSON.stringify(this.stateParams)})`;
    }
}
