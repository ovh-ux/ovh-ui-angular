import { addDefaultParameter } from "@ovh-ui/common/component-utils";
import isEmpty from "lodash/isEmpty";
import Popper from "popper.js";
import template from "./tooltip.html";
import trim from "lodash/trim";

export default class {
    /* @ngInject */
    constructor ($attrs, $compile, $element, $scope, $timeout) {
        this.$attrs = $attrs; // Used for addDefaultParameter()
        this.$compile = $compile;
        this.$element = $element;
        this.$scope = $scope;
        this.$timeout = $timeout;
    }

    $onInit () {
        addDefaultParameter(this, "placement", "top");
    }

    $onDestroy () {
        this.destroyPopper();
    }

    $postLink () {
        this.$timeout(() => {
            if (this.title) {
                addDefaultParameter(this, "text", this.title);
                this.$element.removeAttr("title"); // Remove title to avoid native tooltip
            }

            if (!this.$element.attr("aria-label")) {
                this.$element.attr("aria-label", this.text);
            }

            const isTextEmptyOrWhitespace = isEmpty(trim(this.text));

            // Create a new scope to compile the tooltip next to the trigger
            const tooltipScope = angular.extend(this.$scope.$new(true), {
                $tooltipCtrl: this
            });
            const tooltipTemplate = this.$compile(template)(tooltipScope);

            if (!isTextEmptyOrWhitespace) {
                this.$element
                    .addClass("oui-tooltip__trigger") // Add classname for 'focus' and 'hover' CSS events
                    .one("focus mouseenter", () => this.createPopper()) // One time bind to create the popper helper
                    .after(tooltipTemplate); // Add compiled template after $element
            }
        });
    }

    createPopper () {
        const trigger = this.$element[0];
        const tooltip = this.$element.next()[0];

        // Let Popper.js position the tooltip
        this.popper = new Popper(trigger, tooltip, {
            placement: this.placement
        });
    }

    destroyPopper () {
        if (!this.popper) {
            return;
        }

        this.popper.destroy();
        this.popper = null;
    }
}
