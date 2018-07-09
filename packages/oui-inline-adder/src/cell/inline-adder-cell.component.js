import { addDefaultParameter } from "@oui-angular/common/component-utils";

export default {
    bindings: {
        extended: "<?"
    },
    controller: class {
        constructor ($attrs, $element, $timeout) {
            "ngInject";
            this.$attrs = $attrs;
            this.$element = $element;
            this.$timeout = $timeout;
        }

        $onInit () {
            addDefaultParameter(this, "extended", true);
        }

        $postLink () {
            this.$timeout(() => {
                this.$element
                    .addClass("oui-inline-adder__cell");

                if (this.extended) {
                    this.$element.addClass("oui-inline-adder__cell_extended");
                }
            });
        }
    },
    template: "<ng-transclude></ng-transclude>",
    transclude: true
};
