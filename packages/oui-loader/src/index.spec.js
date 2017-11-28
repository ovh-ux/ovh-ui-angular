describe("ouiLoader", () => {
    let $componentController;

    beforeEach(angular.mock.module("oui.loader"));

    beforeEach(inject((_$componentController_) => {
        $componentController = _$componentController_;
    }));

    describe("Controller", () => {
        it("should exist", () => {
            const ctrl = $componentController("ouiLoader", {
                $attrs: {}
            });
            ctrl.$onInit();
            expect(ctrl).toBeDefined();
        });

        describe("Default", () => {
            it("should have default size and not inline", () => {
                const ctrl = $componentController("ouiLoader", {
                    $attrs: {}
                });
                ctrl.$onInit();
                expect(ctrl.size).toEqual("m");
                expect(ctrl.inline).toBeFalsy();
            });
        });

        describe("Small", () => {
            it("should have right size and inline", () => {
                const ctrl = $componentController("ouiLoader", {
                    $attrs: {}
                }, {
                    size: "s"
                });
                ctrl.$onInit();
                expect(ctrl.size).toEqual("s");
                expect(ctrl.inline).toBeTruthy();
            });

            describe("forced not inline", () => {
                it("should not be inline", () => {
                    const ctrl = $componentController("ouiLoader", {
                        $attrs: {
                            inline: "false"
                        }
                    }, {
                        size: "s",
                        inline: false
                    });
                    ctrl.$onInit();
                    expect(ctrl.size).toEqual("s");
                    expect(ctrl.inline).toBeFalsy();
                });
            });
        });

        describe("Medium", () => {
            it("should have default size", () => {
                const ctrl = $componentController("ouiLoader", {
                    $attrs: {}
                }, {
                    size: "m"
                });
                ctrl.$onInit();
                expect(ctrl.size).toEqual("m");
                expect(ctrl.inline).toBeFalsy();
            });

            describe("forced inline", () => {
                it("should be inline", () => {
                    const ctrl = $componentController("ouiLoader", {
                        $attrs: {
                            inline: {}
                        }
                    }, {
                        size: "m"
                    });
                    ctrl.$onInit();
                    expect(ctrl.size).toEqual("m");
                    expect(ctrl.inline).toBeTruthy();
                });
            });
        });

        describe("Large", () => {
            it("should have default size", () => {
                const ctrl = $componentController("ouiLoader", {
                    $attrs: {}
                }, {
                    size: "l"
                });
                ctrl.$onInit();
                expect(ctrl.size).toEqual("l");
                expect(ctrl.inline).toBeFalsy();
            });
        });
    });
});
