import { addBooleanParameter, addDefaultParameter } from "@oui-angular/common/component-utils";

export default class {
    constructor ($attrs) {
        "ngInject";

        this.$attrs = $attrs;
    }

    $onInit () {
        // Guidelines default value for dismissable attribute
        addDefaultParameter(this, "dismissable", this.type === "info" || this.type === "success");
        addBooleanParameter(this, "dismissable");
    }

    dismiss () {
        this.dismissed = true;
        this.onDismissed();
    }
}
