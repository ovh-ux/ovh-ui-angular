import { addBooleanParameter } from "@oui-angular/common/component-utils";

export default class {
    constructor ($attrs, ouiFormActions) {
        "ngInject";

        this.$attrs = $attrs;
        this.config = ouiFormActions;
    }

    $onInit () {
        addBooleanParameter(this, "disabled");
        this.processTranslations();
    }

    processTranslations () {
        this.translations = Object.assign({}, this.config.translations);

        if (angular.isUndefined(this.submitText)) {
            this.submitText = this.translations.submit;
        }

        if (angular.isUndefined(this.cancelText)) {
            this.cancelText = this.translations.cancel;
        }
    }
}
