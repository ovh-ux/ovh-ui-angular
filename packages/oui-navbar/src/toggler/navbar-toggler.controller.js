export default class {
    $onChanges (changes) {
        // Get links changes for the loader
        if (changes.links) {
            this.loaded = !!changes.links.currentValue;
        }
    }
}
