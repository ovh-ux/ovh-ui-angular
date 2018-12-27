import { addBooleanParameter } from "@ovh-ui/common/component-utils";
import get from "lodash/get";

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
        addBooleanParameter(this, "searchable");
    }

    $postLink () {
        const $htmlContent = angular.element(this.htmlContent);
        this.$compile($htmlContent)(this.$scope, (clone) => {
            this.$element.append(clone);
        });

        this.$timeout(() => {
            this.$element
                .removeAttr("name")
                .removeAttr("title");

            this.$select.focusser
                .on("blur", () => this.onUiSelectBlur())
                .on("focus", () => this.onUiSelectFocus());
        });

        this.unregisterFocus = this.$scope.$on("oui:focus", () => this.$select.setFocus());
    }

    $destroy () {
        if (this.unregisterFocus) {
            this.unregisterFocus();
        }
    }

    onUiSelectBlur () {
        if (this.fieldCtrl) {
            this.fieldCtrl.hasFocus = false;
            this.fieldCtrl.checkControlErrors(this.$select.$element[0], this.name);
        }

        this.onBlur();
    }

    onUiSelectFocus () {
        if (this.fieldCtrl) {
            this.fieldCtrl.hasFocus = true;
            this.fieldCtrl.hideErrors(this.$select.$element[0], this.name);
        }

        this.onFocus();
    }

    getPropertyValue (item) {
        return get(item, this.match, null);
    }
}
