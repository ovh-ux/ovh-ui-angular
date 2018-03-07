import { addBooleanParameter } from "@oui-angular/common/component-utils";

const UI_SELECT_SELECTOR = ".oui-ui-select-container";
const UI_SELECT_DROPDOWN_TRIGGER = ".oui-button_dropdown";

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
        addBooleanParameter(this, "required");
    }

    $postLink () {
        this.$compile(this.htmlContent)(this.$scope, (clone) => {
            this.$element.append(clone);
        });

        this.$timeout(() => {
            this.$element.removeAttr("name");

            this.uiSelectElement = this.$element[0].querySelector(UI_SELECT_SELECTOR);
            this.uiSelectDropdownTrigger = this.$element[0].querySelector(UI_SELECT_DROPDOWN_TRIGGER);

            this.unregisterFocus = this.$scope.$on("oui:focus", () => {
                this.uiSelectDropdownTrigger.focus();
            });
        });
    }

    $destroy () {
        if (this.unregisterFocus) {
            this.unregisterFocus();
        }
    }

    onUiSelectBlur () {
        if (this.fieldCtrl) {
            this.fieldCtrl.showErrors(this.uiSelectElement, this.name);
        }

        this.onBlur();
    }

    onUiSelectFocus () {
        if (this.fieldCtrl) {
            this.fieldCtrl.hideErrors(this.uiSelectElement, this.name);
        }

        this.onFocus();
    }
}
