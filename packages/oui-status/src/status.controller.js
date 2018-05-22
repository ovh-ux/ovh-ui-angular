export default class {
    $onInit () {
        if (!this.type) {
            throw new Error("ovh-ui-angular: missing required attribute 'type'");
        }
    }
}
