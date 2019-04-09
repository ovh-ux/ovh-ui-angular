describe("ouiPopover", () => {
    let $timeout;
    let testUtils;

    beforeEach(angular.mock.module("oui.popover"));
    beforeEach(angular.mock.module("oui.test-utils"));

    beforeEach(inject((_$timeout_, _TestUtils_) => {
        $timeout = _$timeout_;
        testUtils = _TestUtils_;
    }));

    describe("Directive", () => {
        describe("oui-popover", () => {
            it("should create a popover, next to the trigger, with the attribute value as text", () => {
                const component = testUtils.compileTemplate('<div><button class="trigger" oui-popover="foo"></button></div>');

                $timeout.flush();

                const popover = angular.element(component[0].querySelector(".trigger")).next();

                expect(popover.length).toBe(1);
                expect(popover.hasClass("oui-popover")).toBe(true);
                expect(popover.text().trim()).toBe("foo");
            });

            it("should create a popover, next to the trigger, with the attribute value as text", () => {
                const component = testUtils.compileTemplate('<div><button class="trigger" title="foo" oui-popover></button></div>');

                $timeout.flush();

                const popover = angular.element(component[0].querySelector(".trigger")).next();

                expect(popover.length).toBe(1);
                expect(popover.hasClass("oui-popover")).toBe(true);
                expect(popover.text().trim()).toBe("foo");
            });

            it("should position the popover with right direction when trigger is clicked, if there is no placement defined", () => {
                const component = testUtils.compileTemplate('<div><button class="trigger" oui-popover="foo"></button></div>');

                $timeout.flush();

                const trigger = angular.element(component[0].querySelector(".trigger")).triggerHandler("click");
                const popover = trigger.next();

                expect(popover.attr("x-placement")).toBe("right");
            });


            it("should position the popover with placement attribute value, when trigger is clicked", () => {
                const component = testUtils.compileTemplate('<div><button class="trigger" oui-popover="foo" oui-popover-placement="bottom-start"></button></div>');

                $timeout.flush();

                const trigger = angular.element(component[0].querySelector(".trigger")).triggerHandler("click");
                const popover = trigger.next();

                expect(popover.attr("x-placement")).toBe("bottom-start");
            });

            it("should create a popover, next to the trigger, with the content of the template", () => {
                const foo = "bar";
                const component = testUtils.compileTemplate(`<div>
                    <button class="trigger" oui-popover oui-popover-template="popover.html"></button>
                    <script type="text/ng-template" id="popover.html">${foo}</script>
                    </div>`);

                $timeout.flush();

                const popover = angular.element(component[0].querySelector(".trigger")).next();

                expect(popover.text().trim()).toBe(foo);
            });

            it("should extend the scope of the template", () => {
                const foo = "bar";
                const component = testUtils.compileTemplate(`<div>
                    <button class="trigger" oui-popover oui-popover-template="popover.html" oui-popover-scope="$ctrl"></button>
                    <script type="text/ng-template" id="popover.html"><span ng-bind="$ctrl.foo"></span></script>
                    </div>`, {
                    foo
                });

                $timeout.flush();

                const popover = angular.element(component[0].querySelector(".trigger")).next();

                expect(popover.text().trim()).toBe(foo);
            });

            it("should set aria-expanded when trigger is clicked", () => {
                const component = testUtils.compileTemplate('<div><button class="trigger" oui-popover="foo"></button></div>');

                $timeout.flush();

                const trigger = angular.element(component[0].querySelector(".trigger"));
                expect(trigger.attr("aria-expanded")).toBe("false");

                trigger.triggerHandler("click");
                expect(trigger.attr("aria-expanded")).toBe("true");

                trigger.triggerHandler("click");
                expect(trigger.attr("aria-expanded")).toBe("false");
            });

            it("should open the popover if specified", () => {
                const component = testUtils.compileTemplate(
                    `<div>
                      <button class="trigger" oui-popover="foo" oui-popover-open="$ctrl.open"></button>
                    </div>`, {
                        open: true
                    }
                );

                $timeout.flush();

                const trigger = angular.element(component[0].querySelector(".trigger"));
                expect(trigger.attr("aria-expanded")).toBe("true");

                component.scope().$ctrl.open = false;
                component.scope().$apply();

                expect(trigger.attr("aria-expanded")).toBe("false");
            });

            it("should not register event handler on trigger element if open is specified", () => {
                const component = testUtils.compileTemplate('<div><button class="trigger" oui-popover="foo" oui-popover-open="false"></button></div>');

                $timeout.flush();

                const trigger = angular.element(component[0].querySelector(".trigger")).triggerHandler("click");
                const popover = trigger.next();

                expect(popover.attr("x-placement")).toBe(undefined);
            });

            it("should trigger on-open and on-close", () => {
                const openSpy = jasmine.createSpy("open");
                const closeSpy = jasmine.createSpy("close");
                const component = testUtils.compileTemplate(
                    `<div>
                      <button class="trigger" oui-popover="foo" oui-popover-on-open="$ctrl.open()" oui-popover-on-close="$ctrl.close()"></button>
                    </div>`, {
                        open: openSpy,
                        close: closeSpy
                    }
                );

                $timeout.flush();
                angular.element(component[0].querySelector(".trigger")).triggerHandler("click");
                $timeout.flush();

                expect(openSpy).toHaveBeenCalled();
                expect(openSpy.calls.count()).toEqual(1);

                angular.element(component[0].querySelector(".trigger")).triggerHandler("click");
                $timeout.flush();

                expect(closeSpy).toHaveBeenCalled();
                expect(closeSpy.calls.count()).toEqual(1);
            });
        });

        describe("Deprecated support", () => {
            it("should display the trigger with correct class name", () => {
                const element = testUtils.compileTemplate(`
                    <oui-popover>
                      <button type="button" oui-popover-trigger>Popover trigger</button>
                      <oui-popover-content>
                        <b>Popover content</b>
                      </oui-popover-content>
                    </oui-popover>`
                );

                $timeout.flush();

                const trigger = element[0].querySelector("[oui-popover-trigger]");
                expect(angular.element(trigger).hasClass("oui-popover__trigger")).toBeTruthy();
            });

            it("should display at right with arrow by default", () => {
                const element = testUtils.compileTemplate(`
                    <oui-popover>
                      <button type="button" oui-popover-trigger></button>
                      <div oui-popover-content>
                        <b>Popover content</b>
                      </div>
                    </oui-popover>`
                );

                $timeout.flush();

                const controller = element.controller("ouiPopover");
                controller.openPopover();

                expect(controller.popper.options.placement).toEqual("right");
                expect(element[0].querySelector("[x-arrow]")).toBeDefined();
            });

            it("should display the popover at bottom aligned the left border", () => {
                const element = testUtils.compileTemplate(`
                    <oui-popover placement="bottom-start">
                      <button class="oui-button" oui-popover-trigger></button>
                      <div oui-popover-content>
                        <b>Popover content</b>
                      </div>
                    </oui-popover>`
                );

                $timeout.flush();

                const controller = element.controller("ouiPopover");
                controller.openPopover();

                expect(controller.popper.options.placement).toEqual("bottom-start");
            });

            it("should set aria-expanded when trigger is clicked", () => {
                const element = testUtils.compileTemplate(`
                    <oui-popover>
                      <button type="button" oui-popover-trigger>Popover trigger</button>
                      <oui-popover-content>
                        <b>Popover content</b>
                      </oui-popover-content>
                    </oui-popover>`
                );

                $timeout.flush();

                const trigger = angular.element(element[0].querySelector("[oui-popover-trigger]"));
                expect(trigger.attr("aria-expanded")).toBe("false");

                trigger.triggerHandler("click");
                expect(trigger.attr("aria-expanded")).toBe("true");

                trigger.triggerHandler("click");
                expect(trigger.attr("aria-expanded")).toBe("false");
            });
        });
    });
});
