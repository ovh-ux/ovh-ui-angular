import { addDefaultParameter } from "@oui-angular/common/component-utils";

const switchBackDelay = 2000;
export default class {
    constructor ($attrs, $scope, $element, $timeout, ouiClipboardConfiguration) {
        "ngInject";
        this.$attrs = $attrs;
        this.$element = $element;
        this.$timeout = $timeout;
        this.$scope = $scope;
        this.ouiClipboardConfiguration = ouiClipboardConfiguration;
    }

    $onInit () {
        addDefaultParameter(this, "translations", this.ouiClipboardConfiguration.translations);
        addDefaultParameter(this, "status", this.ouiClipboardConfiguration.status.initial);
        addDefaultParameter(this, "tooltipText", this.ouiClipboardConfiguration.translations.copyToClipboardLabel);
    }

    onClick () {
        this.$element.find("input")[0].select();
        this.copyText();
    }

    copyText () {
        let succeeded = true;

        try {
            document.execCommand(this.ouiClipboardConfiguration.action.copy);
        } catch (err) {
            this.error = err;
            succeeded = false;
            throw new Error("Could not copy text to clipboard.");
        }

        this.handleResult(succeeded);
        this.$timeout(() => this.reset(), switchBackDelay);
    }

    handleResult (succeeded) {
        if (succeeded) {
            this.status = this.ouiClipboardConfiguration.status.success;
            this.tooltipText = this.translations.copiedLabel;
        } else {
            this.reset();
        }
    }

    reset () {
        this.tooltipText = this.translations.copyToClipboardLabel;
        this.status = this.ouiClipboardConfiguration.status.initial;
    }
}
