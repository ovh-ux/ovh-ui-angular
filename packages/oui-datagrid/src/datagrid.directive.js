import controller from "./datagrid.controller";

export default () => {
    "ngInject";

    return {
        controller,
        controllerAs: "$ctrl",
        bindToController: true,
        scope: {
            id: "@?",
            columnsDescription: "<?columns",
            columnsParameters: "<?",
            customizable: "<?",
            pageSize: "@?",
            rows: "<?",
            rowsLoader: "&?",
            rowLoader: "&?",
            onColumnsParametersChange: "&"
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
    };
};
