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

    const getLabel = elt => elt[0].querySelector("label");
    const getError = elt => elt[0].querySelector(".oui-field__error");
    const getHelper = elt => elt[0].querySelector(".oui-field__helper");

    describe("Component", () => {
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
                expect(controller.name).toEqual(name);
            });
        });

        // We assume that if ouiField is able to find the form field,
        // ouiField will also be able to find it's name and id.
        describe("with select", () => {
            it("should find the select component", () => {
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
                expect(controller.$control).toBeDefined();
            });
        });

        // We assume that if ouiField is able to find the form field,
        // ouiField will also be able to find it's name and id.
        describe("with textarea", () => {
            it("should find the select component", () => {
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
                expect(controller.$control).toBeDefined();
            });
        });

        describe("with radio buttons", () => {
            it("should set the name of the radios in the controller", () => {
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
                expect(controller.name).toEqual(name);
            });
        });

        xdescribe("with checkboxes", () => {
            it("should not set any name of the checkboxes in the controller", () => {
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
                expect(controller.name).toBeUndefined();
            });
        });

    });

});
