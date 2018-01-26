import { getAttribute, hasAttribute } from "@oui-angular/common/component-utils";

const CONTROLS_SELECTORS = [
    "input",
    "select",
    "textarea"
];

const ERROR_CLASSES = {
    input: "oui-input_error",
    select: "oui-select_error",
    textarea: "oui-textarea_error"
};

const VALIDATION_PARAMETERS = {
    min: ["min", "ng-min"],
    max: ["max", "ng-max"],
    minlength: ["minlength", "ng-minlength"],
    maxlength: ["maxlength", "ng-maxlength"]
};

export default class FieldController {
    constructor ($element, $scope, $timeout, ouiFieldConfiguration) {
        "ngInject";

        this.$element = $element;
        this.$scope = $scope;
        this.$timeout = $timeout;
        this.ouiFieldConfiguration = ouiFieldConfiguration;
    }

    $postLink () {
        let i = 0;
        while (!this.control && i < CONTROLS_SELECTORS.length) {
            this.control = this.$element[0].querySelector(CONTROLS_SELECTORS[i]);
            ++i;
        }

        if (!this.control) {
            throw new Error("oui-field component requires a form control.");
        }

        this.$control = angular.element(this.control);

        // Since digest is already done and DOM is not written,
        // we need to wait for next digest to get `name` and `id` attribute.
        this.$timeout(() => {
            // If name does not exists on component,
            // it will takes the name of first transcluded form control.
            // TODO: support multiple components.
            if (!this.name) {
                this.name = this.$control.attr("name");
                if (!this.name) {
                    throw new Error("oui-field component requires a form control with a name.");
                }
            }

            // The id is taken from the first control found
            // to create the `for` attribute on the label.
            // If the control is a checkbox or a radio, we skip this part
            // because we don't want to link the field label to the first checkbox/radio.
            const id = this.$control.attr("id");
            if (id && ["checkbox", "radio"].indexOf(this.$control.attr("type")) < 0) {
                this.for = id;
            }

            // Get validation parameters to customise error messges
            this.validationParameters = FieldController.getValidationParameters(this.control);
        });

        angular.element(this.control).on("blur", () => {
            if (this.form[this.name].$invalid) {
                angular.element(this.control).addClass(this.getErrorClass());
                this.$element.addClass("oui-field_error");
            }
        });

        angular.element(this.control).on("focus", () => {
            this.form[this.name].$touched = false;
            this.$scope.$apply();
            angular.element(this.control).removeClass(this.getErrorClass());
            this.$element.removeClass("oui-field_error");
        });
    }

    $destroy () {
        angular.element(this.control).off("blur");
        angular.element(this.control).off("focus");
    }

    getErrorClass () {
        const tagName = this.control.tagName.toLowerCase();
        return ERROR_CLASSES[tagName];
    }

    getErrorMessage (errorName) {
        const message = this.ouiFieldConfiguration.translations.errors[errorName];
        return message.replace(`{{${errorName}}}`, this.validationParameters[errorName]);
    }

    static getValidationParameters (controlElement) {
        const validationParameters = {};
        Object.keys(VALIDATION_PARAMETERS).forEach(validationName => {
            const attributes = VALIDATION_PARAMETERS[validationName];
            attributes.forEach(attributeName => {
                if (hasAttribute(controlElement, attributeName)) {
                    validationParameters[validationName] = getAttribute(controlElement, attributeName);
                }
            });
        });
        return validationParameters;
    }
}
