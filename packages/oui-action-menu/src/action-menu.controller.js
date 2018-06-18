import { addBooleanParameter, addDefaultParameter } from "@oui-angular/common/component-utils";
import DropdownCtrl from "../../oui-dropdown/src/dropdown.controller";

export default class extends DropdownCtrl {
    $onInit () {
        addBooleanParameter(this, "compact");
        addBooleanParameter(this, "disabled");
        addDefaultParameter(this, "align", this.compact ? "center" : "start");
    }

    $postLink () {
        this.$timeout(() =>
            this.$element
                .removeAttr("aria-label")
        );
    }
}
