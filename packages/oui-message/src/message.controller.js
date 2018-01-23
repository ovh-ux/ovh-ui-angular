import { addBooleanParameter } from "@oui-angular/common/component-utils";

export default class {
    constructor ($attrs) {
        "ngInject";

        this.$attrs = $attrs;
    }

    $onInit () {
        addBooleanParameter(this, "dismissable");
    }

    dismiss () {
        this.dismissed = true;

        if (this.onDismissed) {
            this.onDismissed();
        }
    }
}
