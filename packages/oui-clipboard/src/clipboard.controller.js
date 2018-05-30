const switchBackDelay = 2000;
export default class {
    constructor ($attrs, $element, $timeout, ouiClipboardConfiguration) {
        "ngInject";
        this.$attrs = $attrs;
        this.$element = $element;
        this.$timeout = $timeout;
        this.translations = angular.copy(ouiClipboardConfiguration.translations);
    }

    $onInit () {
        this.tooltipText = this.translations.copyToClipboardLabel;
    }

    $postLink () {
        // Sometimes the digest cycle is done before dom manipulation,
        // So we use $timeout to force the $apply
        this.$timeout(() =>
            this.$element
                .addClass("oui-input-group")
                .addClass("oui-input-group_clipboard")
                .removeAttr("id")
                .removeAttr("name")
        );
    }

    onClick () {
        this.$timeout(() => {
            this.$element.find("input")[0].select();
            this.copyText();
        });
    }

    copyText () {
        try {
            document.execCommand("copy");
            this.tooltipText = this.translations.copiedLabel;
            this.$timeout(() => this.reset(), switchBackDelay);
        } catch (err) {
            this.error = err;
            throw new Error("Could not copy text to clipboard.");
        }
    }

    reset () {
        this.tooltipText = this.translations.copyToClipboardLabel;
    }
}
