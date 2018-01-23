import { addBooleanParameter } from "@oui-angular/common/component-utils";

export default class {
    constructor ($attrs, $document, $element, $timeout, NavbarService, KEYBOARD_KEYS) {
        "ngInject";

        this.$attrs = $attrs;
        this.$document = $document;
        this.$element = $element;
        this.$timeout = $timeout;
        this.navbarService = NavbarService;
        this.KEYBOARD_KEYS = KEYBOARD_KEYS;
    }

    toggleMenu (state, isInternalNav) {
        // Update navbar navigation
        this.navigation = this.navbarService.toggleMenu(state, isInternalNav);
    }

    $onInit () {
        // Support presence of attribute 'fixed'
        addBooleanParameter(this, "fixed");
    }

    $postLink () {
        // Add Classname on root element
        this.$element.addClass("oui-navbar");
        if (this.fixed) {
            this.$element.addClass("oui-navbar_fixed");
        }

        // Add "role" attribute for accessibility
        this.$element.attr("role", "navigation");

        // Close navbar menu on document click, only if a menu is open
        this.$document.on("click", () => {
            if (this.navigation) {
                this.$timeout(() => this.toggleMenu());
            }
        });

        // Avoid click propagation on $element
        this.$element.on("click", (e) => {
            e.stopPropagation();
        });

        // Support keyboard
        this.$document.on("keydown", (e) => {
            // ESC to close menu
            if (this.navigation && e.which === this.KEYBOARD_KEYS.ESC) {
                this.$timeout(() => this.toggleMenu());
            }
        });
    }
}
