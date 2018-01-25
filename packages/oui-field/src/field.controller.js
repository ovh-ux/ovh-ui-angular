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

export default class FieldController {
    constructor ($element, $scope, $timeout) {
        "ngInject";

        this.$element = $element;
        this.$scope = $scope;
        this.$timeout = $timeout;
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
}
