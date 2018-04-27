import { addBooleanParameter, addDefaultParameter } from "@oui-angular/common/component-utils";
import { get } from "lodash";

export default class SelectPickerController {
    constructor ($scope, $element, $attrs, $timeout, $transclude) {
        "ngInject";

        this.$scope = $scope;
        this.$element = $element;
        this.$attrs = $attrs;
        this.$timeout = $timeout;
        this.$transclude = $transclude;

        this.$scope.getItemValue = (item, path) => get(item, path, "");
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
        addBooleanParameter(this, "required");
        addDefaultParameter(this, "id", `ouiSelectPicker${this.$scope.$id}`);

        if (this.picture) {
            this.isImgPath = /\.(gif|png|jpg)$/.test(this.picture);
        }

        if (this.values && this.values.length === 1) {
            this.selectedValue = this.values[0];
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
        if (this.values && this.values.length > 1 && !this.selectedValue) {
            const $button = angular.element(this.$element[0].querySelectorAll(".ui-select-match"));
            const isButtonClicked = SelectPickerController.hasParentButton(event.target);
            if (!isButtonClicked && $button.length > 0) {
                $button.triggerHandler("click");
                event.stopPropagation();
            }
        }
    }

    onSelectModelChange (event) {
        this.model = event.modelValue;
        this.onRadioModelChange(event);
    }

    onRadioModelChange (event) {
        if (this.onChange) {
            this.$timeout(() => this.onChange(event));
        }
    }

    static hasParentButton (element) {
        let currentNode = element;
        do {
            if (currentNode.nodeName === "BUTTON") {
                return true;
            }
            currentNode = currentNode.parentNode;
        } while (currentNode.nodeName !== "OUI-SELECT-PICKER");
        return false;
    }
}
