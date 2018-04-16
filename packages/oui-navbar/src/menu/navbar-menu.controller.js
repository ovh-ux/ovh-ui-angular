export default class {
    constructor ($element, $timeout, ouiNavbarConfiguration, NavbarService, NavbarGroupService, KEYBOARD_KEYS) {
        "ngInject";

        this.$element = $element;
        this.$timeout = $timeout;
        this.config = ouiNavbarConfiguration;
        this.navbarService = NavbarService;
        this.navbarGroupService = NavbarGroupService;
        this.KEYBOARD_KEYS = KEYBOARD_KEYS;
    }

    toggleMenu (state, isInternalNav) {
        // Update navbar navigation
        this.navigation = this.navbarService.toggleMenu(state, isInternalNav);
    }

    closeMenu (state, isInternalNav) {
        // Update navbar navigation
        this.navigation = this.navbarService.toggleMenu(state, isInternalNav);

        // Set focus on menu toggler, preceding $element
        const prev = this.$element[0].previousElementSibling;
        if (prev) {
            prev.focus();
        }
    }

    // Close method for button with click function
    closeMenuWithCallback ($event, callback) {
        // Call the callback function
        if (typeof callback === "function") {
            callback($event);
        }

        // Then close all menus
        this.navigation = this.navbarService.toggleMenu();
    }

    // Return value of "ui-sref"
    static getFullSref (item) {
        return `${item.state}(${JSON.stringify(item.stateParams)})`;
    }

    // Build breadcrumb for child menu
    getChildBreadcrumb () {
        return this.headerBreadcrumb ? `${this.headerBreadcrumb} › ${this.headerTitle}` : this.headerTitle;
    }

    setFirstFocus () {
        // Force focus when last is initialized
        this.navbarGroupService.setFocusTo(this.menuName, 0);
    }

    $onChanges () {
        // Focus first list item when opened
        if (this.expanded) {
            // Add a little delay to avoid transition bug on Webkit
            this.navbarGroupService.setFocusTo(this.menuName, 0);
        }
    }

    $postLink () {
        // Avoid $element DOM unsync for jqLite methods
        this.$timeout(() => {
            // Add classnames on root $element
            this.$element.addClass("oui-navbar-menu");

            // Add "role" attribute for accessibility
            this.$element.attr("role", "menu");
        });
    }
}
