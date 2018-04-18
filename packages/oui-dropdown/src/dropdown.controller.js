import { addBooleanParameter, addDefaultParameter } from "@oui-angular/common/component-utils";
import Popper from "popper.js";

const KEY_ESCAPE = 27;

export default class {
    constructor ($attrs, $document, $element, $scope, $timeout) {
        "ngInject";

        this.$attrs = $attrs;
        this.$document = $document;
        this.$element = $element;
        this.$scope = $scope;
        this.$timeout = $timeout;
    }

    $onInit () {
        this.isDropdownOpen = false;
        this.hasFocus = false;
        this.currentFocusedElement = null;

        addBooleanParameter(this, "arrow");
        addBooleanParameter(this, "persistent");
        addDefaultParameter(this, "align", "center");

        // Use internal id to map trigger and content with aria-label and aria-labelledby.
        this.id = `ouiDropdown${this.$scope.$id}`;

        this.documentClickHandler = evt => {
            if ((evt && evt.type === "click") &&
                (!evt.target || !evt.target.getAttribute || evt.target.getAttribute("type") !== "submit") &&
                (this.referenceElement.contains(evt.target) ||
                (this.persistent && this.popperElement.contains(evt.target)))) {
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
                this.$scope.$apply(() => {
                    this.closeDropdown();
                });
            }
        };

        this.triggerBlurHandler = evt => {
            // Disable blur management if dropdown is persitent.
            if (this.persistent) {
                return;
            }

            if (evt.relatedTarget && !this.$element[0].contains(evt.relatedTarget)) {
                // Sometime Angular is already in a digest loop here.
                // Let's delay dropdown closing after that instead of $applying again.
                this.$timeout(() => this.closeDropdown());
            }

            // This part allows to press tab and keeps dropdown open
            // as long as focused element is in the dropdown.
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
    }

    $destroy () {
        this.closeDropdown();
    }

    // Handle click, space key press and enter key press
    onTriggerClick () {
        this.toggle();
    }

    toggle () {
        if (!this.isDropdownOpen) {
            this.openDropdown();
        } else {
            this.closeDropdown();
        }
    }

    openDropdown () {
        // Don't use ng-class here, it could cause issue on positionning.
        this.isDropdownOpen = true;
        angular.element(this.$element.children()[0]).addClass("oui-dropdown_active");
        this.updatePopper();

        this.$document.on("click", this.documentClickHandler);
        this.$scope.$broadcast("oui:dropdown:afterOpen", this.id);
    }

    closeDropdown () {
        // Don't use ng-class here, it could cause issue on positionning.
        this.isDropdownOpen = false;
        angular.element(this.$element.children()[0]).removeClass("oui-dropdown_active");
        this.destroyPopper();

        this.$document.off("click", this.documentClickHandler);
        this.$scope.$broadcast("oui:dropdown:afterClose", this.id);
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

        this.popperElement.style.minWidth = `${this.getTriggerWidth()}px`;

        this.popper = new Popper(this.referenceElement, this.popperElement, {
            placement,
            modifiers: {
                preventOverflow: {
                    boundariesElement: this.$document[0].body
                }
            }
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

    getTriggerWidth () {
        return this.referenceElement.offsetWidth;
    }

}
