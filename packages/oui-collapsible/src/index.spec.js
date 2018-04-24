describe("ouiCollapsible", () => {
    let TestUtils;

    beforeEach(angular.mock.module("oui.collapsible"));
    beforeEach(angular.mock.module("oui.test-utils"));

    beforeEach(inject((_TestUtils_) => {
        TestUtils = _TestUtils_;
    }));

    describe("Component", () => {
        it("should have a header", () => {
            const element = TestUtils.compileTemplate(`
                <oui-collapsible title="Title" aria-label="Action">
                    <div>Collapsible body</div>
                </oui-collapsible>`
            );

            const headerEl = element[0].querySelector(".oui-collapsible__header");
            expect(headerEl).toBeTruthy();
        });

        it("should have a body", () => {
            const element = TestUtils.compileTemplate(`
                <oui-collapsible title="Title" aria-label="Action">
                    <div>Collapsible body</div>
                </oui-collapsible>`
            );

            const bodyEl = element[0].querySelector(".oui-collapsible__body");
            expect(bodyEl).toBeTruthy();
        });

        it("should have the correct title", () => {
            const titleText = "Collapsible title";
            const element = TestUtils.compileTemplate(`
                <oui-collapsible title="${titleText}" aria-label="Action">
                    <div>Collapsible body</div>
                </oui-collapsible>`
            );

            const titleEl = element[0].querySelector(".oui-collapsible__header-label");
            expect(titleEl).toBeTruthy();
            expect(titleEl.innerText).toBe(titleText);
        });

        it("should have the toggle button", () => {
            const element = TestUtils.compileTemplate(`
                <oui-collapsible title="Title" aria-label="Action">
                    <div>Collapsible body</div>
                </oui-collapsible>`
            );

            const buttonEl = element[0].querySelector(".oui-collapsible__header-button");
            expect(buttonEl).toBeTruthy();
            const iconEl = buttonEl.querySelector(".oui-collapsible__header-button-icon");
            expect(iconEl).toBeTruthy();
        });

        it("should have the correct aria-label", () => {
            const ariaLabel = "Action";
            const element = TestUtils.compileTemplate(`
                <oui-collapsible title="Title" aria-label="${ariaLabel}">
                    <div>Collapsible body</div>
                </oui-collapsible>`
            );

            const buttonEl = element[0].querySelector(".oui-collapsible__header-button");
            expect(buttonEl).toBeTruthy();
            expect(buttonEl.getAttribute("aria-label")).toBe(ariaLabel);
        });

        it("should not be expanded when expanded is false", () => {
            const element = TestUtils.compileTemplate(`
                <oui-collapsible title="Title" aria-label="Action" expanded="false">
                    <div>Collapsible body</div>
                </oui-collapsible>`
            );

            const openCollapsible = element[0].querySelector(".oui-collapsible_open");
            expect(openCollapsible).toBeFalsy();
        });

        it("should be expanded when expanded is true", () => {
            const element = TestUtils.compileTemplate(`
                <oui-collapsible title="Title" aria-label="Action" expanded="true">
                    <div>Collapsible body</div>
                </oui-collapsible>`
            );

            const openCollapsible = element[0].querySelector(".oui-collapsible_open");
            expect(openCollapsible).toBeTruthy();
        });

        it("should be expand when header is clicked", () => {
            const element = TestUtils.compileTemplate(`
                <oui-collapsible title="Title" aria-label="Action" expanded="false">
                    <div>Collapsible body</div>
                </oui-collapsible>`
            );

            const headerEl = element[0].querySelector(".oui-collapsible__header");
            expect(headerEl).toBeTruthy();
            angular.element(headerEl).triggerHandler("click");

            const openCollapsible = element[0].querySelector(".oui-collapsible_open");
            expect(openCollapsible).toBeTruthy();
        });

        it("should be collapsed when header is clicked", () => {
            const element = TestUtils.compileTemplate(`
                <oui-collapsible title="Title" aria-label="Action" expanded="true">
                    <div>Collapsible body</div>
                </oui-collapsible>`
            );

            const headerEl = element[0].querySelector(".oui-collapsible__header");
            expect(headerEl).toBeTruthy();
            angular.element(headerEl).triggerHandler("click");

            const openCollapsible = element[0].querySelector(".oui-collapsible_open");
            expect(openCollapsible).toBeFalsy();
        });

        it("should transclude the contents into the collapsible body", () => {
            const element = TestUtils.compileTemplate(`
                <oui-collapsible title="Title" aria-label="Action" expanded="true">
                    <div class="custom-content">Collapsible body</div>
                </oui-collapsible>`
            );

            const bodyEl = element[0].querySelector(".oui-collapsible__body");
            expect(bodyEl).toBeTruthy();

            const contentEl = bodyEl.querySelector(".custom-content");
            expect(contentEl).toBeTruthy();
        });
    });
});
