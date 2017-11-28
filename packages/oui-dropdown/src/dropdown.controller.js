import { addBooleanParameter, addDefaultParameter } from "@oui-angular/common/component-utils";
import Popper from "popper.js";

const KEY_ESCAPE = 27;

export default class {
    constructor ($attrs, $document, $element, $scope) {
        "ngInject";

        this.$attrs = $attrs;
        this.$document = $document;
        this.$element = $element;
        this.$scope = $scope;
    }

    $onInit () {
        this.isDropdownOpen = false;
        this.hasFocus = false;
        this.currentFocusedElement = null;

        addBooleanParameter(this, "arrow");
        addDefaultParameter(this, "align", "center");

        // Use internal id to map trigger and content with aria-label and aria-labelledby.
        this.id = `oui-dropdown-${this.$scope.$id}`;

        this.documentClickHandler = evt => {
            if (evt &&
        evt.type === "click" &&
        this.referenceElement.contains(evt.target)) {
                return;
            }

            this.referenceElement.focus();
            this.$scope.$apply(() => this.closeDropdown());
        };

        // Handle espace key press
        this.triggerKeyHandler = evt => {
            if (evt &&
        evt.type === "keydown" &&
        evt.which === KEY_ESCAPE) {
                this.onTriggerClick();
            }
        };

        this.triggerBlurHandler = evt => {
            if (!this.$element[0].contains(evt.relatedTarget)) {
                this.$scope.$apply(() => this.closeDropdown());
            }

            // else blur is listen on another contained element
            if (this.currentFocusedElement) {
                angular.element(this.currentFocusedElement).off("blur", this.triggerBlurHandler);
            }
            angular.element(evt.relatedTarget).on("blur", this.triggerBlurHandler);
            this.currentFocusedElement = evt.relatedTarget;
        };
    }

    $postLink () {
        this.referenceElement = this.$element[0].querySelector(".oui-dropdown__trigger");
        this.popperElement = this.$element[0].querySelector(".oui-dropdown__content");
        this.arrowElement = this.$element[0].querySelector(".oui-dropdown__arrow");

        this.$scope.$on("$destroy", () => this.closeDropdown());
    }

    isOpen () {
        return this.isDropdownOpen;
    }

    // Handle click, space key press and enter key press
    onTriggerClick () {
        this.$scope.$apply(() => {
            this.toggle();
        });
    }

    toggle () {
        this.isDropdownOpen = !this.isDropdownOpen;
        if (this.isDropdownOpen) {
            this.openDropdown();
        } else {
            this.closeDropdown();
        }
    }

    openDropdown () {
        this.updatePopper();

        this.$document.on("click", this.documentClickHandler);
    }

    closeDropdown () {
        this.isDropdownOpen = false;
        this.destroyPopper();

        this.$document.off("click", this.documentClickHandler);
    }

    createPopper () {
        let placement = "bottom";

        if (["start", "end"].indexOf(this.align) >= 0) {
            placement += `-${this.align}`;
        }

        // Let Popper.js manage the arrow position when it's centered (default).
        if (this.arrowElement && placement === "bottom") {
            this.arrowElement.setAttribute("x-arrow", "");
        }
        this.popper = new Popper(this.referenceElement, this.popperElement, {
            placement
        });
    }

    updatePopper () {
        if (this.popper) {
            this.popper.scheduleUpdate();
        } else {
            this.createPopper();
        }
    }

    destroyPopper () {
        if (!this.popper) {
            return;
        }

        this.popper.destroy();
        this.popper = null;
    }
}
