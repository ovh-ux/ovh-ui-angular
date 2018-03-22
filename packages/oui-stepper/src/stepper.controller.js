const rootClass = "oui-list_steps oui-list_separated";

export default class {
    constructor ($element, $timeout) {
        "ngInject";

        this.$element = $element;
        this.$timeout = $timeout;
    }

    $onInit () {
        this.onInit();
    }

    $postLink () {
        this.$timeout(() =>
            this.$element
                .removeAttr("id")
                .removeAttr("name")
                .addClass(rootClass)
        );
    }
}
