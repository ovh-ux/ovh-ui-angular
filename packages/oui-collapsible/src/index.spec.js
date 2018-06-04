describe("ouiCollapsible", () => {
    let TestUtils;

    beforeEach(angular.mock.module("oui.collapsible"));
    beforeEach(angular.mock.module("oui.test-utils"));

    beforeEach(inject((_TestUtils_) => {
        TestUtils = _TestUtils_;
    }));

    function getHeaderElement (element) {
        return element[0].querySelector(".oui-collapsible__header");
    }

    function getBodyElement (element) {
        return element[0].querySelector(".oui-collapsible__body");
    }

    describe("Component", () => {
        it("should have the correct title", () => {
            const titleText = "Collapsible title";
            const element = TestUtils.compileTemplate(`
                <oui-collapsible title="${titleText}" aria-label="Action"></oui-collapsible>`
            );

            const headerEl = getHeaderElement(element);
            expect(headerEl.innerText).toContain(titleText);
        });

        it("should have the correct aria-label", () => {
            const ariaLabel = "Action";
            const element = TestUtils.compileTemplate(`
                <oui-collapsible title="Title" aria-label="${ariaLabel}"></oui-collapsible>`
            );

            const headerEl = getHeaderElement(element);
            expect(headerEl.getAttribute("aria-label")).toBe(ariaLabel);
        });


        it("should expand and collapse on header click", () => {
            const element = TestUtils.compileTemplate(`
                <oui-collapsible title="Title" aria-label="Action"></oui-collapsible>`
            );

            const headerEl = angular.element(getHeaderElement(element));

            // Expand
            headerEl.triggerHandler("click");
            expect(headerEl.attr("aria-expanded")).toBe("true");

            // Collapse
            headerEl.triggerHandler("click");
            expect(headerEl.attr("aria-expanded")).toBe("false");
        });

        it("should be expanded", () => {
            const element = TestUtils.compileTemplate(`
                <oui-collapsible title="Title" aria-label="Action" expanded="true"></oui-collapsible>`
            );
            const headerEl = angular.element(getHeaderElement(element));
            expect(headerEl.attr("aria-expanded")).toBe("true");
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
