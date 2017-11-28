import _ from "lodash";

export default class {
    constructor ($attrs) {
        "ngInject";

        this.$attrs = $attrs;
    }

    $onInit () {
        this.size = this.size || "m";

        if (_.has(this.$attrs, "inline") && _.isEmpty(this.$attrs.inline)) {
            this.inline = true;
        }

        if (this.size === "s" && !_.has(this.$attrs, "inline")) {
            this.inline = true;
        }
    }
}
