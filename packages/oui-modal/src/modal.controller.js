import { addBooleanParameter } from "@oui-angular/common/component-utils";

export default class {
    constructor ($attrs) {
        "ngInject";

        this.$attrs = $attrs;
    }

    $onInit () {
        addBooleanParameter(this, "loading");

        // Deprecated: Support for 'title' attribute
        if (!!this.$attrs.title && !this.$attrs.heading) {
            this.heading = this.title;
        }
    }
}
