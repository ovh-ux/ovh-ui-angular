describe("ouiField", () => {
    let $timeout;
    let TestUtils;

    beforeEach(angular.mock.module("oui.field"));
    beforeEach(angular.mock.module("oui.checkbox"));
    beforeEach(angular.mock.module("oui.radio"));
    beforeEach(angular.mock.module("oui.test-utils"));

    beforeEach(inject((_$timeout_, _TestUtils_) => {
        $timeout = _$timeout_;
        TestUtils = _TestUtils_;
    }));

    const getField = elt => elt.find("oui-field");
    const getLabel = elt => elt[0].querySelector("label");
    const getError = elt => elt[0].querySelector(".oui-field__error");
    const getHelper = elt => elt[0].querySelector(".oui-field__helper");
    const getControl = (controller, name) => angular.element(controller.controls[name][0]);

    describe("Component", () => {
        describe("with wrong usage", () => {
            it("should throw an error if the form control has no 'name' attribute", () => {
                TestUtils.compileTemplate(`
                    <oui-field label="{{'Lastname'}}">
                        <input
                            class="oui-input"
                            type="text"
                            id="lastname">
                    </oui-field>
                `);

                // Name attribute validation is done on next tick with a $timeout.
                expect(() => $timeout.flush()).toThrow();
            });
        });

        describe("with input", () => {
            it("should decorate the field", () => {
                const element = TestUtils.compileTemplate(`
                    <oui-field label="{{'Lastname'}}">
                        <input
                            class="oui-input"
                            type="text"
                            id="lastname"
                            name="lastname"
                            ng-model="$ctrl.user.lastname">
                    </oui-field>
                `);

                expect(getLabel(element)).toBeDefined();
                expect(getError(element)).toBeDefined();
                expect(getHelper(element)).toBeDefined();
            });

            it("should not show the label tag if no label defined", () => {
                const element = TestUtils.compileTemplate(`
                    <oui-field>
                        <input
                            class="oui-input"
                            type="text"
                            id="lastname"
                            name="lastname"
                            ng-model="$ctrl.user.lastname">
                    </oui-field>
                    `);

                expect(getLabel(element)).toBeNull();
            });

            it("should set the for attribute on label", () => {
                const id = "lastname";

                const element = TestUtils.compileTemplate(`
                    <oui-field label="{{'Lastname'}}">
                        <input
                            class="oui-input"
                            type="text"
                            id="{{ $ctrl.id }}"
                            name="lastname"
                            ng-model="$ctrl.user.lastname">
                    </oui-field>
                    `, {
                        id
                    });

                $timeout.flush();

                expect(getLabel(element).getAttribute("for")).toEqual(id);
            });

            it("should set the name of the form field in the controller", () => {
                const name = "lastname";

                const element = TestUtils.compileTemplate(`
                    <oui-field>
                        <input
                            class="oui-input"
                            type="text"
                            id="lastname"
                            name="{{ $ctrl.name }}"
                            ng-model="$ctrl.user.lastname">
                    </oui-field>
                    `, {
                        name
                    });

                $timeout.flush();

                const controller = element.controller("ouiField");
                expect(Object.keys(controller.controls)).toContain(name);
            });

            it("should be aware of validation parameters set on form control (HTML attributes)", () => {
                const validation = {
                    min: 0,
                    max: 140,
                    minlength: 1,
                    maxlength: 3
                };

                const element = TestUtils.compileTemplate(`
                    <oui-field label="{{'User'}}">
                        <input
                            class="oui-input"
                            type="number"
                            id="age"
                            name="age"
                            ng-model="$ctrl.user.age"
                            min="{{$ctrl.validation.min}}"
                            max="{{$ctrl.validation.max}}">
                        <input
                            class="oui-input"
                            type="text"
                            id="name"
                            name="name"
                            ng-model="$ctrl.user.name"
                            minlength="{{$ctrl.validation.minlength}}"
                            maxlength="{{$ctrl.validation.maxlength}}">
                    </oui-field>
                    `, {
                        validation
                    });

                $timeout.flush();

                const controller = element.controller("ouiField");
                expect(controller.validationParameters.age.min).toEqual(`${validation.min}`);
                expect(controller.validationParameters.age.max).toEqual(`${validation.max}`);
                expect(controller.validationParameters.name.minlength).toEqual(`${validation.minlength}`);
                expect(controller.validationParameters.name.maxlength).toEqual(`${validation.maxlength}`);
            });

            it("should be aware of validation parameters set on form control (NG attributes)", () => {
                const validation = {
                    min: 0,
                    max: 140,
                    minlength: 1,
                    maxlength: 3
                };

                const element = TestUtils.compileTemplate(`
                    <oui-field label="{{'Age'}}">
                        <input
                            class="oui-input"
                            type="number"
                            id="age"
                            name="age"
                            ng-model="$ctrl.user.age"
                            ng-min="{{$ctrl.validation.min}}"
                            ng-max="{{$ctrl.validation.max}}">
                        <input
                            class="oui-input"
                            type="number"
                            id="name"
                            name="name"
                            ng-model="$ctrl.user.name"
                            ng-minlength="{{$ctrl.validation.minlength}}"
                            ng-maxlength="{{$ctrl.validation.maxlength}}">
                    </oui-field>
                    `, {
                        validation
                    });

                $timeout.flush();

                const controller = element.controller("ouiField");
                expect(controller.validationParameters.age.min).toEqual(`${validation.min}`);
                expect(controller.validationParameters.age.max).toEqual(`${validation.max}`);
                expect(controller.validationParameters.name.minlength).toEqual(`${validation.minlength}`);
                expect(controller.validationParameters.name.maxlength).toEqual(`${validation.maxlength}`);
            });

            it("should show the error on blur", () => {
                const element = TestUtils.compileTemplate(`
                    <form name="form">
                        <oui-field label="{{'Age'}}">
                            <input
                                class="oui-input"
                                type="number"
                                id="age"
                                name="age"
                                ng-model="age"
                                required>
                        </oui-field>
                    </form>
                    `);

                $timeout.flush();

                expect(getError(element)).toBeNull();

                const controller = getField(element).controller("ouiField");
                getControl(controller, "age").triggerHandler("blur");

                expect(getError(element)).toBeDefined();
            });

            it("should hide the error on focus, when the field is already in error", () => {
                const element = TestUtils.compileTemplate(`
                    <form name="form">
                        <oui-field label="{{'Age'}}">
                            <input
                                class="oui-input"
                                type="number"
                                id="age"
                                name="age"
                                ng-model="age"
                                required>
                        </oui-field>
                    </form>
                    `);
                const controller = getField(element).controller("ouiField");

                $timeout.flush();

                expect(getError(element)).toBeNull();

                const $control = getControl(controller, "age");
                $control.triggerHandler("blur");
                $control.triggerHandler("focus");
                expect(getError(element)).toBeNull();
            });
        });

        // We assume that if ouiField is able to find the form field,
        // ouiField will also be able to find it's name and id.
        describe("with select", () => {
            it("should detect the select component", () => {
                const element = TestUtils.compileTemplate(`
                    <oui-field label="{{'OS'}}">
                        <label class="oui-select">
                            <select id="os" name="os" class="oui-select__input">
                                <option>Select the OS</option>
                                <option value="freebsd">FreeBSD</option>
                                <option value="linux">Linux</option>
                                <option value="osx">OSX</option>
                                <option value="windows">Windows</option>
                            </select>
                            <i class="oui-icon oui-icon-chevron-down" aria-hidden="true"></i>
                        </label>
                    </oui-field>
                    `);

                $timeout.flush();

                const controller = element.controller("ouiField");
                expect(getControl(controller, "os")).toBeDefined();
            });
        });

        // We assume that if ouiField is able to find the form field,
        // ouiField will also be able to find it's name and id.
        describe("with textarea", () => {
            it("should detect the textarea component", () => {
                const element = TestUtils.compileTemplate(`
                    <oui-field label="{{'OS'}}">
                        <textarea
                            class="oui-textarea"
                            id="description"
                            name="description"
                            ng-model="$ctrl.server.description">
                        </textarea>
                    </oui-field>
                    `);

                $timeout.flush();

                const controller = element.controller("ouiField");
                expect(getControl(controller, "description")).toBeDefined();
            });
        });

        describe("with radio buttons", () => {
            it("should detect all the radio buttons", () => {
                const name = "protocol";

                const element = TestUtils.compileTemplate(`
                    <oui-field>
                        <oui-radio
                            name="{{ $ctrl.name }}"
                            text="HTTP"
                            model="$ctrl.protocol"
                            value="'http'"></oui-radio>
                        <oui-radio
                            name="{{ $ctrl.name }}"
                            text="TCP"
                            model="$ctrl.protocol"
                            value="'tcp'"></oui-radio>
                        <oui-radio
                            name="{{ $ctrl.name }}"
                            text="UDP"
                            model="$ctrl.protocol"
                            value="'udp'"
                            disabled></oui-radio>
                    </oui-field>
                    `, {
                        name
                    });

                $timeout.flush();

                const controller = element.controller("ouiField");

                // There is 3 HTML elements with the same name
                expect(controller.controls[name].length).toEqual(3);
            });
        });

        describe("with checkboxes", () => {
            it("should detect all checkboxes", () => {
                const element = TestUtils.compileTemplate(`
                    <oui-field>
                        <oui-checkbox
                            name="ssl"
                            text="SSL"
                            model="$ctrl.ssl"></oui-checkbox>
                        <oui-checkbox
                            name="hsts"
                            text="HSTS"
                            model="$ctrl.hsts"></oui-checkbox>
                    </oui-field>
                    `);

                $timeout.flush();

                const controller = element.controller("ouiField");
                expect(getControl(controller, "ssl")).toBeDefined();
                expect(getControl(controller, "hsts")).toBeDefined();
            });
        });

    });

});
