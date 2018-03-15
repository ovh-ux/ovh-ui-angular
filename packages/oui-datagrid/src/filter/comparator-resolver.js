import { endsWith, negate } from "lodash";
import NumberComparators from "./number";
import StringComparators from "./string";

const comparators = {
    number: NumberComparators,
    string: StringComparators
};

export default class ComparatorResolver {
    static resolveComparator (criterion, type) {
        const baseOperator = criterion.operator.replace(/Not$/, "");
        const negated = endsWith(criterion.operator, "Not");
        const comparator = comparators[type] ? comparators[type][baseOperator] : null;
        return comparator && negated ? negate(comparator) : comparator;
    }
}
