export default ($compile, $timeout) => {
    "ngInject";

    return {
        controller: () => {
            // do nothing.
        },
        controllerAs: "checkboxCtrl",
        scope: true,
        bindToController: {
            name: "@",
            value: "=",
            onChange: "&",
            compiledTemplate: "<"
        },
        link: ($scope, $elm, $attrs, checkboxCtrl) => {
            const checkboxScope = $scope.$new(false);
            checkboxScope.$name = checkboxCtrl.name;

            checkboxScope.$onChange = () => {
                checkboxCtrl.value = checkboxScope.$value;

                // Wait until next digest loop to get the right value.
                $timeout(() => {
                    checkboxCtrl.onChange();
                });
            };

            $scope.$watch("checkboxCtrl.value", newValue => {
                checkboxScope.$value = newValue;
            });

            checkboxCtrl.compiledTemplate(checkboxScope, clone => {
                $elm.empty();
                $elm.append(clone);
            });
        }
    };
};
