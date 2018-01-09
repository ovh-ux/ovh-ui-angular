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

            if (DatagridColumnBuilder.hasAttribute(columnElement, "property")) {
                const propertyValue = DatagridColumnBuilder.getAttribute(columnElement, "property");

                column.name = propertyValue;
                column.getValue = this.$parse(propertyValue);
            }

            if (DatagridColumnBuilder.hasAttribute(columnElement, "sortable")) {
                const sortableValue = DatagridColumnBuilder.getAttribute(columnElement, "sortable");

                column.sortable = sortableValue !== undefined;
                Object.assign(currentSorting, DatagridColumnBuilder.defineDefaultSorting(column, sortableValue));
            }

            copyValueProperties.forEach(propertyName => {
                if (DatagridColumnBuilder.hasAttribute(columnElement, propertyName)) {
                    column[propertyName] = DatagridColumnBuilder.getAttribute(columnElement, propertyName);
                }
            });

            if (DatagridColumnBuilder.hasAttribute(columnElement, "title")) {
                const titleValue = DatagridColumnBuilder.getAttribute(columnElement, "title");

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

    static hasAttribute (element, attributeName) {
        const attributes = [];
        Array.from(element.attributes).forEach(attribute => attributes.push(attribute.name));
        Object.keys(element.dataset).forEach(dataKey => attributes.push(dataKey));
        return attributes.indexOf(attributeName) > -1;
    }

    static getAttribute (element, attributeName) {
        return element.attributes[attributeName] ? element.attributes[attributeName].value : element.dataset[attributeName];
    }

    _getColumnTemplate (column) {
        if (!column.compiledTemplate) {
            column.compiledTemplate = this.$compile(`<div>${column.template}</div>`);
        }
        return column.compiledTemplate;
    }
}
