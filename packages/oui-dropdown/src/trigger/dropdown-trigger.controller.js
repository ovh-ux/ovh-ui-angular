import { addBooleanParameter } from "@oui-angular/common/component-utils";
import template from "./dropdown-trigger.html";

export default class {
    constructor ($attrs, $compile, $element, $scope, $timeout) {
        "ngInject";

        this.$attrs = $attrs;
        this.$compile = $compile;
        this.$element = $element;
        this.$scope = $scope;
        this.$timeout = $timeout;
    }

    $onInit () {
        addBooleanParameter(this, "disabled");
    }

    $postLink () {
        this.$timeout(() => {
            if (!this.dropdown.text) {
                this.$element.removeAttr("aria-label");
            }

            if (this.$element[0].tagName.toLowerCase() === "oui-dropdown-trigger") {
                this.$compile(template)(this.$scope, (clone) => {
                    this.$element.append(clone);
                });
            } else {
                // Update custom $element
                this.$element
                    .addClass("oui-dropdown__trigger")
                    .attr({
                        id: this.dropdown.id,
                        "aria-haspopup": true,
                        "aria-expanded": false
                    })
                    .on("click", () => !this.disabled && this.dropdown.onTriggerClick())
                    .on("blur", evt => this.dropdown.triggerBlurHandler(evt));
            }

            // Set the trigger to the parent component
            this.dropdown.setDropdownTrigger(this.$element[0], this);
        });
    }

    $onDestroy () {
        this.$element.off("click");
        this.$element.off("blur");
        this.$element.off("keydown");
    }

    afterOpen () {
        this.$element.attr("aria-expanded", true);
        this.$element[0].focus();
        this.$element.on("keydown", evt => this.dropdown.triggerKeyHandler(evt));
    }

    afterClose () {
        this.$element.attr("aria-expanded", false);
        this.$element.off("keydown");
    }
}
