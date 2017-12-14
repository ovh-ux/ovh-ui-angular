import controller from "./datagrid.controller";

export default () => {
    "ngInject";

    return {
        controller,
        controllerAs: "$ctrl",
        bindToController: true,
        scope: {
            pageSize: "@?",
            rows: "<?",
            rowsLoader: "&?",
            rowLoader: "&?"
        },
        compile: elm => {
            // Transclude can't be used here otherwise transcluded
            // components would be compiled before we can read it.
            elm.data("originalContent", elm.html());
            elm.empty();
        }
    };
};
