import Clipboard from "clipboard";

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
            action: "copy",
            target: () => this.target,
            text: () => this.model
        });

        // Events for updating the tooltip
        this.clipboard
            .on("success", () => {
                this.$timeout(() => {
                    this.target.select();
                    this.tooltipText = this.translations.copiedLabel;
                });

                // Reset after a delay
                this.$timeout(() => this.reset(), switchBackDelay);
            })
            .on("error", () => {
                throw new Error("Could not copy text to clipboard.");
            });
    }

    onInputClick () {
        this.trigger.click();
    }

    reset () {
        this.tooltipText = this.translations.copyToClipboardLabel;
    }
}
