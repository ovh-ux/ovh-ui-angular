import { addBooleanParameter } from "@oui-angular/common/component-utils";
import { get } from "lodash";

export default class {
    constructor ($scope, $element, $attrs, $timeout, $transclude) {
        "ngInject";

        this.$scope = $scope;
        this.$element = $element;
        this.$attrs = $attrs;
        this.$timeout = $timeout;
        this.$transclude = $transclude;
    }

    $postLink () {
        // Sometimes the digest cycle is done before dom manipulation,
        // So we use $timeout to force the $apply
        this.$timeout(() => {
            this.$element
                .removeAttr("id")
                .removeAttr("name");

            this.labelElement = this.$element.find("label");
            this.labelElement.on("click", event => this.openSelectMenu(event));
        });
    }

    $onInit () {
        addBooleanParameter(this, "disabled");
        if (!self.id) {
            this.id = `oui-select-picker-${this.$scope.$id}`;
        }

        if (this.picture) {
            this.isImgPath = /\.(gif|png|jpg)$/.test(this.picture);
        }

        this.transcludeSection = this.$transclude.isSlotFilled("sectionSlot");
    }

    $destroy () {
        this.labelElement.off("click");
    }

    getFirstValueMatch (path) {
        return get(this.values[0], path, "");
    }

    openSelectMenu (event) {
        if (this.values.length > 1 && !this.selectedValue) {
            const $target = angular.element(event.target);
            const $button = this.$element.find(".ui-select-match");
            const isButtonClicked = $target[0].nodeName === "BUTTON" || $target.parents("button").length > 0;
            if (!isButtonClicked && $button.length > 0) {
                $button.trigger("click");
                event.stopPropagation();
            }
        }
    }

    onRadioModelChange (event) {
        if (this.onChange) {
            this.$timeout(() => this.onChange(event));
        }
    }
}
