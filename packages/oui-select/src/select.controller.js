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
        const $htmlContent = angular.element(this.htmlContent);
        const matchElement = $htmlContent.find("ui-select-match");

        if (this.match) {
            matchElement.html(`{{$select.selected.${this.match}}}`);
        } else {
            matchElement.html("{{$select.selected}}");
        }

        this.$compile($htmlContent)(this.$scope, (clone) => {
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
            this.fieldCtrl.hasFocus = false;
            this.fieldCtrl.checkControlErrors(this.uiSelectElement, this.name);
        }

        this.onBlur();
    }

    onUiSelectFocus () {
        if (this.fieldCtrl) {
            this.fieldCtrl.hasFocus = true;
            this.fieldCtrl.hideErrors(this.uiSelectElement, this.name);
        }

        this.onFocus();
    }
}
