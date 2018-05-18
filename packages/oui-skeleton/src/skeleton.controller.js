export default class {
    constructor () {
        "ngInject";
        this.max = 100;
        this.min = 30;
    }

    $onInit () {
        this.width = this.width || `${Math.round((Math.random() * (this.max - this.min + 1)) + this.min)}%`;
    }
}
