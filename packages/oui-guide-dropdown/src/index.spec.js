describe("ouiGuide", () => {
    let TestUtils;

    beforeEach(angular.mock.module("oui.guide"));
    beforeEach(angular.mock.module("oui.test-utils"));

    beforeEach(inject(_TestUtils_ => {
        TestUtils = _TestUtils_;
    }));

    describe("Component", () => {
        it("should display an action menu", () => {
            const element = TestUtils.compileTemplate(`
                <oui-guide>
                  <oui-action-menu-item text="Action 1" external></oui-action-menu-item>
                </oui-guide>`
            );

            const ulElement = element.find("ul");
            expect(ulElement).toBeTruthy();
        });

        it("should display a button item", () => {
            const element = TestUtils.compileTemplate(
                `<oui-guide>
                    <oui-guide-footer>
                      <oui-action-menu-item text="Action 1" external></oui-action-menu-item>
                      <oui-button text="Guide button"></oui-button>             
                    </oui-guide-footer>
                </oui-guide>`
            );
            const footerElement = element[0].querySelector(".oui-guide__footer");
            expect(footerElement).toBeTruthy();
        });

        it("should display a header", () => {
            const element = TestUtils.compileTemplate(`
                <oui-guide>
                    <oui-guide-section header="header">
                        <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
                        <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
                    </oui-guide-section>
                </oui-guide>`
            );

            const linkElement = element[0].querySelector(".oui-guide__item-title");
            expect(linkElement).toBeTruthy();
        });
    });
});
