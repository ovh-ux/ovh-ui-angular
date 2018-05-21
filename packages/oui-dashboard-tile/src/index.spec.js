describe("ouiDashboardTile", () => {
    let TestUtils;

    beforeEach(angular.mock.module("oui.dashboard-tile"));
    beforeEach(angular.mock.module("oui.test-utils"));

    beforeEach(inject((_TestUtils_) => {
        TestUtils = _TestUtils_;
    }));

    function getTileContainerElement (element) {
        return element[0].querySelector(".oui-dashboard-tile");
    }

    function getHeaderElement (element) {
        return element[0].querySelector(".oui-dashboard-tile__header");
    }

    function getBorderedHeaderElement (element) {
        return element[0].querySelector(".oui-dashboard-tile__header-bordered");
    }

    function getTileItemElement (element) {
        return element[0].querySelector(".oui-dashboard-tile__item-container");
    }


    function getTileItemTitleElement (element) {
        return element[0].querySelector(".oui-dashboard-tile__item-title");
    }

    function getBorderedTileItemElement (element) {
        return element[0].querySelector(".oui-dashboard-tile__item-container-bordered");
    }

    describe("Component", () => {
        it("should have a tile container", () => {
            const element = TestUtils.compileTemplate(`
            <oui-dashboard-tile title="Tile1">
            </oui-dashboard-tile>`
            );

            const tileContainerEl = getTileContainerElement(element);
            expect(tileContainerEl).toBeTruthy();
        });

        describe("Header", () => {
            it("should have a header with correct title", () => {
                const title = "Tile 1";
                const element = TestUtils.compileTemplate(`
                <oui-dashboard-tile title="${title}">
                </oui-dashboard-tile>`
                );

                const headerEl = getHeaderElement(element);
                expect(headerEl).toBeTruthy();
                expect(headerEl.innerText).toBe(title);
            });

            it("should not have a title border when disabled", () => {
                const element = TestUtils.compileTemplate(`
                <oui-dashboard-tile title="Tile 1" title-border="false">
                </oui-dashboard-tile>`
                );

                const headerEl = getBorderedHeaderElement(element);
                expect(headerEl).toBeFalsy();
            });

            it("should have a title border when enabled", () => {
                const element = TestUtils.compileTemplate(`
                <oui-dashboard-tile title="Tile 1" title-border="true">
                </oui-dashboard-tile>`
                );

                const headerEl = getBorderedHeaderElement(element);
                expect(headerEl).toBeTruthy();
            });
        });

        describe("Tile item", () => {
            it("should have a tile item when created", () => {
                const element = TestUtils.compileTemplate(`
                <oui-dashboard-tile title="Tile 1">
                    <oui-dashboard-tile-item>
                    </oui-dashboard-tile-item>
                </oui-dashboard-tile>`
                );

                const tileItemEl = getTileItemElement(element);
                expect(tileItemEl).toBeTruthy();
            });

            it("should have a tile item with correct title", () => {
                const title = "Tile Item 1";
                const element = TestUtils.compileTemplate(`
                <oui-dashboard-tile>
                    <oui-dashboard-tile-item title="${title}">
                    </oui-dashboard-tile-item>
                </oui-dashboard-tile>`
                );

                const tileTitleEl = getTileItemTitleElement(element);
                expect(tileTitleEl).toBeTruthy();
                expect(tileTitleEl.innerText).toBe(title);
            });

            it("should not have a tile item border when disabled", () => {
                const element = TestUtils.compileTemplate(`
                <oui-dashboard-tile title="Tile 1">
                    <oui-dashboard-tile-item bottom-border="false">
                    </oui-dashboard-tile-item>
                </oui-dashboard-tile>`
                );

                const tileItemEl = getBorderedTileItemElement(element);
                expect(tileItemEl).toBeFalsy();
            });

            it("should have a tile item border when enabled", () => {
                const element = TestUtils.compileTemplate(`
                <oui-dashboard-tile title="Tile 1">
                    <oui-dashboard-tile-item bottom-border="true">
                    </oui-dashboard-tile-item>
                </oui-dashboard-tile>`
                );

                const tileItemEl = getBorderedTileItemElement(element);
                expect(tileItemEl).toBeTruthy();
            });

            it("should transclude contents into tile item element", () => {
                const element = TestUtils.compileTemplate(`
                <oui-dashboard-tile>
                    <oui-dashboard-tile-item>
                        <oui-button id="tile-button" variant="secondary" text="Active"></oui-button>
                    </oui-dashboard-tile-item>
                </oui-dashboard-tile>`
                );

                const tileItemEl = getTileItemElement(element);
                expect(tileItemEl).toBeTruthy();
                const buttonEl = tileItemEl.querySelector("#tile-button");
                expect(buttonEl).toBeTruthy();
            });
        });
    });
});
