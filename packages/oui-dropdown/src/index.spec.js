describe("ouiDropdown", () => {
    let TestUtils;
    let $document;
    let $timeout;

    beforeEach(angular.mock.module("oui.dropdown"));
    beforeEach(angular.mock.module("oui.test-utils"));

    beforeEach(inject((_TestUtils_, _$document_, _$timeout_) => {
        TestUtils = _TestUtils_;
        $document = _$document_;
        $timeout = _$timeout_;
    }));

    describe("Component", () => {
        it("should display the default trigger", () => {
            const element = TestUtils.compileTemplate(`
                <oui-dropdown>
                  <oui-dropdown-trigger text="TRIGGER"></oui-dropdown-trigger>
                  <oui-dropdown-content>
                    <b>the menu</b>
                  </oui-dropdown-content>
                </oui-dropdown>`
            );

            $timeout.flush();

            const trigger = element[0].querySelector(".oui-dropdown__trigger");
            expect(angular.element(trigger).hasClass("oui-button_dropdown")).toBeTruthy();
        });

        it("should have trigger and dropdown elements but no arrow", () => {
            const element = TestUtils.compileTemplate(`
                <oui-dropdown>
                  <button class="oui-button" oui-dropdown-trigger></button>
                  <div oui-dropdown-content>
                    <b>the menu</b>
                  </div>
                </oui-dropdown>`
            );

            $timeout.flush();

            const trigger = element[0].querySelector("[oui-dropdown-trigger]");
            const dropdown = element[0].querySelector("[oui-dropdown-content]");
            const arrow = element[0].querySelector(".oui-dropdown-menu__arrow");

            expect(angular.element(trigger)
                .hasClass("oui-dropdown__trigger")).toBeTruthy();
            expect(angular.element(dropdown)
                .hasClass("oui-dropdown-menu")).toBeTruthy();
            expect(arrow).toBeFalsy();
        });

        it("should have arrow element", () => {
            const element = TestUtils.compileTemplate(`
                <oui-dropdown arrow>
                  <button class="oui-button" oui-dropdown-trigger></button>
                  <div oui-dropdown-content>
                    <b>the menu</b>
                  </div>
                </oui-dropdown>`
            );

            $timeout.flush();

            const dropdown = element[0].querySelector("[oui-dropdown-content]");
            const $dropdown = angular.element(dropdown);
            const arrow = element[0].querySelector(".oui-dropdown-menu__arrow");

            expect(arrow).toBeTruthy();
            expect($dropdown.hasClass("oui-dropdown-menu_arrow")).toBeTruthy();
        });

        it("should display at bottom with the arrow centered by default", () => {
            const element = TestUtils.compileTemplate(`
                <oui-dropdown arrow>
                  <button class="oui-button" oui-dropdown-trigger></button>
                  <div oui-dropdown-content>
                    <b>the menu</b>
                  </div>
                </oui-dropdown>`
            );

            $timeout.flush();

            const controller = element.controller("ouiDropdown");
            controller.toggle();

            expect(controller.popper.options.placement).toEqual("bottom-start");
            expect(element[0].querySelector("[x-arrow]")).toBeDefined();
        });

        it("should display the dropdown aligned with the left border", () => {
            const element = TestUtils.compileTemplate(`
                <oui-dropdown align="start">
                  <button class="oui-button" oui-dropdown-trigger></button>
                  <div oui-dropdown-content>
                    <b>the menu</b>
                  </div>
                </oui-dropdown>`
            );

            $timeout.flush();

            const controller = element.controller("ouiDropdown");
            controller.toggle();

            expect(controller.popper.options.placement).toEqual("bottom-start");

            // Popper.js must not manage the arrow position in this case.
            expect(element[0].querySelector("[x-arrow]")).toBeNull();
        });

        it("should display the dropdown aligned with the right border", () => {
            const element = TestUtils.compileTemplate(`
                <oui-dropdown align="end">
                  <button class="oui-button" oui-dropdown-trigger></button>
                  <div oui-dropdown-content>
                    <b>the menu</b>
                  </div>
                </oui-dropdown>`
            );

            $timeout.flush();

            const controller = element.controller("ouiDropdown");
            controller.toggle();

            expect(controller.popper.options.placement).toEqual("bottom-end");

            // Popper.js must not manage the arrow position in this case.
            expect(element[0].querySelector("[x-arrow]")).toBeNull();
        });

        describe("Events", () => {
            it("should not be visible", () => {
                const element = TestUtils.compileTemplate(`
                    <oui-dropdown>
                      <button class="oui-button" oui-dropdown-trigger></button>
                      <div oui-dropdown-content>
                        <b>the menu</b>
                      </div>
                    </oui-dropdown>`
                );

                $timeout.flush();

                const trigger = element[0].querySelector("[oui-dropdown-trigger]");
                const $trigger = angular.element(trigger);

                expect($trigger.attr("aria-expanded")).toBe("false");
            });

            it("should display and hide dropdown on click", () => {
                const element = TestUtils.compileTemplate(`
                    <oui-dropdown>
                      <button class="oui-button" oui-dropdown-trigger></button>
                      <div oui-dropdown-content>
                        <b>the menu</b>
                      </div>
                    </oui-dropdown>`
                );

                $timeout.flush();

                const trigger = element[0].querySelector("[oui-dropdown-trigger]");
                const $trigger = angular.element(trigger);

                expect($trigger.attr("aria-expanded")).toBe("false");
                $trigger.triggerHandler("click");
                expect($trigger.attr("aria-expanded")).toBe("true");
                $trigger.triggerHandler("click");
                expect($trigger.attr("aria-expanded")).toBe("false");
                $trigger.triggerHandler("click");
                expect($trigger.attr("aria-expanded")).toBe("true");
                $document.triggerHandler("click");
                expect($trigger.attr("aria-expanded")).toBe("false");
            });
        });
    });
});
