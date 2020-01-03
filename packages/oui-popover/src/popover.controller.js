import { addDefaultParameter } from "@ovh-ui/common/component-utils";
import Popper from "popper.js";
import template from "./popover.html";

const KEY_ESCAPE = 27;

export default class PopoverController {
    /* @ngInject */
    constructor ($attrs, $compile, $document, $element, $scope, $timeout) {
        this.$attrs = $attrs;
        this.$compile = $compile;
        this.$document = $document;
        this.$element = $element;
        this.$scope = $scope;
        this.$timeout = $timeout;
    }

    $onInit () {
        // Deprecated: Support for component `oui-popover`
        // Check if directive is an attribute or a component
        this.isComponent = angular.isUndefined(this.$attrs.ouiPopover);

        // Deprecated: Support for `placement` attribute
        this.placement = this.placement || this.$attrs.placement;

        this.isPopoverOpen = false;

        addDefaultParameter(this, "id", `ouiPopover${this.$scope.$id}`);
        addDefaultParameter(this, "placement", "right");
    }

    $postLink () {
        this.setPopover()
            .then(() => this.setTrigger())
            .then(() => {
                if (this.open) {
                    this.openPopover();
                }
            });
    }

    $onChanges (changes) {
        if (angular.isDefined(changes.open) && this.triggerElement) {
            if (changes.open.currentValue) {
                this.openPopover();
            } else {
                this.closePopover();
            }
        }
    }

    $onDestroy () {
        this.closePopover();
    }

    setPopover () {
        return this.$timeout(() => {
            // Deprecated: Support for component `oui-popover-content`
            if (this.isComponent) {
                this.popperElement = this.$element[0].querySelector(".oui-popover");
                this.arrowElement = this.$element[0].querySelector(".oui-popover__arrow");
                return;
            }

            // Support for attribute `oui-popover`
            // Create a new scope to compile the popover next to the trigger
            const popoverScope = angular.extend(this.$scope.$new(true), {
                $popoverCtrl: this,
                $ctrl: this.scope
            });
            const popoverTemplate = this.$compile(template)(popoverScope);

            // Add compiled template after $element
            this.$element
                .removeAttr("title") // Remove title to avoid native tooltip
                .after(popoverTemplate);

            this.popperElement = this.$element.next()[0];
            this.arrowElement = this.popperElement.querySelector(".oui-popover__arrow");
        });
    }

    setTrigger () {
        return this.$timeout(() => {
            // Deprecated: Support for component `oui-popover-trigger`
            if (this.isComponent) {
                this.triggerElement = this.$element[0].querySelector(".oui-popover__trigger");
                this.$triggerElement = angular.element(this.triggerElement);
                return;
            }

            // Support for attribute `oui-popover`
            this.triggerElement = this.$element[0];
            this.$triggerElement = angular.element(this.triggerElement);

            this.$triggerElement
                .addClass("oui-popover__trigger")
                .attr({
                    "aria-haspopup": true,
                    "aria-expanded": false
                });

            if (angular.isUndefined(this.$attrs.ouiPopoverOpen)) {
                this.$triggerElement
                    .on("click", () => this.onTriggerClick());
            }
        });
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
        this.updatePopper();

        this.$document.on("keydown", evt => this.triggerKeyHandler(evt));

        // Deprecated: Support for component `oui-popover-trigger`
        if (this.isComponent) {
            this.$triggerElement.attr("aria-expanded", true);
            return;
        }

        // Support for attribute `oui-popover`
        this.$element.attr("aria-expanded", true);

        // force the digest because the popover is outside the angular digest loop
        this.$timeout(() => this.onOpen(), 0);
    }

    closePopover () {
        this.isPopoverOpen = false;

        this.$document.off("keydown", evt => this.triggerKeyHandler(evt));

        // Deprecated: Support for component `oui-popover-trigger`
        if (this.isComponent) {
            this.$triggerElement.attr("aria-expanded", false);
            return;
        }

        // Support for attribute `oui-popover`
        this.$element.attr("aria-expanded", false);

        // force the digest because the popover is outside the angular digest loop
        this.$timeout(() => this.onClose(), 0);
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
                flip: {
                    boundariesElement: "viewport"
                },
                keepTogether: {
                    enabled: true
                },
                preventOverflow: {
                    boundariesElement: "viewport",
                    escapeWithReference: true
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
