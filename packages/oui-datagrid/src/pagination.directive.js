export default $compile => {
    "ngInject";

    return {
        controller: () => {
            // do nothing.
        },
        controllerAs: "paginationCtrl",
        scope: true,
        bindToController: {
            template: "<",
            table: "<"
        },
        compile: () => ({
            pre: ($scope, $elm, $attrs, paginationCtrl) => {
                const paginationScope = $scope.$new(false);

                $scope.$watch("paginationCtrl.pageMeta", () => {
                    paginationScope.$table = paginationCtrl.table;

                    $elm.empty();
                    $elm.append($compile(paginationCtrl.template)(paginationScope));
                });
            }
        })
    };
};
