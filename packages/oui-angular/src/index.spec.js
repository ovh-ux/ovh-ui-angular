import "@oui-angular/common/test-utils";

loadTests(require.context("../../oui-button/src/", true, /.*((\.spec)|(index))$/));
loadTests(require.context("../../oui-checkbox/src/", true, /.*((\.spec)|(index))$/));
loadTests(require.context("../../oui-message/src/", true, /.*((\.spec)|(index))$/));
loadTests(require.context("../../oui-radio/src/", true, /.*((\.spec)|(index))$/));
loadTests(require.context("../../oui-radio-group/src/", true, /.*((\.spec)|(index))$/));
loadTests(require.context("../../oui-loader/src/", true, /.*((\.spec)|(index))$/));
loadTests(require.context("../../oui-back-button/src/", true, /.*((\.spec)|(index))$/));
loadTests(require.context("../../oui-dropdown/src/", true, /.*((\.spec)|(index))$/));
loadTests(require.context("../../oui-action-menu/src/", true, /.*((\.spec)|(index))$/));
loadTests(require.context("../../oui-numeric/src/", true, /.*((\.spec)|(index))$/));

function loadTests (context) {
    context.keys().forEach(context);
}
