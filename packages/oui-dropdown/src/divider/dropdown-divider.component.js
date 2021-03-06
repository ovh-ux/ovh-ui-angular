export default {
    controller: class {
        /* @ngInject */
        constructor ($element, $timeout) {
            this.$element = $element;
            this.$timeout = $timeout;
        }

        $postLink () {
            this.$timeout(() =>
                this.$element
                    .addClass("oui-dropdown-menu__divider")
                    .attr("role", "separator")
            );
        }
    }
};
