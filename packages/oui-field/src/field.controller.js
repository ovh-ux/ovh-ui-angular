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
    constructor ($element, $scope) {
        "ngInject";

        this.$element = $element;
        this.$scope = $scope;
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
        this.name = this.$control.attr("name");

        if (!this.name) {
            throw new Error("oui-field component requires a form control with a name.");
        }

        const id = this.$control.attr("id");
        if (id) {
            this.for = id;
        }

        angular.element(this.control).on("blur", () => {
            if (this.hasError()) {
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
