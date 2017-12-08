export default class {
    constructor () {
        this.pageSize = 50;
        this.pageSizes = [
            25, 50, 100, 300 // eslint-disable-line no-magic-numbers
        ];
        this.words = {
            resultsPerPage: "Results per page",
            page: "page",
            of: "of",
            results: "results",
            next: "next",
            previous: "previous"
        };
    }

    /**
     * St the default page size
     * @param {Number} pageSize the default page size
     */
    setPageSize (pageSize) {
        this.pageSize = pageSize;
        return this;
    }

    /**
     * Set the choices of page sizes
     * @param {Array<Number>} pageSizes a list of page sizes
     */
    setPageSizes (pageSizes) {
        this.pageSizes = pageSizes;
        return this;
    }

    /**
     * Set words
     * @param {Object} text map for words
     */
    setWords (words) {
        Object.assign(this.words, words);
        return this;
    }

    $get () {
        return {
            expandButtonTemplate: this.expandButtonTemplate,
            pageSize: this.pageSize,
            pageSizes: this.pageSizes,
            selectorTemplate: this.selectorTemplate,
            words: this.words
        };
    }
}
