import controller from "./table.controller";
import template from "./table.html";

export default $compile => {
    "ngInject";

    return {
        controller,
        controllerAs: "tableCtrl",
        scope: true,
        bindToController: {
            id: "@?",
            pageSize: "@",
            rows: "<",
            rowsLoader: "&",
            rowLoader: "&",
            onSelectionChange: "&",
            onRowClick: "&",
            rowLabel: "@"
        },
        compile: () => ({
            post: (scope, elem, attrs, tableCtrl) => {
                const columnElements = elem.find("column");
                tableCtrl.buildColumns(columnElements);

                // Once columns has been processed,
                // we can proceed with the first loading
                tableCtrl.init();

                const paginationElement = elem.find("pagination");
                if (paginationElement.length) {
                    tableCtrl.setPaginationTemplate(paginationElement.html());
                }

                const emptyPlaceholderElement = elem.find("empty-placeholder");
                if (emptyPlaceholderElement) {
                    elem.empty();
                }

                scope.$watchCollection("tableCtrl.rows", newValue => {
                    elem.empty();
                    if (newValue && !newValue.length && emptyPlaceholderElement.length) {
                        elem.append($compile(`
                <div ng-class="tableCtrl.css.emptyTable">${emptyPlaceholderElement.html()}</div>
              `)(scope));
                    } else {
                        elem.append($compile(template)(scope));
                    }
                });
            }
        })
    };
};
