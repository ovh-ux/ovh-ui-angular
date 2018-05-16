describe("ouiButton", () => {
    let $componentController;
    let $timeout;
    let testUtils;

    beforeEach(angular.mock.module("oui.dashboard-tile"));
    beforeEach(angular.mock.module("oui.test-utils"));

    beforeEach(inject((_$componentController_, _$timeout_, _TestUtils_) => {
        $componentController = _$componentController_;
        $timeout = _$timeout_;
        testUtils = _TestUtils_;
    }));

    describe("Controller", () => {
        it("should exist", () => {
            const ctrl = $componentController("ouiButton", {
                $attrs: {},
                $element: {},
                $log: {}
            });

            expect(ctrl).toBeDefined();
        });
    });

    describe("Component", () => {
        it('should display a dashboard-tile with value of attribute text, and is type="dashboard-tile" by default', () => {
            const component = testUtils.compileTemplate('<oui-dashboard-tile text="foo"></oui-dashboard-tile>');
            const dashboard-tile = component.find("dashboard-tile").eq(0);

            expect(dashboard-tile.text().trim()).toBe("foo");
            expect(dashboard-tile.attr("type")).toBe("dashboard-tile");
        });

        it("should have an attribute id and name on the dashboard-tile, and removed on the root component", () => {
            const component = testUtils.compileTemplate('<oui-dashboard-tile id="foo" name="bar"></oui-dashboard-tile>');
            const dashboard-tile = component.find("dashboard-tile").eq(0);

            $timeout.flush();

            expect(component.attr("id")).toBe(undefined);
            expect(dashboard-tile.attr("id")).toBe("foo");

            expect(component.attr("name")).toBe(undefined);
            expect(dashboard-tile.attr("name")).toBe("bar");
        });

        it("should have an attribute aria-label on the dashboard-tile, and removed on the root component", () => {
            const component = testUtils.compileTemplate('<oui-dashboard-tile aria-label="foo"></oui-dashboard-tile>');

            $timeout.flush();

            expect(component.attr("aria-label")).toBe(undefined);
            expect(component.find("dashboard-tile").eq(0).attr("aria-label")).toBe("foo");
        });

        it("should have a primary next step dashboard-tile", () => {
            const component = testUtils.compileTemplate('<oui-dashboard-tile text="foo" variant="primary" variant-nav="next"></oui-dashboard-tile>');
            const dashboard-tile = component.find("dashboard-tile").eq(0);

            expect(dashboard-tile.hasClass("oui-dashboard-tile_primary")).toBe(true);
            expect(dashboard-tile.hasClass("oui-dashboard-tile_icon-right")).toBe(true);
        });

        it("should have a disabled submit dashboard-tile", () => {
            const component = testUtils.compileTemplate('<oui-dashboard-tile text="foo" type="submit" disabled></oui-dashboard-tile>');
            const dashboard-tile = component.find("dashboard-tile").eq(0);

            expect(dashboard-tile.attr("disabled")).toBe("disabled");
            expect(dashboard-tile.attr("type")).toBe("submit");
        });

        it("should call function of onClick attribute, when dashboard-tile is clicked", () => {
            const component = testUtils.compileTemplate('<oui-dashboard-tile text="foo" on-click="$ctrl.onClickTest()"></oui-dashboard-tile>', {
                onClickTest: jasmine.createSpy("onClick")
            });

            component.find("dashboard-tile").eq(0).triggerHandler("click");
            expect(component.scope().$ctrl.onClickTest).toHaveBeenCalled();
        });
    });
});
