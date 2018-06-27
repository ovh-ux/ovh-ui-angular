import template from "./header-tabs-dropdown.html";

const itemClass = "oui-header-tabs__item";
const itemActiveClass = `${itemClass}_active`;
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

                this.$scope.$watch(() => !!this.$element[0].querySelector(`.${itemActiveClass}`), hasActive => {
                    if (hasActive) {
                        this.$element.addClass(itemActiveClass);
                    } else {
                        this.$element.removeClass(itemActiveClass);
                    }
                });
            });
        }
    },
    template,
    transclude: true
};
