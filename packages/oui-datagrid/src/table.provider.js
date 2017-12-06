export default class {
    constructor () {
        this.classes = {
            tablePanel: "oui-datagrid-panel",
            table: "oui-datagrid oui-datagrid_responsive",
            thead: "oui-datagrid__headers",
            tbody: "oui-datagrid__body",
            tr: "oui-datagrid__row",
            th: "oui-datagrid__header",
            td: "oui-datagrid__cell",
            sortable: "oui-datagrid__header_sortable",
            sorted: "oui-datagrid__cell_sorted",
            sortableAsc: "oui-datagrid__header_sortable-asc",
            sortableDesc: "oui-datagrid__header_sortable-desc",
            closed: "oui-datagrid__row_closed",
            emptyTable: "oui-datagrid-empty",
            thSelector: "oui-datagrid__header_selector",
            tdSelector: "oui-datagrid__cell_selector"
        };
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
     * Example of list of CSS classes:
     * - table: oui-datagrid
     * - thead: oui-datagrid__headers
     * - tr: oui-datagrid__row
     * - th: oui-datagrid__header
     * - tbody: oui-datagrid__body
     * - td: oui-datagrid__cell
     *
     * Sorting classes
     * - sortable(sortable, sorting not active): oui-datagrid__cell_sortable oui-datagrid__cell_sortable-asc
     * - sorted(sortable, sorting is active): oui-datagrid__cell_sorted
     * - sortableAsc(ascendant sorting is active): oui-datagrid__cell_sortable-asc
     * - sortableDesc(descendant sorting is active): oui-datagrid__cell_sortable-desc
     *
     * Empty placeholder
     * - emptyTable: oui-datagrid-empty
     *
     * Responsive modifiers
     * - closed(open row on phone screens): oui-datagrid__row_closed
     *
     * Selection
     * - thSelector: oui-datagrid__header_selector
     * - tdSelector: oui-datagrid__cell_selector
     */
    setCssConfig (classes) {
        this.classes = classes;
        return this;
    }

    /**
     * Set custom template for row selector.
     * @param {String} selectorTemplate template
     */
    setSelectorTemplate (selectorTemplate) {
        this.selectorTemplate = selectorTemplate;
        return this;
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
            cssClasses: this.classes,
            expandButtonTemplate: this.expandButtonTemplate,
            pageSize: this.pageSize,
            pageSizes: this.pageSizes,
            selectorTemplate: this.selectorTemplate,
            words: this.words
        };
    }
}
