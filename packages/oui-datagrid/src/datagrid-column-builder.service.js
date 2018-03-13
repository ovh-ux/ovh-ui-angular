import { getAttribute, hasAttribute } from "@oui-angular/common/component-utils";

const copyValueProperties = ["title", "type"];
const searchableTypes = ["string"];
const filterableTypes = [
    "string",
    "number"
];

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

            if (hasAttribute(columnElement, "property")) {
                const propertyValue = getAttribute(columnElement, "property");

                column.name = propertyValue;
                column.getValue = this.$parse(propertyValue);

                // A column can be sorted only if it has a "property" attribute.
                if (hasAttribute(columnElement, "sortable")) {
                    const sortableValue = getAttribute(columnElement, "sortable");
                    column.sortable = sortableValue !== undefined;
                    Object.assign(currentSorting, DatagridColumnBuilder.defineDefaultSorting(column, sortableValue));
                }
            }

            copyValueProperties.forEach(propertyName => {
                if (hasAttribute(columnElement, propertyName)) {
                    column[propertyName] = getAttribute(columnElement, propertyName);
                }
            });

            column.filterable = DatagridColumnBuilder.isFilterable(column) &&
                hasAttribute(columnElement, "filterable");
            column.searchable = DatagridColumnBuilder.isSearchable(column) &&
                hasAttribute(columnElement, "searchable");

            if (hasAttribute(columnElement, "title")) {
                const titleValue = getAttribute(columnElement, "title");

                column.title = this.buildTitle(titleValue, $scope);
                column.rawTitle = titleValue;
            }

            if (!column.sortProperty) {
                column.sortProperty = column.name;
            }

            const htmlTemplate = columnElement.innerHTML.trim();
            if (!column.template && htmlTemplate.length) {
                column.template = htmlTemplate;
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

    buildTitle (titleValue, $scope) {
        return this.$parse(titleValue)($scope);
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

    static isSearchable (column) {
        return searchableTypes.indexOf(column.type) > -1;
    }

    static isFilterable (column) {
        return filterableTypes.indexOf(column.type) > -1;
    }

    _getColumnTemplate (column) {
        if (!column.compiledTemplate) {
            column.compiledTemplate = this.$compile(`<div>${column.template}</div>`);
        }
        return column.compiledTemplate;
    }
}
