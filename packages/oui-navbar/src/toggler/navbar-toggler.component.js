import template from "./navbar-toggler.html";

export default {
    require: {
        navbarCtrl: "^^ouiNavbar"
    },
    bindings: {
        links: "<"
    },
    controller: class {
        $onChanges (changes) {
            // Get links changes for the loader
            if (changes.links) {
                this.loaded = !!changes.links.currentValue;
            }
        }
    },
    template
};
