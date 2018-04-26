const switchBackDelay = 2000;
export default class {
    constructor ($scope, $element, $timeout, ouiClipboardConfiguration) {
        "ngInject";
        this.$element = $element;
        this.$timeout = $timeout;
        this.$scope = $scope;
        this.ouiClipboardConfiguration = ouiClipboardConfiguration;
        this.translations = ouiClipboardConfiguration.translations;
        this.status = ouiClipboardConfiguration.status.initial;
    }

    $postLink () {
        this.$element.addClass("oui-clipboard");
        this.tooltipText = this.translations.copy_to_clipboard_label;
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
