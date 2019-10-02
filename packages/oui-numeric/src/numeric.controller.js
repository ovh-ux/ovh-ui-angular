import { addBooleanParameter, addDefaultParameter } from "@ovh-ui/common/component-utils";

// By design, value is restricted to [0, 99999] interval
const MIN_VALUE = 0;
const MAX_VALUE = 99999;

export default class {
    /* @ngInject */
    constructor ($attrs, $element, $log, $scope, $timeout) {
        this.$attrs = $attrs;
        this.$element = $element;
        this.$log = $log;
        this.$id = $scope.$id;
        this.$timeout = $timeout;
    }

    $onInit () {
        addDefaultParameter(this, "id", `ouiNumeric${this.$id}`);
        addDefaultParameter(this, "min", MIN_VALUE);
        addDefaultParameter(this, "max", MAX_VALUE);
        addBooleanParameter(this, "disabled");

        if (!angular.isNumber(this.min)) {
            if (angular.isDefined(this.min)) {
                this.$log.warn(`Invalid attribute min, expected number got '${this.min}'`);
            }
            this.min = MIN_VALUE;
        }

        if (!angular.isNumber(this.max)) {
            if (angular.isDefined(this.max)) {
                this.$log.warn(`Invalid attribute max, expected number got '${this.max}'`);
            }
            this.max = MAX_VALUE;
        }

        if (!angular.isNumber(this.model)) {
            if (angular.isDefined(this.model)) {
                this.$log.warn(`Invalid attribute model, expected number got '${this.model}'`);
            }

            // if model is undefined, initialize it with min value
            this.setModelValue(this.min);
        }

        if (angular.isDefined(this.$attrs.disabled) && angular.isUndefined(this.disabled)) {
            this.disabled = true;
        }

        // used to trigger only onChange when necessary and
        // reset input if invalid characters are used
        this.previousValue = this.model;
    }

    $postLink () {
        // Sometimes the digest cycle is done before dom manipulation,
        // So we use $timeout to force the $apply
        this.$timeout(() =>
            this.$element
                .addClass("oui-input-group")
                .addClass("oui-input-group_numeric")
                .removeAttr("id")
                .removeAttr("name")
        );
    }

    setModelValue (value) {
    // updates model and displayed value
        this.model = value;

        // only trigger onChange if model value changed
        if (this.previousValue !== this.model && angular.isFunction(this.onChange)) {
            this.onChange({
                modelValue: this.model
            });
        }

        this.previousValue = this.model;
    }

    increment () {
        if (angular.isNumber(this.model)) {
            this.setModelValue(this.model + 1);
        } else {
            this.setModelValue(this.min);
        }
    }

    decrement () {
        if (angular.isNumber(this.model)) {
            this.setModelValue(this.model - 1);
        } else {
            this.setModelValue(this.min);
        }
    }

    onInputChanged () {
        if (this.model !== null &&
            angular.isNumber(this.model) &&
            this.model >= this.min &&
            this.model <= this.max) {
            this.setModelValue(this.model);
        }
    }
}
