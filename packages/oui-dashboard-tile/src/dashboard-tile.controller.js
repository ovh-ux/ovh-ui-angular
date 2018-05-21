import { addDefaultParameter } from "@oui-angular/common/component-utils";
export default class {
    constructor ($attrs) {
        "ngInject";
        this.$attrs = $attrs;
    }

    $onInit () {
        addDefaultParameter(this, "titleBorder", true);
    }
}
