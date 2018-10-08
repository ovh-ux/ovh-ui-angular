export default class {
    constructor ($element, $scope, $timeout) {
        "ngInject";

        this.$element = $element;
        this.$scope = $scope;
        this.$timeout = $timeout;
    }

    $postLink () {
        this.$timeout(() =>
            this.$element
                .addClass("oui-popover__trigger")
                .attr("id", this.popover.id)
                .attr({
                    "aria-haspopup": true,
                    "aria-expanded": false
                })
                .on("click", () => this.popover.onTriggerClick())
        );

        this.$scope.$on("oui:popover:afterOpen", (e, id) => {
            if (id !== this.popover.id) {
                return;
            }

            this.$element.attr("aria-expanded", true);
        });

        this.$scope.$on("oui:popover:afterClose", (e, id) => {
            if (id !== this.popover.id) {
                return;
            }

            this.$element.attr("aria-expanded", false);
        });
    }

    $onDestroy () {
        this.$element.off("click");
    }
}
