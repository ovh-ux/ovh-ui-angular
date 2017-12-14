export default class {
    dismiss () {
        this.dismissed = true;

        if (this.onDismissed) {
            this.onDismissed();
        }
    }
}
