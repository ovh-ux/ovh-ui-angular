describe("ouiPopover", () => {
    let TestUtils;

    beforeEach(angular.mock.module("oui.popover"));
    beforeEach(angular.mock.module("oui.test-utils"));

    beforeEach(inject((_TestUtils_) => {
        TestUtils = _TestUtils_;
    }));

    describe("Component", () => {
        it("should display the trigger with correct class name", () => {
            const element = TestUtils.compileTemplate(`
                <oui-popover>
                  <button type="button" oui-popover-trigger>Popover trigger</button>
                  <oui-popover-content>
                    <b>Popover content</b>
                  </oui-popover-content>
                </oui-popover>`
            );

            const trigger = element[0].querySelector("[oui-popover-trigger]");
            expect(angular.element(trigger).hasClass("oui-popover__trigger")).toBeTruthy();
        });

        it("should display at right with arrow by default", () => {
            const element = TestUtils.compileTemplate(`
                <oui-popover>
                  <button type="button" oui-popover-trigger></button>
                  <div oui-popover-content>
                    <b>Popover content</b>
                  </div>
                </oui-popover>`
            );

            const controller = element.controller("ouiPopover");
            controller.openPopover();

            expect(controller.popper.options.placement).toEqual("right");
            expect(element[0].querySelector("[x-arrow]")).toBeDefined();
        });

        it("should display the popover at bottom aligned the left border", () => {
            const element = TestUtils.compileTemplate(`
                <oui-popover placement="bottom-start">
                  <button class="oui-button" oui-popover-trigger></button>
                  <div oui-popover-content>
                    <b>Popover content</b>
                  </div>
                </oui-popover>`
            );

            const controller = element.controller("ouiPopover");
            controller.openPopover();

            expect(controller.popper.options.placement).toEqual("bottom-start");
        });

        describe("Events", () => {
            it("should not be visible", () => {
                const element = TestUtils.compileTemplate(`
                    <oui-popover>
                      <button class="oui-button" oui-popover-trigger></button>
                      <div oui-popover-content>
                        <b>Popover content</b>
                      </div>
                    </oui-popover>`
                );

                const popover = element[0].querySelector("[oui-popover-content]").parentNode;
                const $popover = angular.element(popover);

                expect($popover.hasClass("oui-popover_active")).toBeFalsy();
            });

            it("should display and hide popover on click", () => {
                const element = TestUtils.compileTemplate(`
                    <oui-popover>
                      <button class="oui-button" oui-popover-trigger></button>
                      <div oui-popover-content>
                        <b>Popover content</b>
                      </div>
                    </oui-popover>`
                );

                const rootElement = element[0].querySelector(".oui-popover");
                const $rootElement = angular.element(rootElement);
                const trigger = element[0].querySelector("[oui-popover-trigger]");
                const $trigger = angular.element(trigger);
                const closeButton = element[0].querySelector(".oui-popover__close-button");
                const $closeButton = angular.element(closeButton);

                expect($rootElement.hasClass("oui-popover_active")).toBeFalsy();
                $trigger.triggerHandler("click");
                expect($rootElement.hasClass("oui-popover_active")).toBeTruthy();
                $trigger.triggerHandler("click");
                expect($rootElement.hasClass("oui-popover_active")).toBeFalsy();
                $trigger.triggerHandler("click");
                expect($rootElement.hasClass("oui-popover_active")).toBeTruthy();
                $closeButton.triggerHandler("click");
                expect($rootElement.hasClass("oui-popover_active")).toBeFalsy();
            });
        });
    });
});
