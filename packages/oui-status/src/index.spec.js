describe("ouiStatus", () => {

    let TestUtils;
    beforeEach(angular.mock.module("oui.status"));
    beforeEach(angular.mock.module("oui.test-utils"));

    beforeEach(inject((_TestUtils_) => {
        TestUtils = _TestUtils_;
    }));

    function getOuiStatus (element) {
        return element[0].querySelector(".oui-status");
    }

    function getInfoOuiStatus (element) {
        return element[0].querySelector(".oui-status_info");
    }

    function getErrorOuiStatus (element) {
        return element[0].querySelector(".oui-status_error");
    }

    function getWarningOuiStatus (element) {
        return element[0].querySelector(".oui-status_warning");
    }

    function getSuccessOuiStatus (element) {
        return element[0].querySelector(".oui-status_success");
    }

    function getBody (element) {
        return getOuiStatus(element).innerHTML;
    }

    describe("Component", () => {

        it("should create an oui-status component", () => {
            const element = TestUtils.compileTemplate("<oui-status type='info'>Status</oui-status>");
            const statusEl = getOuiStatus(element);
            expect(statusEl).toBeTruthy();
        });

        it("should transclude text into the oui-status element", () => {
            const status = "Status";
            const element = TestUtils.compileTemplate(`<oui-status type='info'>${status}</oui-status>`);
            expect(getBody(element)).toBe(status);
        });

        it("should create an info status", () => {
            const element = TestUtils.compileTemplate("<oui-status type='info'>Status</oui-status>");
            const statusEl = getInfoOuiStatus(element);
            expect(statusEl).toBeTruthy();
        });

        it("should create an error status", () => {
            const element = TestUtils.compileTemplate("<oui-status type='error'>Status</oui-status>");
            const statusEl = getErrorOuiStatus(element);
            expect(statusEl).toBeTruthy();
        });

        it("should create an warning status", () => {
            const element = TestUtils.compileTemplate("<oui-status type='warning'>Status</oui-status>");
            const statusEl = getWarningOuiStatus(element);
            expect(statusEl).toBeTruthy();
        });

        it("should create an success status", () => {
            const element = TestUtils.compileTemplate("<oui-status type='success'>Status</oui-status>");
            const statusEl = getSuccessOuiStatus(element);
            expect(statusEl).toBeTruthy();
        });
    });
});
