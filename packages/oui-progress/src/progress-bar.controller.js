import { addDefaultParameter, throwErrorOnMissingAttributeValue } from "@oui-angular/common/component-utils";

export default class {
    constructor ($attrs, $element) {
        "ngInject";
        this.$attrs = $attrs;
        this.$element = $element;
    }

    $onInit () {
        throwErrorOnMissingAttributeValue(this.$element[0], "value");
        addDefaultParameter(this, "type", this.parent.type);
        addDefaultParameter(this, "labelAlign", "right");
    }

    $postLink () {
        const maxValuePercentage = 100;
        const widthPrecentage = (this.value * maxValuePercentage) / this.parent.maxValue;
        this.$element.addClass("oui-progress__bar");
        this.$element.addClass(`oui-progress__bar_${this.type}`);
        this.$element.css("width", `${widthPrecentage}%`);
    }
}
