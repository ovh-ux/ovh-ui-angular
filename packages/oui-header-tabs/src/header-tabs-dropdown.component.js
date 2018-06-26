import template from "./header-tabs-dropdown.html";

const itemClass = "oui-header-tabs__item";
const dropDownClass = `${itemClass}_dropdown`;

export default {
    bindings: {
        text: "@"
    },
    controller: class {
        constructor ($element, $scope, $timeout) {
            "ngInject";

            this.$element = $element;
            this.$scope = $scope;
            this.$timeout = $timeout;
        }

        $postLink () {
            this.$timeout(() => {
                this.$element
                    .addClass(`${itemClass} ${dropDownClass}`)
                    .attr("role", "listitem");

                this.$scope.$watch(() => !!this.$element[0].querySelector(`.${itemClass}_active`), hasActive => {
                    if (hasActive) {
                        this.$element.addClass(`${dropDownClass}_active`);
                    } else {
                        this.$element.removeClass(`${dropDownClass}_active`);
                    }
                });
            });
        }
    },
    template,
    transclude: true
};
