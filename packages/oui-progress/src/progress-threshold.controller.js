import { throwErrorOnMissingAttributeValue } from "@oui-angular/common/component-utils";

export default class {
    constructor ($attrs, $element) {
        "ngInject";
        this.$element = $element;
    }

    $onInit () {
        throwErrorOnMissingAttributeValue(this.$element[0], "value");
    }

    $postLink () {
        const maxValuePercentage = 100;
        const leftPrecentage = (this.value * maxValuePercentage) / this.parent.maxValue;
        this.$element.addClass("oui-progress__threshold");
        this.$element.css("left", `${leftPrecentage}%`);
    }
}
