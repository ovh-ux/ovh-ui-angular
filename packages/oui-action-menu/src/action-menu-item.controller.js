import { addBooleanParameter } from "@oui-angular/common/component-utils";
import buttomTemplate from "./action-menu-item-button.html";
import linkTemplate from "./action-menu-item-link.html";

export default class {
    constructor ($attrs, $compile, $element, $scope, $timeout) {
        "ngInject";

        this.$attrs = $attrs;
        this.$compile = $compile;
        this.$element = $element;
        this.$scope = $scope;
        this.$timeout = $timeout;
    }

    $onInit () {
        addBooleanParameter(this, "external");
        addBooleanParameter(this, "disabled");

        if (this.external) {
            this.linkTarget = "_blank";
            this.linkRel = "noopener";
        }
    }

    $postLink () {
        let compiled;

        // Sometimes the digest cycle is done before dom manipulation,
        // So we use $timeout to force the $apply
        this.$timeout(() =>
            this.$element.removeAttr("aria-label")
        );

        if (this.$attrs.onClick) {
            compiled = this.$compile(buttomTemplate);
        } else {
            compiled = this.$compile(linkTemplate);
        }

        this.$element.empty();
        this.$element.append(compiled(this.$scope));
    }
}
