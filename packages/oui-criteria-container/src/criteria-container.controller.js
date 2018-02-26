export default class CriteriaController {
    $onInit () {
        if (!this.criteria) {
            this.criteria = [];
        }
    }

    triggerChange () {
        this.onChange({ modelValue: this.criteria });
    }

    indexOfCriterion (criterion) {
        let criterionIndex = this.criteria.length - 1;
        while (criterionIndex >= 0 && !angular.equals(this.criteria[criterionIndex], criterion)) {
            --criterionIndex;
        }
        return criterionIndex;
    }

    add (criterion) {
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
