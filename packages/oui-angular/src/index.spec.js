loadTests(require.context('../../oui-checkbox/src/', true, /.*((\.spec)|(index))$/))
loadTests(require.context('../../oui-message/src/', true, /.*((\.spec)|(index))$/))
loadTests(require.context('../../oui-radio/src/', true, /.*((\.spec)|(index))$/))
loadTests(require.context('../../oui-radio-group/src/', true, /.*((\.spec)|(index))$/))
loadTests(require.context('../../oui-loader/src/', true, /.*((\.spec)|(index))$/))

function loadTests (context) {
  context.keys().forEach(context)
}
