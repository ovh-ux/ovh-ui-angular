import findIndex from "lodash/findIndex";

export default class CriteriaController {
    $onInit () {
        this.criteria = [];
    }

    triggerChange () {
        if (this.onChange) {
            this.onChange({ modelValue: this.criteria });
        }
    }

    indexOfCriterion (criterion) {
        let criterionIndex = this.criteria.length - 1;
        while (criterionIndex >= 0 && !angular.equals(this.criteria[criterionIndex], criterion)) {
            --criterionIndex;
        }
        return criterionIndex;
    }

    setPreviewCriterion (previewCriterion) {
        const criterionIndex = findIndex(this.criteria, ["preview", true]);
        previewCriterion.preview = true;
        if (criterionIndex > -1) {
            this.criteria[criterionIndex] = previewCriterion;
        } else {
            this.criteria.push(previewCriterion);
        }
        this.triggerChange();
    }

    deletePreviewCriterion () {
        const previewCriterionIndex = findIndex(this.criteria, ["preview", true]);
        if (previewCriterionIndex > -1) {
            this.criteria.splice(previewCriterionIndex, 1);
            this.triggerChange();
        }
    }

    add (criterion) {
        // Delete same preview criterion if it exists.
        const previewCriterion = angular.copy(criterion);
        previewCriterion.preview = true;

        const previewCriterionIndex = this.indexOfCriterion(previewCriterion);
        if (previewCriterionIndex > -1) {
            this.criteria.splice(previewCriterionIndex, 1);
        }

        // Add the criterion if it does not exist.
        if (this.indexOfCriterion(criterion) < 0) {
            this.criteria.push(criterion);
            this.triggerChange();
        }
    }

    remove (criterion) {
        const criterionIndex = this.indexOfCriterion(criterion);
        if (criterionIndex > -1) {
            this.criteria.splice(criterionIndex, 1);
            this.triggerChange();
        }
    }

    set (criteria) {
        this.criteria = criteria;
        this.triggerChange();
    }

    clear () {
        this.criteria = [];
        this.triggerChange();
    }
}
