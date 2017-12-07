export default class {
    constructor () {
        "ngInject";
    }

    dismiss () {
        this.dismissed = true;

        if (this.onDismissed) {
            this.onDismissed();
        }
    }
}
