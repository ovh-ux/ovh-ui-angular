import { addBooleanParameter } from "@oui-angular/common/component-utils";

const rootClass = "oui-textarea";
const focusClass = "oui-textarea_active";

export default class {
    constructor ($attrs, $element, $timeout, ouiTextareaConfiguration) {
        "ngInject";

        this.$attrs = $attrs;
        this.$element = $element;
        this.$timeout = $timeout;
        this.ouiTextareaConfiguration = ouiTextareaConfiguration;
    }

    $onInit () {
        addBooleanParameter(this, "disabled");
        addBooleanParameter(this, "required");
        addBooleanParameter(this, "readonly");

        this.$timeout(() => {
            this.$element
                .removeAttr("id")
                .removeAttr("name");
        });
    }

    $postLink () {
        this.$root = angular.element(this.$element[0].querySelector(`.${rootClass}`));
    }

    getMaxLengthText () {
        const translation = this.ouiTextareaConfiguration.translations.lengthCounter;
        return translation
            .replace("{{length}}", this.model ? this.model.length : 0)
            .replace("{{max}}", this.maxlength);
    }

    setFocus (focused) {
        this.$root.toggleClass(focusClass, focused);
    }
}
