import { addDefaultParameter } from "@oui-angular/common/component-utils";

export default class {
    constructor ($attrs) {
        "ngInject";

        this.$attrs = $attrs;
        this.max = 100;
        this.min = 30;
    }

    $onInit () {
        addDefaultParameter(this, "width", `${Math.round((Math.random() * (this.max - this.min + 1)) + this.min)}%`);
    }
}
