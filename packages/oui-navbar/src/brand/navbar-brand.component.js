import template from "./navbar-brand.html";

export default {
    bindings: {
        href: "@",
        heading: "@?",
        ariaLabel: "@?",

        iconAlt: "@?",
        iconClass: "@?",
        iconSrc: "@?"
    },
    controller: class {
        constructor ($element, $timeout) {
            "ngInject";

            this.$element = $element;
            this.$timeout = $timeout;
        }

        $postLink () {
            this.$timeout(() =>
                this.$element
                    .removeAttr("aria-label")
            );
        }
    },
    template
};
