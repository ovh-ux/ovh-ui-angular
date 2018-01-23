export default class {
    constructor ($timeout, NavbarService, KEYBOARD_KEYS) {
        "ngInject";

        this.$timeout = $timeout;
        this.navbarService = NavbarService;
        this.KEYBOARD_KEYS = KEYBOARD_KEYS;

        this.keyboardNav = {};
    }

    addItemToGroup (item, groupName) {
        // Create the group if it doesn't exist
        if (angular.isUndefined(this.keyboardNav[groupName])) {
            this.keyboardNav[groupName] = [];
        }

        // Add item to the group
        this.keyboardNav[groupName].push(item);
    }

    bindGroup (groupName) {
        const keys = {};
        const keysRegex = new RegExp([
            this.KEYBOARD_KEYS.ALT,
            this.KEYBOARD_KEYS.TAB
        ].join("|"));

        const tabbableItems = this.keyboardNav[groupName];
        const lastIndex = tabbableItems.length - 1;

        angular.element(tabbableItems)
            .on("keydown", (e) => {
                if (keysRegex.test(e.which) && this.navbarService.isOpen(groupName)) {
                    e.preventDefault();

                    let index = this.keyboardNav[groupName].indexOf(e.target);
                    keys[e.which] = true;

                    if (keys[this.KEYBOARD_KEYS.ALT] && !keys[this.KEYBOARD_KEYS.TAB]) {
                        // Move Down
                        index = index >= lastIndex ? 0 : index + 1;
                    } else if (keys[this.KEYBOARD_KEYS.ALT] && keys[this.KEYBOARD_KEYS.TAB]) {
                        // Move Up
                        index = index <= 0 ? lastIndex : index - 1;
                    }

                    // Focus next/prev tabbable item
                    tabbableItems[index].focus();
                }
            })
            .on("keyup", (e) => {
                delete keys[e.which];
            });
    }

    // Set focus to an item of a group
    setFocusTo (groupName, index) {
        // Add a delay to force focus
        const delay = 50;
        this.$timeout(() => this.keyboardNav[groupName][index] && this.keyboardNav[groupName][index].focus(), delay);
    }
}
