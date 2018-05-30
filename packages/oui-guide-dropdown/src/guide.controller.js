export default class {
    constructor (ouiGuideConfiguration) {
        "ngInject";
        this.config = ouiGuideConfiguration.translations;
    }

    $onInit () {
        if (!this.title) {
            this.title = this.config.title;
        }
    }
}
