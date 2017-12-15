export default class DatagridColumnBuilder {
    constructor ($parse, $compile) {
        "ngInject";

        this.$parse = $parse;
        this.$compile = $compile;
    }

    build (columnElements) {
        const columns = [];
        const currentSorting = {
            columnName: undefined,
            dir: 0
        };

        angular.forEach(columnElements, columnElement => {
            const column = {};

            angular.forEach(columnElement.attributes, attr => {
                const attrName = attr.name;

                switch (attrName) {
                case "property":
                    column.name = attr.value;
                    column.getValue = this.$parse(attr.value);
                    break;

                case "sortable":
                    column.sortable = attr.value !== undefined;
                    Object.assign(currentSorting, DatagridColumnBuilder.defineDefaultSorting(column, attr.value));
                    break;

                default:
                    column[attrName] = attr.value;
                }
            });

            if (!column.sortProperty) {
                column.sortProperty = column.name;
            }

            if (!column.template && columnElement.innerHTML) {
                column.template = columnElement.innerHTML;
            }

            if (column.template) {
                column.compiledTemplate = this._getColumnTemplate(column);
            }

            columns.push(column);
        });

        return {
            columns,
            currentSorting
        };
    }

    buildActionColumn (actionColumnElement) {
        const column = {
            template: actionColumnElement.outerHTML
        };
        column.compiledTemplate = this._getColumnTemplate(column);
        return column;
    }

    static defineDefaultSorting (column, attrValue) {
        column.sortable = attrValue !== undefined;

        if (attrValue.length) {
            column.defaultSortDir = attrValue === "asc" ? 1 : -1;
            return {
                columnName: column.name,
                dir: column.defaultSortDir
            };
        }

        return {};
    }

    _getColumnTemplate (column) {
        if (!column.compiledTemplate) {
            column.compiledTemplate = this.$compile(`<div>${column.template}</div>`);
        }
        return column.compiledTemplate;
    }
}
