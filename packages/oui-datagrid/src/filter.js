import { find, get } from "lodash";
import escapeStringRegexp from "escape-string-regexp";

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

        const propertyMeta = find(this.columns, ["name", criterion.property]);

        // Criterion property can't be null if operator is not "contains".
        if (!criterion.property || !propertyMeta || criterion.value === undefined) {
            return collection;
        }

        switch (criterion.operator) {
        case "contains":
            return collection.filter(item => {
                const value = get(item, criterion.property);
                return Filter.contains(value, criterion.value);
            });

        default:
            return collection;
        }
    }

    /**
     * Find a text in a string.
     *
     * @param  {Object} item subject of search
     * @param  {String} text text to search
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

    /** String - contains */
    static contains (haystack, needle) {
        const escapedNeedle = escapeStringRegexp(needle);
        const pattern = new RegExp(escapedNeedle, "i");
        return pattern.test(haystack);
    }
}
