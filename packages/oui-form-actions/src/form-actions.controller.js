export default class {
    constructor ($attrs, ouiFormActions) {
        "ngInject";

        this.$attrs = $attrs;
        this.config = ouiFormActions;
    }

    $onInit () {
        // Support presence of attribute 'disabled'
        if (angular.isDefined(this.$attrs.disabled) && angular.isUndefined(this.disabled)) {
            this.disabled = true;
        }

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
