import { getAttribute, hasAttributeValue } from "@oui-angular/common/component-utils";

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

    $onInit () {
        this.controlElements = [];
        this.controls = {};
        this.ids = [];
        this.validationParameters = {};
    }

    $postLink () {
        // Since digest is already done and DOM is not written,
        // we need to wait for next digest to get `name` and `id` attribute.
        this.$timeout(() => {
            // Get all controls in the field.
            this.controls = this.getAllControls();

            if (!this.controlElements.length) {
                throw new Error("oui-field component requires at least one form control.");
            }

            if (!Object.keys(this.controls).length) {
                throw new Error("oui-field component requires a form control with a name.");
            }

            // The id is taken from the first control found
            // to create the `for` attribute on the label.
            // If the control is a checkbox or a radio, we skip this part
            // because we don't want to link the field label to the first checkbox/radio.
            if (this.ids.length === 1 && this.controlElements.length === 1) {
                this.for = this.ids[0];
            }

            // Get validation parameters to customize error messges
            // this.validationParameters = FieldController.getValidationParameters(this.control);

            Object.keys(this.controls).forEach(name => {
                const namedControls = this.controls[name];

                // TODO: Skip radio for now (there is no validation for them)
                if (namedControls.length > 1) {
                    return;
                }

                // Manage the way the error are shown on the field.
                namedControls.forEach(control => {
                    angular.element(control).on("blur", () => {
                        if (this.form[name].$invalid) {
                            angular.element(control).addClass(FieldController.getErrorClass(control));
                            this.$element.addClass("oui-field_error");
                        }
                    });

                    angular.element(control).on("focus", () => {
                        this.form[name].$touched = false;
                        this.$scope.$apply();
                        angular.element(control).removeClass(FieldController.getErrorClass(control));
                        this.$element.removeClass("oui-field_error");
                    });
                });

                // Retrieve all validation parameters by field name.
                this.validationParameters[name] = FieldController.getValidationParameters(this.controls[name][0]);
            });
        });
    }

    $destroy () {
        Object.keys(this.controls).forEach(name => {
            const namedControls = this.controls[name];
            namedControls.forEach(control => {
                angular.element(control).off("blur");
                angular.element(control).off("focus");
            });
        });
    }

    isErrorVisible () {
        // this.form can be null during form initialization.
        if (!this.form) {
            return false;
        }

        const names = Object.keys(this.controls);
        for (let i = 0; i < names.length; ++i) {
            if (this.form[names[i]].$invalid && this.form[names[i]].$touched) {
                return true;
            }
        }

        return false;
    }

    getFirstError () {
        const names = Object.keys(this.controls);
        for (let i = 0; i < names.length; ++i) {
            if (this.form[names[i]].$invalid) {
                return this.form[names[i]].$error;
            }
        }

        return null;
    }

    getErrorMessage (errorName) {
        const message = this.ouiFieldConfiguration.translations.errors[errorName];
        return message.replace(`{{${errorName}}}`, this.validationParameters[errorName]);
    }

    getAllControls () {
        const controlsSelector = CONTROLS_SELECTORS.join(",");
        this.controlElements = Array.from(this.$element[0].querySelectorAll(controlsSelector));
        return this.controlElements

            // Exclude all controls that have no defined name attribute.
            .filter(control => hasAttributeValue(control, "name"))
            .map(control => {
                // Get all ids available on controls
                if (hasAttributeValue(control, "id")) {
                    this.ids.push(getAttribute(control, "id"));
                }

                return getAttribute(control, "name");
            })
            .reduce((controls, name) => {
                controls[name] = Array.from(this.$element[0].querySelectorAll(`[name="${name}"]`));
                return controls;
            }, {});
    }

    static getErrorClass (controlElement) {
        const tagName = controlElement.tagName.toLowerCase();
        return ERROR_CLASSES[tagName];
    }

    static getValidationParameters (controlElement) {
        const validationParameters = {};
        Object.keys(VALIDATION_PARAMETERS).forEach(validationName => {
            const attributes = VALIDATION_PARAMETERS[validationName];
            attributes.forEach(attributeName => {
                if (hasAttributeValue(controlElement, attributeName)) {
                    validationParameters[validationName] = getAttribute(controlElement, attributeName);
                }
            });
        });
        return validationParameters;
    }
}
