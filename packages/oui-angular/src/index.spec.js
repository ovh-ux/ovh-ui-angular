import "@oui-angular/common/test-utils";

loadTests(require.context("../../oui-button/src/", true, /.*((\.spec)|(index))$/));
loadTests(require.context("../../oui-calendar/src/", true, /.*((\.spec)|(index))$/));
loadTests(require.context("../../oui-checkbox/src/", true, /.*((\.spec)|(index))$/));
loadTests(require.context("../../oui-collapsible/src/", true, /.*((\.spec)|(index))$/));
loadTests(require.context("../../oui-message/src/", true, /.*((\.spec)|(index))$/));
loadTests(require.context("../../oui-radio/src/", true, /.*((\.spec)|(index))$/));
loadTests(require.context("../../oui-spinner/src/", true, /.*((\.spec)|(index))$/));
loadTests(require.context("../../oui-back-button/src/", true, /.*((\.spec)|(index))$/));
loadTests(require.context("../../oui-dropdown/src/", true, /.*((\.spec)|(index))$/));
loadTests(require.context("../../oui-action-menu/src/", true, /.*((\.spec)|(index))$/));
loadTests(require.context("../../oui-numeric/src/", true, /.*((\.spec)|(index))$/));
loadTests(require.context("../../oui-pagination/src/", true, /.*((\.spec)|(index))$/));
loadTests(require.context("../../oui-datagrid/src/", true, /.*((\.spec)|(index))$/));
loadTests(require.context("../../oui-navbar/src/", true, /.*((\.spec)|(index))$/));
loadTests(require.context("../../oui-modal/src/", true, /.*((\.spec)|(index))$/));
loadTests(require.context("../../oui-field/src/", true, /.*((\.spec)|(index))$/));
loadTests(require.context("../../oui-select/src/", true, /.*((\.spec)|(index))$/));
loadTests(require.context("../../oui-select-picker/src/", true, /.*((\.spec)|(index))$/));
loadTests(require.context("../../oui-radio-group/src/", true, /.*((\.spec)|(index))$/));
loadTests(require.context("../../oui-textarea/src/", true, /.*((\.spec)|(index))$/));
loadTests(require.context("../../oui-radio-toggle-group/src/", true, /.*((\.spec)|(index))$/));
loadTests(require.context("../../oui-form-actions/src/", true, /.*((\.spec)|(index))$/));
loadTests(require.context("../../oui-search/src/", true, /.*((\.spec)|(index))$/));
loadTests(require.context("../../oui-criteria-container/src/", true, /.*((\.spec)|(index))$/));
loadTests(require.context("../../oui-criteria-adder/src/", true, /.*((\.spec)|(index))$/));
loadTests(require.context("../../oui-chips/src/", true, /.*((\.spec)|(index))$/));
loadTests(require.context("../../oui-popover/src/", true, /.*((\.spec)|(index))$/));
loadTests(require.context("../../oui-stepper/src/", true, /.*((\.spec)|(index))$/));

function loadTests (context) {
    context.keys().forEach(context);
}
