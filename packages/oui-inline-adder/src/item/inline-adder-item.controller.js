import { addDefaultParameter } from "@oui-angular/common/component-utils";
export default class {
    constructor ($attrs, $element, $timeout, ouiInlineAdderProvider) {
        "ngInject";
        this.$attrs = $attrs;
        this.$element = $element;
        this.$timeout = $timeout;
        this.inlineAdderProvider = ouiInlineAdderProvider;
    }

    $onInit () {
        this.loading = false;
        addDefaultParameter(this, "ariaAddItem", this.inlineAdderProvider.translations.ariaAddItem);
        addDefaultParameter(this, "ariaRemoveItem", this.inlineAdderProvider.translations.ariaRemoveItem);
    }

    $postLink () {
        this.$timeout(() =>
            this.$element
                .removeAttr("aria-add-item")
                .removeAttr("aria-remove-item")
        );
    }

    addItem () {
        this.loading = true;
        this.inlineAdderCtrl
            .addItem(this.item)
            .finally(() => {
                this.loading = false;
            });
    }

    removeItem () {
        this.loading = true;
        this.inlineAdderCtrl
            .removeItem(this.item)
            .finally(() => {
                this.loading = false;
            });
    }
}
