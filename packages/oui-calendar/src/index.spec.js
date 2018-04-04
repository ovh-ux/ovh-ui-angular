describe("ouiCalendar", () => {
    let $timeout;
    let testUtils;

    beforeEach(angular.mock.module("oui.calendar"));
    beforeEach(angular.mock.module("oui.calendar.configuration"));
    beforeEach(angular.mock.module("oui.test-utils"));

    beforeEach(inject((_$timeout_, _TestUtils_) => {
        $timeout = _$timeout_;
        testUtils = _TestUtils_;
    }));

    describe("Provider", () => {
        let configuration;

        angular.module("oui.calendar.configuration", [
            "oui.calendar"
        ]).config(ouiCalendarConfigurationProvider => {
            const options = ouiCalendarConfigurationProvider.options;
            options.foo = "bar";

            ouiCalendarConfigurationProvider.setOptions(options);
            ouiCalendarConfigurationProvider.setLocale("fr");
        });

        beforeEach(inject(_ouiCalendarConfiguration_ => {
            configuration = _ouiCalendarConfiguration_;
        }));

        it("should have custom options", () => {
            expect(configuration.options.foo).toEqual("bar");
        });

        it("should have custom locale", () => {
            expect(configuration.locale).toEqual("fr");
        });
    });

    describe("Component", () => {
        it("should add the classname .oui-calendar on the root element", () => {
            const component = testUtils.compileTemplate('<oui-calendar model="$ctrl.model"></oui-calendar>');

            $timeout.flush();

            expect(component.hasClass("oui-calendar")).toBe(true);
        });

        it("should have an attribute id and name on the input, and removed on the root component", () => {
            const component = testUtils.compileTemplate('<oui-calendar id="foo" name="bar" model="$ctrl.model"></oui-calendar>');
            const input = component.find("input");

            $timeout.flush();

            expect(component.attr("id")).toBe(undefined);
            expect(input.attr("id")).toBe("foo");

            expect(component.attr("name")).toBe(undefined);
            expect(input.attr("name")).toBe("bar");
        });

        it("should set the picker static", () => {
            const component = testUtils.compileTemplate('<oui-calendar model="$ctrl.model" static></oui-calendar>');
            const controller = component.controller("ouiCalendar");

            expect(controller.options.static).toBe(true);
        });

        it("should set the picker inline", () => {
            const component = testUtils.compileTemplate('<oui-calendar model="$ctrl.model" inline></oui-calendar>');
            const controller = component.controller("ouiCalendar");

            expect(controller.options.inline).toBe(true);
        });

        it("should have disabled the input", () => {
            const component = testUtils.compileTemplate('<oui-calendar model="$ctrl.model" disabled></oui-calendar>');
            const input = component.find("input");

            expect(input.attr("disabled")).toBe("disabled");
        });

        it("should have required the input", () => {
            const component = testUtils.compileTemplate('<oui-calendar model="$ctrl.model" required></oui-calendar>');
            const input = component.find("input");

            expect(input.attr("required")).toBe("required");
        });

        it("should have a placeholder on the input", () => {
            const component = testUtils.compileTemplate('<oui-calendar model="$ctrl.model" placeholder="foo"></oui-calendar>');
            const input = component.find("input");

            expect(input.attr("placeholder")).toBe("foo");
        });

        it("should update value of an option with the method 'setOptionsProperty()'", () => {
            const component = testUtils.compileTemplate('<oui-calendar model="$ctrl.model"></oui-calendar>');
            const ctrl = component.controller("ouiCalendar");

            ctrl.setOptionsProperty("foo", "bar");
            expect(ctrl.options.foo).toBe("bar");
        });

        it("should change the value formatting of the model and the input", () => {
            const format = "d-m-Y";
            const altFormat = "F j, Y";
            const component = testUtils.compileTemplate(`<oui-calendar model="$ctrl.model"
                format="${format}"
                alt-format="${altFormat}">
            </oui-calendar>`, {
                model: "today"
            });
            const ctrl = component.controller("ouiCalendar");
            const formatDate = ctrl.flatpickr.formatDate(new Date(), format);
            const altFormatDate = ctrl.flatpickr.formatDate(new Date(), altFormat);
            const inputs = component.find("input");

            expect(ctrl.options.dateFormat).toBe(format);
            expect(ctrl.options.altInput).toBe(true);
            expect(ctrl.options.altFormat).toBe(altFormat);
            expect(inputs.length).toBe(2);
            expect(inputs.eq(0).val()).toBe(formatDate);
            expect(inputs.eq(1).val()).toBe(altFormatDate);
        });

        it("should update event hooks with the method 'setEventHooks'", () => {
            const component = testUtils.compileTemplate('<oui-calendar model="$ctrl.model"></oui-calendar>');
            const ctrl = component.controller("ouiCalendar");

            ctrl.setEventHooks(["foo"]);
            expect(typeof ctrl.options.foo).toBe("function");
        });

        it("should call function of events attributes", () => {
            const onChangeSpy = jasmine.createSpy("onChangeSpy");
            const onCloseSpy = jasmine.createSpy("onCloseSpy");
            const onOpenSpy = jasmine.createSpy("onOpenSpy");
            const component = testUtils.compileTemplate(`<oui-calendar model="$ctrl.model"
                on-change="$ctrl.onChangeSpy(selectedDates, dateStr)"
                on-close="$ctrl.onCloseSpy(selectedDates, dateStr)"
                on-open="$ctrl.onOpenSpy(selectedDates, dateStr)">
            </oui-calendar>`, {
                onChangeSpy,
                onCloseSpy,
                onOpenSpy
            });
            const ctrl = component.controller("ouiCalendar");
            const today = ctrl.flatpickr.parseDate("today", ctrl.options.dateFormat);

            ctrl.setModelValue(today);
            expect(onChangeSpy).toHaveBeenCalledWith([today], ctrl.model);
            ctrl.flatpickr.open();
            expect(onOpenSpy).toHaveBeenCalledWith([today], ctrl.model);
            ctrl.flatpickr.close();
            expect(onOpenSpy).toHaveBeenCalledWith([today], ctrl.model);
        });

        // it("should set the value to today's date when 'today' button is clicked", () => {
        //     const component = testUtils.compileTemplate('<oui-calendar model="$ctrl.model"></oui-calendar>');
        //     const ctrl = component.controller("ouiCalendar");
        //     const button = component.find("button").eq(0);
        //     const today = ctrl.flatpickr.formatDate(new Date(), ctrl.options.dateFormat);

        //     button.triggerHandler("click");
        //     expect(ctrl.model).toBe(today);
        // });

        // it("should reset the value when 'reset' button is clicked", () => {
        //     const component = testUtils.compileTemplate('<oui-calendar model="$ctrl.model"></oui-calendar>', {
        //         model: "today"
        //     });
        //     const ctrl = component.controller("ouiCalendar");
        //     const button = component.find("button").eq(1);

        //     button.triggerHandler("click");
        //     expect(ctrl.model).toBe("");
        // });
    });
});
