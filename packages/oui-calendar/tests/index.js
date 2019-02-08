import "@ovh-ui/common/test-utils";

loadTests(require.context("../src/", true, /.*((\.spec)|(index))$/));

function loadTests (context) {
    context.keys().forEach(context);
}
