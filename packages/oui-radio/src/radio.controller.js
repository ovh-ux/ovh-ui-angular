import _ from "lodash";

const INPUT_SELECTOR = "input";

export default class {
    constructor ($scope, $element, $attrs, $transclude) {
        "ngInject";

        this.$element = $element;
        this.$scope = $scope;
        this.$attrs = $attrs;
        this.$transclude = $transclude;

        if (this.onChange) {
            this.onChange = this.onChange.bind(this);
        }
    }

    registerEventsToParent () {
        const self = this;

        this.onGroupValueChange(self.group.value);

        this.$element.find(INPUT_SELECTOR).bind("change", function () {
            self.$scope.$apply(() => self.group.callOnChange(this.value));
        });
    }

    $onInit () {
        this.id = `oui-radio-${this.$scope.$id}`;

        if (_.has(this.$attrs, "checked") && _.isEmpty(this.$attrs.checked)) {
            this.checked = true;
        }

        if (_.has(this.$attrs, "disabled") && _.isEmpty(this.$attrs.disabled)) {
            this.disabled = true;
        }

        if (this.group) {
            this.name = this.group.name;
            this.group.radios.push(this);

            this.registerEventsToParent();
        } else {
            this.name = this.id;
        }

        if (_.has(this.$attrs, "big")) {
            this.big = true;
        }

        if (_.has(this.$attrs, "thumbnail")) {
            this.thumbnail = true;
        }

        this.hasDescription = Boolean(this.$transclude.isSlotFilled("description") || this.description);
    }

    $onDestroy () {
        if (self.group) {
            _.remove(this.group.radios, this);
            this.$element.find(INPUT_SELECTOR).unbind("change");
        }
    }

    $onChanges (changes) {
        if (_.has(changes, "checked")) {
            this.checked = changes.checked.currentValue;
        }
    }

    onGroupValueChange (value) {
        this.checked = value === this.value;
    }
}
