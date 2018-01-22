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
            const tooltipScope = angular.extend(this.$scope.$new(true), { $ctrl: this });
            const tooltipTemplate = this.$compile(template)(tooltipScope);

            this.$element

            // Add classname for 'focus' and 'hover' CSS events
                .addClass("oui-tooltip__trigger")

            // one time bind to create the popper helper
                .one("focus mouseenter", () => this.createPopper())

            // Add compiled template after $element
                .after(tooltipTemplate);
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
