import Clipboard from "clipboard";
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
        this.trigger = this.$element[0].querySelector(".oui-clipboard__button");
        this.target = this.$element[0].querySelector(".oui-clipboard__control");
    }

    $onDestroy () {
        this.clipboard.destroy();
    }

    $postLink () {
        this.$timeout(() => {
            this.$element
                .addClass("oui-input-group")
                .addClass("oui-input-group_clipboard")
                .removeAttr("id")
                .removeAttr("name");
        });

        // Init the clipboard instance
        this.clipboard = new Clipboard(this.trigger, {
            target: () => this.target,
            text: () => this.model
        });

        // Events for updating the tooltip
        this.clipboard
            .on("success", () => this.selectInputText(this.translations.copiedLabel))
            .on("error", () => this.selectInputText(this.translations.notSupported));
    }

    selectInputText (tooltipText) {
        const rangeSelection = 9999;

        this.$timeout(() => {
            // Need to focus before selecting
            this.target.focus();
            this.target.setSelectionRange(0, rangeSelection);
            this.tooltipText = tooltipText;
        });
    }

    onInputClick () {
        this.trigger.click();
    }

    reset () {
        const resetDelay = 500;

        // Add delay for resetting after tooltip animation
        this.$timeout(() => {
            this.tooltipText = this.translations.copyToClipboardLabel;
        }, resetDelay);
    }
}
