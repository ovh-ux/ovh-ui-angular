export default class {
    constructor ($attrs, $element) {
        "ngInject";

        this.$attrs = $attrs;
        this.$element = $element;
    }

    $onInit () {
        this.align = this.align || "left";
        this.size = this.size || "m";

        // Support presence of attribute 'inline'
        if (angular.isDefined(this.$attrs.inline) && angular.isUndefined(this.inline)) {
            this.inline = true;
        }
    }

    $postLink () {
        // Add Classnames on root element
        this.$element.addClass(`oui-spinner oui-spinner_${this.align} oui-spinner_${this.size}`);

        if (this.inline) {
            this.$element.addClass("oui-spinner_inline");
        }
    }
}
