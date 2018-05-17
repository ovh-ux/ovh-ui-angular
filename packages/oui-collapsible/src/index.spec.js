describe("ouiCollapsible", () => {
    let TestUtils;

    beforeEach(angular.mock.module("oui.collapsible"));
    beforeEach(angular.mock.module("oui.test-utils"));

    beforeEach(inject((_TestUtils_) => {
        TestUtils = _TestUtils_;
    }));

    function getHeaderElement (element) {
        return element[0].querySelector(".oui-collapsible__header-button");
    }

    function getBodyElement (element) {
        return element[0].querySelector(".oui-collapsible__body");
    }

    describe("Component", () => {
        it("should have a header button with icon", () => {
            const element = TestUtils.compileTemplate(`
                <oui-collapsible title="Title" aria-label="Action">
                    <div>Collapsible body</div>
                </oui-collapsible>`
            );

            const headerEl = getHeaderElement(element);
            const iconEl = headerEl.querySelector(".oui-collapsible__toggle-icon");
            expect(headerEl).toBeTruthy();
            expect(iconEl).toBeTruthy();
        });

        it("should have a body", () => {
            const element = TestUtils.compileTemplate(`
                <oui-collapsible title="Title" aria-label="Action">
                    <div>Collapsible body</div>
                </oui-collapsible>`
            );

            const bodyEl = getBodyElement(element);
            expect(bodyEl).toBeTruthy();
        });

        it("should have the correct title", () => {
            const titleText = "Collapsible title";
            const element = TestUtils.compileTemplate(`
                <oui-collapsible title="${titleText}" aria-label="Action">
                    <div>Collapsible body</div>
                </oui-collapsible>`
            );

            const headerEl = getHeaderElement(element);
            expect(headerEl.innerText).toContain(titleText);
        });

        it("should have the correct aria-label", () => {
            const ariaLabel = "Action";
            const element = TestUtils.compileTemplate(`
                <oui-collapsible title="Title" aria-label="${ariaLabel}">
                    <div>Collapsible body</div>
                </oui-collapsible>`
            );

            const headerEl = getHeaderElement(element);
            expect(headerEl.getAttribute("aria-label")).toBe(ariaLabel);
        });


        it("should expand on header click", () => {
            const element = TestUtils.compileTemplate(`
                <oui-collapsible title="Title" aria-label="Action" expanded="false">
                    <div>Collapsible body</div>
                </oui-collapsible>`
            );

            const headerEl = getHeaderElement(element);
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

            const headerEl = getHeaderElement(element);
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

            const bodyEl = getBodyElement(element);
            expect(bodyEl).toBeTruthy();

            const contentEl = bodyEl.querySelector(".custom-content");
            expect(contentEl).toBeTruthy();
        });
    });
});
