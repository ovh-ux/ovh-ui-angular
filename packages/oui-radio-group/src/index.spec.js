describe("ouiRadioGroup", () => {
    let $componentController;

    beforeEach(angular.mock.module("oui.radio-group"));

    beforeEach(inject((_$componentController_) => {
        $componentController = _$componentController_;
    }));

    describe("Controller", () => {
        it("should exist", () => {
            const ctrl = $componentController("ouiRadioGroup");
            expect(ctrl).toBeDefined();
        });
    });

    describe("Component", () => {
        xit("should display a radio group");
    });
});
