export default class {
    constructor ($element) {
        "ngInject";

        this.$element = $element;
    }

    $postLink () {
        this.extraTopScope = this.datagridCtrl.getParentScope().$new(false);
        this._compileElement();
    }

    _compileElement () {
        this.datagridCtrl.extraTopCompiledTemplate(this.extraTopScope, clone => {
            this.$element.empty();
            this.$element.append(clone);
        });
    }
}
