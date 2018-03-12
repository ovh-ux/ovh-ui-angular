import { addBooleanParameter } from "@oui-angular/common/component-utils";

const componentClass = "oui-search";

// Min length needed to create a new criterion.
const minLengthTrigger = 2;

export default class SearchController {
    constructor ($attrs, $element, $timeout) {
        "ngInject";

        this.$attrs = $attrs;
        this.$element = $element;
        this.$timeout = $timeout;
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

    onSearchChange () {
        const modelValue = this.model;

        this.onChange({ modelValue });

        if (this.criteriaContainer) {
            if (modelValue.length >= minLengthTrigger) {
                this.criteriaContainer.setPreviewCriterion(SearchController.getCriterion(modelValue), true);
            } else {
                this.criteriaContainer.deletePreviewCriterion();
            }
        }
    }

    onSearchSubmit (modelValue) {
        this.model = undefined;

        this.onSubmit({ modelValue });

        if (this.criteriaContainer && modelValue.length >= minLengthTrigger) {
            this.criteriaContainer.add(SearchController.getCriterion(modelValue));
        }
    }

    onSearchReset () {
        // Since type="reset" doesn't reset the model
        this.model = undefined;

        this.onReset();

        if (this.criteriaContainer) {
            this.criteriaContainer.deletePreviewCriterion();
        }
    }

    static getCriterion (modelValue) {
        return {
            property: null, // any property
            operator: "contains",
            value: modelValue
        };
    }
}
