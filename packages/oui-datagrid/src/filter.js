import escapeStringRegexp from "escape-string-regexp";
import { get } from "lodash";

export default class Filter {
    constructor (criteria, columns) {
        this.criteria = criteria;
        this.columns = columns;
        this.searchableColumns = this._getSearchableColumns();
    }

    /**
     * Apply all filter criteria on a collection.
     *
     * @param  {Array}   collection input array
     * @return {Array}              output array
     */
    applyFilter (collection) {
        let filtered = collection;
        this.criteria.forEach(criterion => {
            filtered = this.applyCriteria(filtered, criterion);
        });
        return filtered;
    }

    /**
     * Apply a criterion on a collection.
     *
     * @param  {Array}   collection input array
     * @param  {Object}  criterion  a criterion object
     * @return {Array}              output array
     */
    applyCriteria (collection, criterion) {
        // Text search
        if (criterion.property === null && criterion.operator === "contains") {
            return collection.filter(item => this.itemContainsText(item, criterion.value));
        }

        // Ignore other criteria type.
        return collection;
    }

    /**
     * Find a text in a string.
     *
     * @param  {Object} item [description]
     * @param  {String} text [description]
     * @return {Boolean}     true if text has been found in item
     */
    itemContainsText (item, text) {
        return this.searchableColumns
            .reduce((aggregator, name) => {
                const value = get(item, name);
                return aggregator || Filter.contains(value, text);
            }, false);
    }

    _getSearchableColumns () {
        return this.columns
            .filter(column => column.searchable)
            .map(column => column.name);
    }

    static contains (haystack, needle) {
        const escapedNeedle = escapeStringRegexp(needle);
        const pattern = new RegExp(escapedNeedle, "i");
        return pattern.test(haystack);
    }
}
