import controller from "./datagrid.controller";

export default () => ({
    controller,
    controllerAs: "$ctrl",
    bindToController: true,
    scope: {
        id: "@?",
        columnsDescription: "<?columns",
        columnsParameters: "<?",
        criteria: "<?",
        customizable: "<?",
        pageSize: "@?",
        rows: "<?",
        rowsLoader: "&?",
        rowLoader: "&?",
        emptyPlaceholder: "@?",
        onColumnsParametersChange: "&",
        onRowSelect: "&",
        onPageChange: "&",
        onCriteriaChanged: "&onCriteriaChange",
        onSortChange: "&"
    },
    compile: elm => {
        // Transclude can't be used here otherwise transcluded
        // components would be compiled before we can read it.
        const htmlContent = elm.html();
        elm.empty();

        return (scope, elem, attrs, tableCtrl) => {
            tableCtrl.htmlContent = htmlContent;
        };
    }
})
;
