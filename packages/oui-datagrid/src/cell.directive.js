export default () => {
    "ngInject";

    return {
        controller: () => {
            // do nothing.
        },
        controllerAs: "cellCtrl",
        scope: true,
        bindToController: {
            row: "<",
            column: "<"
        },
        link: ($scope, $elm, $attrs, cellCtrl) => {
            const cellScope = $scope.$new(false);

            $elm[0].style.display = "block";

            $scope.$watch("cellCtrl.row", () => {
                cellScope.$row = cellCtrl.row;
                cellScope.$column = cellCtrl.column;
                cellScope.$value = cellCtrl.row[cellCtrl.column.name];

                if (cellCtrl.column.compiledTemplate) {
                    cellCtrl.column.compiledTemplate(cellScope, clone => {
                        $elm.empty();
                        $elm.append(clone);
                    });
                } else {
                    $elm[0].innerHTML = cellCtrl.row[cellCtrl.column.name];
                }
            }, true);
        }
    };
};
