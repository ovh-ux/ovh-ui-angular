import { addBooleanParameter } from "@oui-angular/common/component-utils";
import debounce from "lodash/debounce";

const componentClass = "oui-search";

// Min length needed to create a new criterion.
const minLengthTrigger = 2;

// Minimum delay before each criterion change.
const criterionDebounceDelay = 800;

const escKeyCode = 27;

export default class SearchController {
    constructor ($attrs, $element, $timeout) {
        "ngInject";

        this.$attrs = $attrs;
        this.$element = $element;
        this.$timeout = $timeout;

        this.onCriterionChange = debounce(this.onCriterionChange.bind(this), criterionDebounceDelay);
        this.onCriterionSubmit = debounce(this.onCriterionSubmit.bind(this), criterionDebounceDelay);
        this.onCriterionReset = debounce(this.onCriterionReset.bind(this), criterionDebounceDelay);
    }

    $onInit () {
        // Support presence of attribute 'disabled'
        addBooleanParameter(this, "disabled");
    }

    $postLink () {
        // Sometimes the digest cycle is done before dom manipulation,
        // So we use $timeout to force the $apply
        this.$timeout(() =>
            this.$element
                .removeAttr("aria-label")
                .removeAttr("id")
                .removeAttr("name")
                .addClass(componentClass)
        );
    }

    onKeyDown (event) {
        if (event.keyCode === escKeyCode) {
            this.onSearchReset();
        }
    }

    $destroy () {
        this.$input.off("keypress");
    }

    onSearchChange () {
        const modelValue = this.model;

        this.onChange({ modelValue });

        this.onCriterionChange();
    }

    onCriterionChange () {
        const modelValue = this.model;

        if (this.criteriaContainer) {
            if (modelValue && modelValue.length >= minLengthTrigger) {
                this.criteriaContainer.setPreviewCriterion(SearchController.getCriterion(modelValue), true);
            } else {
                this.criteriaContainer.deletePreviewCriterion();
            }
        }
    }

    onSearchSubmit (modelValue) {
        this.model = undefined;

        this.onSubmit({ modelValue });

        this.onCriterionSubmit(modelValue);
    }

    onCriterionSubmit (modelValue) {
        if (this.criteriaContainer && modelValue && modelValue.length >= minLengthTrigger) {
            this.criteriaContainer.add(SearchController.getCriterion(modelValue));
        }
    }

    onSearchReset () {
        // Since type="reset" doesn't reset the model
        this.model = undefined;

        this.onReset();

        this.onCriterionReset();
    }

    onCriterionReset () {
        if (this.criteriaContainer) {
            this.criteriaContainer.deletePreviewCriterion();
        }
    }

    static getCriterion (modelValue) {
        return {
            title: modelValue,
            property: null, // any property
            operator: "contains",
            value: modelValue
        };
    }
}
