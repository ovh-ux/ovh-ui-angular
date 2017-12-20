const copyValueProperties = ["title"];

export default class DatagridColumnBuilder {
    constructor ($parse, $compile) {
        "ngInject";

        this.$parse = $parse;
        this.$compile = $compile;
    }

    build (columnElements, $scope) {
        const columns = [];
        const currentSorting = {
            columnName: undefined,
            dir: 0
        };

        angular.forEach(columnElements, columnElement => {
            const column = {};

            if (columnElement.attributes.property) {
                const propertyValue = columnElement.attributes.property.value;

                column.name = propertyValue;
                column.getValue = this.$parse(propertyValue);
            }

            if (columnElement.attributes.sortable) {
                const sortableValue = columnElement.attributes.sortable.value;

                column.sortable = sortableValue !== undefined;
                Object.assign(currentSorting, DatagridColumnBuilder.defineDefaultSorting(column, sortableValue));
            }

            copyValueProperties.forEach(propertyName => {
                if (columnElement.attributes[propertyName]) {
                    column[propertyName] = columnElement.attributes[propertyName].value;
                }
            });

            if (columnElement.attributes.title) {
                const titleValue = columnElement.attributes.title.value;

                column.title = this.$parse(titleValue)($scope);
            }

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
