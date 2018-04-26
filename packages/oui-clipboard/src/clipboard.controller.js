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

    $postLink () {
        addDefaultParameter(this, "translations", this.ouiClipboardConfiguration.translations);
        addDefaultParameter(this, "status", this.ouiClipboardConfiguration.status.initial);
        addDefaultParameter(this, "tooltipText", this.ouiClipboardConfiguration.translations.copy_to_clipboard_label);
    }

    onTextFocus ($event) {
        $event.target.select();
        this.copyText();
    }

    copyText () {
        let succeeded = true;

        try {
            document.execCommand(this.ouiClipboardConfiguration.action.copy);
        } catch (err) {
            console.log(err);
            this.error = err;
            succeeded = false;
        }

        this.handleResult(succeeded);
        this.$timeout(() => this.reset(), switchBackDelay);
    }

    handleResult (succeeded) {
        if (succeeded) {
            this.status = this.ouiClipboardConfiguration.status.success;
            this.tooltipText = this.translations.copied_label;
        } else {
            this.reset();
        }
    }

    reset () {
        this.tooltipText = this.translations.copy_to_clipboard_label;
        this.status = this.ouiClipboardConfiguration.status.initial;
    }
}
