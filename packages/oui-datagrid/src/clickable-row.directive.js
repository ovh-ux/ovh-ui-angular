export default () => {
    "ngInject";

    return {
        controller: () => {
            // do nothing.
        },
        constrollerAs: "clickableRowCtrl",
        restrict: "A",
        scope: true,
        bindToController: {
            rowClickable: "<",
            rowLabel: "<"
        },
        link: ($scope, $elm, $attrs, clickableRowCtrl) => {
            if (clickableRowCtrl.rowClickable) {
                $elm.attr("tabindex", 0);
                $elm.attr("aria-label", clickableRowCtrl.rowLabel);
            }
        }
    };
};
