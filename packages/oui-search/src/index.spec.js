describe("ouiSearch", () => {
    let $timeout;
    let testUtils;

    const goodSearchText = "aa";
    const tooShortSearchText = "a";

    beforeEach(angular.mock.module("oui.search"));
    beforeEach(angular.mock.module("oui.criteria-container"));
    beforeEach(angular.mock.module("oui.test-utils"));

    beforeEach(inject((_$timeout_, _TestUtils_) => {
        $timeout = _$timeout_;
        testUtils = _TestUtils_;
    }));

    describe("Component", () => {
        it("should display a form with an text input, a reset button and a submit button", () => {
            const component = testUtils.compileTemplate('<oui-search model="foo"></oui-search>');
            const form = component.find("form");
            const input = component.find("input");
            const buttons = component.find("button");
            const reset = buttons.eq(0);
            const submit = buttons.eq(1);

            expect(form.length).toBe(1);
            expect(input.length).toBe(1);
            expect(input.attr("type")).toBe("text");
            expect(buttons.length).toBe(2);
            expect(reset.attr("type")).toBe("reset");
            expect(submit.attr("type")).toBe("submit");
        });

        it("should have an attribute id and name on the input, and removed on the root component", () => {
            const component = testUtils.compileTemplate('<oui-search id="foo" name="bar"></oui-search>');
            const input = component.find("input");

            $timeout.flush();

            expect(component.attr("id")).toBe(undefined);
            expect(input.attr("id")).toBe("foo");

            expect(component.attr("name")).toBe(undefined);
            expect(input.attr("name")).toBe("bar");
        });

        it("should have an attribute aria-label on the input, and removed on the root component", () => {
            const component = testUtils.compileTemplate('<oui-search aria-label="foo"></oui-search>');

            $timeout.flush();

            expect(component.attr("aria-label")).toBe(undefined);
            expect(component.find("input").eq(0).attr("aria-label")).toBe("foo");
        });

        it("should have disabled all inputs", () => {
            const component = testUtils.compileTemplate("<oui-search disabled></oui-search>");
            const input = component.find("button");
            const buttons = component.find("button");

            expect(input.attr("disabled")).toBe("disabled");
            expect(buttons.attr("disabled")).toBe("disabled");
        });

        it("should call function of onChange attribute, when input value has changed, with the model value", () => {
            const onChangeSpy = jasmine.createSpy("onChangeSpy");
            const component = testUtils.compileTemplate('<oui-search model="$ctrl.modelTest" on-change="$ctrl.onChangeSpy(modelValue)"></oui-search>', {
                modelTest: "foo",
                onChangeSpy
            });

            const input = component.find("input");
            input.val("bar");
            input.triggerHandler("input");
            expect(onChangeSpy).toHaveBeenCalledWith("bar");
        });

        it("should call function of onReset attribute, when reset button is clicked", () => {
            const onResetSpy = jasmine.createSpy("onResetSpy");
            const component = testUtils.compileTemplate('<oui-search model="$ctrl.modelTest" on-reset="$ctrl.onResetSpy()"></oui-search>', {
                modelTest: "foo",
                onResetSpy
            });

            component.find("button").eq(0).triggerHandler("click");
            expect(onResetSpy).toHaveBeenCalled();
        });

        it("should call function of onSubmit attribute, when form is submitted, with the model value", () => {
            const onSubmitSpy = jasmine.createSpy("onSubmitSpy");
            const component = testUtils.compileTemplate('<oui-search model="$ctrl.modelTest" on-submit="$ctrl.onSubmitSpy(modelValue)"></oui-search>', {
                modelTest: "foo",
                onSubmitSpy
            });

            component.find("form").triggerHandler("submit");
            expect(onSubmitSpy).toHaveBeenCalledWith("foo");
        });
    });

    describe("With criteria container", () => {
        describe("on submit", () => {
            it("should add criterion in criteria container", () => {
                const searchText = goodSearchText;
                const onChangeSpy = jasmine.createSpy();
                const element = testUtils.compileTemplate(`
                    <oui-criteria-container on-change="$ctrl.onChangeSpy(modelValue)">
                        <oui-search model="$ctrl.searchText"></oui-search>
                    </oui-criteria-container>
                `, {
                    searchText,
                    onChangeSpy
                });

                element.find("form").triggerHandler("submit");
                expect(onChangeSpy).toHaveBeenCalledWith([{
                    property: null,
                    operator: "contains",
                    value: searchText
                }]);
            });

            it("should not add criterion in criteria container if the text is too short", () => {
                const searchText = tooShortSearchText;
                const onChangeSpy = jasmine.createSpy();
                const element = testUtils.compileTemplate(`
                    <oui-criteria-container on-change="$ctrl.onChangeSpy(modelValue)">
                        <oui-search model="$ctrl.searchText"></oui-search>
                    </oui-criteria-container>
                `, {
                    searchText,
                    onChangeSpy
                });

                element.find("form").triggerHandler("submit");
                expect(onChangeSpy).not.toHaveBeenCalled();
            });
        });

        describe("on change", () => {
            it("should add criterion in criteria container", () => {
                const onChangeSpy = jasmine.createSpy();
                const element = testUtils.compileTemplate(`
                    <oui-criteria-container on-change="$ctrl.onChangeSpy(modelValue)">
                        <oui-search model="$ctrl.searchText"></oui-search>
                    </oui-criteria-container>
                `, {
                    onChangeSpy
                });

                const input = element.find("input");
                input.val(goodSearchText);
                input.triggerHandler("input");
                expect(onChangeSpy).toHaveBeenCalledWith([{
                    property: null,
                    operator: "contains",
                    value: goodSearchText,
                    preview: true
                }]);
            });

            it("should not add criterion in criteria container if text is too short", () => {
                const onChangeSpy = jasmine.createSpy();
                const element = testUtils.compileTemplate(`
                    <oui-criteria-container on-change="$ctrl.onChangeSpy(modelValue)">
                        <oui-search model="$ctrl.searchText"></oui-search>
                    </oui-criteria-container>
                `, {
                    onChangeSpy
                });

                const input = element.find("input");
                input.val(tooShortSearchText);
                input.triggerHandler("input");
                expect(onChangeSpy).not.toHaveBeenCalled();
            });

            it("should delete preview criterion if search becomes too short", () => {
                const onChangeSpy = jasmine.createSpy();
                const element = testUtils.compileTemplate(`
                    <oui-criteria-container on-change="$ctrl.onChangeSpy(modelValue)">
                        <oui-search model="$ctrl.searchText"></oui-search>
                    </oui-criteria-container>
                `, {
                    onChangeSpy
                });

                const input = element.find("input");

                // Add preview criterion.
                input.val(goodSearchText);
                input.triggerHandler("input");
                expect(onChangeSpy).toHaveBeenCalledWith([{
                    property: null,
                    operator: "contains",
                    value: goodSearchText,
                    preview: true
                }]);

                input.val(tooShortSearchText);
                input.triggerHandler("input");
                expect(onChangeSpy).toHaveBeenCalledWith([]);
            });
        });

        describe("on reset", () => {
            it("should delete preview criterion", () => {
                const onChangeSpy = jasmine.createSpy();
                const element = testUtils.compileTemplate(`
                    <oui-criteria-container on-change="$ctrl.onChangeSpy(modelValue)">
                        <oui-search model="$ctrl.searchText"></oui-search>
                    </oui-criteria-container>
                `, {
                    onChangeSpy
                });

                const input = element.find("input");
                const resetButton = element.find("button").eq(0);

                // Add preview criterion.
                input.val(goodSearchText);
                input.triggerHandler("input");
                expect(onChangeSpy).toHaveBeenCalledWith([{
                    property: null,
                    operator: "contains",
                    value: goodSearchText,
                    preview: true
                }]);

                resetButton.triggerHandler("click");
                expect(onChangeSpy).toHaveBeenCalledWith([]);
            });
        });
    });
});
