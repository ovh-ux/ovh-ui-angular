export default class {
    constructor ($element) {
        "ngInject";

        this.$element = $element;
    }

    $onInit () {
        this.size = this.size || "auto";
        this.$element.addClass(`oui-skeleton oui-skeleton_${this.size}`);
    }
}
