import _ from "lodash";

export default class {
    constructor ($scope) {
        "ngInject";

        this.$scope = $scope;
        this.radios = [];
    }

    $onInit () {
        if (!this.name) {
            this.name = `oui-radio-group-${this.$scope.$id}`;
        }
    }

    $onChanges (changes) {
        if (_.has(changes, "value")) {
            _.forEach(this.radios, (radio) => {
                radio.onGroupValueChange(changes.value.currentValue);
            });
        }
    }

    callOnChange (value) {
        if (this.onChange) {
            this.onChange({
                $event: {
                    value
                }
            });
        }
    }
}
