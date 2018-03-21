export default class StepperController {
    constructor ($element, $timeout) {
        "ngInject";

        this.$element = $element;
        this.$timeout = $timeout;
    }

    $postLink () {
        this.$timeout(() =>
            this.$element.addClass("oui-list_steps oui-list_separated")
        );
    }
}
