import Popper from "popper.js";

const KEY_ESCAPE = 27;

export default class PopoverController {
    constructor ($scope, $element, $attrs, $document, $timeout) {
        "ngInject";

        this.$scope = $scope;
        this.$element = $element;
        this.$attrs = $attrs;
        this.$document = $document;
        this.$timeout = $timeout;
    }

    $onInit () {
        this.isPopoverOpen = false;

        // Use internal id to map trigger
        this.id = `ouiPopover${this.$scope.$id}`;

        if (angular.isUndefined(this.placement)) {
            this.placement = "right";
        }
    }

    $postLink () {
        this.triggerElement = this.$element[0].querySelector(".oui-popover__trigger");
        this.popperElement = this.$element[0].querySelector(".oui-popover__content");
        this.arrowElement = this.$element[0].querySelector(".oui-popover__arrow");
    }

    $destroy () {
        this.closePopover();
    }

    onTriggerClick () {
        if (!this.isPopoverOpen) {
            this.openPopover();
        } else {
            this.closePopover();
        }
    }

    triggerKeyHandler (evt) {
        if (evt && evt.type === "keydown" && evt.which === KEY_ESCAPE) {
            this.$scope.$apply(() => {
                this.closePopover();
            });
        }
    }

    openPopover () {
        this.isPopoverOpen = true;
        angular.element(this.$element.children()[0]).addClass("oui-popover_active");
        this.updatePopper();

        this.$document.on("keydown", evt => this.triggerKeyHandler(evt));
        this.$scope.$broadcast("oui:popover:afterOpen", this.id);
    }

    closePopover () {
        this.isPopoverOpen = false;
        angular.element(this.$element.children()[0]).removeClass("oui-popover_active");
        this.destroyPopper();

        this.$document.off("keydown", evt => this.triggerKeyHandler(evt));
        this.$scope.$broadcast("oui:popover:afterClose", this.id);
    }

    createPopper () {
        // Let Popper.js manage the arrow position when it's centered (default).
        if (this.arrowElement) {
            this.arrowElement.setAttribute("x-arrow", "");
        }

        this.popperElement.style.minWidth = `${this.triggerElement.offsetWidth}px`;

        this.popper = new Popper(this.triggerElement, this.popperElement, {
            placement: this.placement,
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
}
