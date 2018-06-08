import template from "./dropdown-group.html";

export default {
    template,
    controller: class {
        constructor ($element, $timeout) {
            "ngInject";

            this.$element = $element;
            this.$timeout = $timeout;
        }

        $postLink () {
            this.$timeout(() =>
                this.$element
                    .addClass("oui-dropdown-group")
            );
        }
    },
    bindings: {
        label: "@"
    },
    transclude: true
};
