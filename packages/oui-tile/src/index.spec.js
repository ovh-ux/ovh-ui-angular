describe("ouiTile", () => {

    let TestUtils;
    beforeEach(angular.mock.module("oui.tile"));
    beforeEach(angular.mock.module("oui.test-utils"));

    beforeEach(inject((_TestUtils_) => {
        TestUtils = _TestUtils_;
    }));

    const getTileHeading = (element) => angular.element(element[0].querySelector(".oui-tile__title"));
    const getTileDesc = (element) => angular.element(element[0].querySelector(".oui-tile__legend"));
    const getTileButton = (element) => angular.element(element[0].querySelector(".oui-tile__button"));
    const getTileDefinitionTerm = (element) => angular.element(element[0].querySelector(".oui-tile__term"));
    const getTileDefinitionDesc = (element) => angular.element(element[0].querySelector(".oui-tile__description"));
    const getActionMenu = (element) => angular.element(element[0].querySelector(".oui-tile__actions"));

    describe("Component", () => {

        it("should display a tile with title and legend", () => {
            const title = "My title";
            const legend = "My legend";
            const element = TestUtils.compileTemplate(`<oui-tile heading="${title}" description="${legend}"></oui-tile>`);

            const tileTitle = getTileHeading(element);
            const tileLegend = getTileDesc(element);
            expect(tileTitle.html()).toBe(title);
            expect(tileLegend.html()).toBe(legend);
        });

    });

    describe("Component tile button", () => {

        it("should display a button tile using attr", () => {
            const text = "button text";
            const element = TestUtils.compileTemplate(
                `<oui-tile>
                    <oui-tile-button text="${text}"></oui-tile-button>
                </oui-tile>`);

            const button = getTileButton(element);
            expect(button.html()).toContain(text);
        });

        it("should display a button tile using transclusion", () => {
            const text = "button text";
            const element = TestUtils.compileTemplate(
                `<oui-tile>
                    <oui-tile-button>${text}</oui-tile-button>
                </oui-tile>`);

            const button = getTileButton(element);
            expect(button.html()).toContain(text);
        });

        it("should display a button tile with link", () => {
            const url = "http://my.url";
            const element = TestUtils.compileTemplate(
                `<oui-tile>
                    <oui-tile-button text="text" href="${url}"></oui-tile-button>
                </oui-tile>`);

            const button = getTileButton(element);
            expect(button.attr("href")).toBe(url);
        });

        it("should handle click in a button tile", () => {
            const clickSpy = jasmine.createSpy("click");
            const element = TestUtils.compileTemplate(
                `<oui-tile>
                    <oui-tile-button text="text" on-click="$ctrl.clickSpy()"></oui-tile-button>
                </oui-tile>`, {
                    clickSpy
                });

            getTileButton(element).triggerHandler("click");
            expect(clickSpy).toHaveBeenCalled();
        });

    });

    describe("Component tile definition", () => {

        it("should display term and description", () => {
            const term = "my term";
            const description = "my description";
            const element = TestUtils.compileTemplate(
                `<oui-tile>
                    <oui-tile-definition term="${term}" description="${description}"></oui-tile-button>
                </oui-tile>`);

            const element2 = TestUtils.compileTemplate(
                `<oui-tile>
                    <oui-tile-definition term="${term}">
                        <oui-tile-description>${description}</oui-tile-description>
                    </oui-tile-button>
                </oui-tile>`);

            expect(getTileDefinitionTerm(element).html()).toContain(term);
            expect(getTileDefinitionDesc(element).html()).toContain(description);

            expect(getTileDefinitionTerm(element2).html()).toContain(term);
            expect(getTileDefinitionDesc(element2).html()).toContain(description);
        });

        it("should define a term-popover", () => {
            const termPopover = "my popover";

            const element = TestUtils.compileTemplate(
                `<oui-tile>
                    <oui-tile-definition term-popover="${termPopover}"></oui-tile-button>
                </oui-tile>`);

            const popoverButton = angular.element(element[0].querySelector(".oui-popover__help-button"));
            const popoverContent = angular.element(element[0].querySelector("oui-popover-content"));

            expect(popoverButton).toBeDefined();
            expect(popoverContent.html()).toContain(termPopover);
        });

        it("should define an action-menu", () => {
            const element = TestUtils.compileTemplate(
                `<oui-tile>
                    <oui-tile-definition>
                        <oui-action-menu>
                            <oui-action-menu-item></oui-action-menu-item>
                        </oui-action-menu>
                    </oui-tile-button>
                </oui-tile>`);

            const element2 = TestUtils.compileTemplate(
                `<oui-tile>
                    <oui-tile-definition></oui-tile-button>
                </oui-tile>`);

            expect(getActionMenu(element).length).not.toBe(0);
            expect(getActionMenu(element2).length).toBe(0);
        });
    });

});
