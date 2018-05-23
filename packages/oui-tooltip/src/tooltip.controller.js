import Popper from "popper.js";
import template from "./tooltip.html";

export default class {
    constructor ($compile, $element, $scope, $timeout) {
        "ngInject";

        this.$compile = $compile;
        this.$element = $element;
        this.$scope = $scope;
        this.$timeout = $timeout;
    }

    $onInit () {
    // Add default value for attribute 'placement'
        if (angular.isUndefined(this.placement)) {
            this.placement = "top";
        }
    }

    $postLink () {
        this.$timeout(() => {
            // Add an attribute 'aria-label' if undefined
            if (!this.$element.attr("aria-label")) {
                this.$element.attr("aria-label", this.text);
            }

            // Create a new scope to compile the tooltip next to the trigger
            const tooltipScope = angular.extend(this.$scope.$new(true), { $tooltipCtrl: this });
            const tooltipTemplate = this.$compile(template)(tooltipScope);

            this.$element
                .addClass("oui-tooltip__trigger") // Add classname for 'focus' and 'hover' CSS events
                .one("focus mouseenter", () => this.createPopper()) // One time bind to create the popper helper
                .after(tooltipTemplate); // Add compiled template after $element
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
}
