import template from "./header-tabs-dropdown.html";

export default {
    bindings: {
        text: "@"
    },
    controller: class {
        constructor ($element, $timeout) {
            "ngInject";

            this.$element = $element;
            this.$timeout = $timeout;
        }

        $postLink () {
            this.$timeout(() => {
                this.$element
                    .addClass("oui-header-tabs__item oui-header-tabs__item_dropdown")
                    .attr("role", "listitem");
            });
        }
    },
    template,
    transclude: true
};
