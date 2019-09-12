import { addBooleanParameter, addDefaultParameter } from "@ovh-ui/common/component-utils";

export default class {
    /* @ngInject */
    constructor ($attrs, $element, $filter, $scope, $timeout, ouiDualListConfiguration) {
        this.$attrs = $attrs;
        this.$element = $element;
        this.$filter = $filter;
        this.$timeout = $timeout;
        this.$scope = $scope;
        this.translations = ouiDualListConfiguration.translations.target;
    }

    $onInit () {
        addDefaultParameter(this, "heading", this.translations.heading);
        addDefaultParameter(this, "placeholder", this.translations.placeholder);
        addBooleanParameter(this, "loading");
        addBooleanParameter(this, "searchable");

        this.id = `ouiDualListTarget${this.$scope.id}`;
        this.expanded = false;
    }

    $postLink () {
        this.$timeout(() =>
            this.$element.addClass("oui-dual-list-target")
        );
    }

    isLoading () {
        return this.loading || angular.isUndefined(this.dualList.target);
    }

    toggle () {
        this.expanded = !this.expanded;
    }
}
