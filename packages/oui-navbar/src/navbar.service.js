export default class {
    isOpen (state) {
        return this.navigation && this.navigation[state];
    }

    // Toggle menu from button click
    toggleMenu (state, isInternalNav) {
        if (state) {
            // Reset navigation if not internal navigation
            if (!isInternalNav && (!this.navigation || !this.navigation[state])) {
                this.navigation = {};
            }

            if (isInternalNav || !this.navigation[state]) {
                // Toggle menu if internal navigation or state is undefined
                this.navigation[state] = !this.navigation[state];
            } else if (this.navigation[state]) {
                // Else close all menus
                this.navigation = null;
            }
        } else {
            // Close all menus
            this.navigation = null;
        }

        return this.navigation;
    }
}
