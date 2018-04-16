import data from "./index.spec.data";
import { uniq } from "lodash";

describe("ouiSelect", () => {
    let TestUtils;
    let $document;
    let $timeout;

    beforeEach(angular.mock.module("oui.select"));
    beforeEach(angular.mock.module("oui.test-utils"));

    beforeEach(inject((_TestUtils_, _$document_, _$timeout_) => {
        TestUtils = _TestUtils_;
        $document = _$document_;
        $timeout = _$timeout_;
    }));

    const openClass = "oui-ui-select-container_open";
    const selectedItemClass = "selected";

    const getContainer = element => element[0].querySelector(".oui-ui-select-container");
    const getDropdownButton = element => element[0].querySelector(".oui-button_dropdown");
    const getDropdown = element => element[0].querySelector(".ui-select-choices-content");
    const getItemsGroups = element => element[0].querySelectorAll(".ui-select-choices-group");
    const getItemsGroup = (element, index) => element[0].querySelectorAll(".ui-select-choices-group")[index];
    const getItemsGroupLabel = groupElement => groupElement.querySelector(".ui-select-choices-group-label");
    const getDropdownItems = element => element[0].querySelectorAll(".ui-select-choices-row");
    const getDropdownItem = (element, index) => element[0].querySelectorAll(".ui-select-choices-row")[index];

    describe("Component", () => {
        it("should display the select component", () => {
            const title = "Select a country";
            const placeholder = "Select a country...";

            const element = TestUtils.compileTemplate(`
                <oui-select name="country"
                    model="$ctrl.country"
                    data-title="${title}"
                    placeholder="${placeholder}"
                    items="$ctrl.countries"
                    match="name"
                    data-align="start">
                    <span ng-bind="$item.name"></span>
                </oui-select>`, {
                countries: data
            });

            expect(angular.element(getContainer(element)).attr("title")).toEqual(title);
            expect(angular.element(getDropdownButton(element)).text()).toContain(placeholder);
            expect(getDropdownButton(element)).toBeDefined();
            expect(getDropdown(element)).toBeDefined();
        });

        it("should open dropdown when trigger button is clicked", () => {
            const element = TestUtils.compileTemplate(`
                <oui-select name="country"
                    model="$ctrl.country"
                    data-title="Select a country"
                    placeholder="Select a country..."
                    items="$ctrl.countries"
                    match="name"
                    data-align="start">
                    <span ng-bind="$item.name"></span>
                </oui-select>`, {
                countries: data
            });

            const $container = angular.element(getContainer(element));
            const $triggerButton = angular.element(getDropdownButton(element));

            // The dropdown should be initially closed.
            expect($container.hasClass(openClass)).toBeFalsy();

            // Click on the trigger and check if it's open.
            $triggerButton.triggerHandler("click");
            expect($container.hasClass(openClass)).toBeTruthy();

            $triggerButton.triggerHandler("click");
            expect($container.hasClass(openClass)).toBeFalsy();
        });

        it("should close the dropdown on click outside it", () => {
            const element = TestUtils.compileTemplate(`
                <div>
                    <oui-select name="country"
                        model="$ctrl.country"
                        data-title="Select a country"
                        placeholder="Select a country..."
                        items="$ctrl.countries"
                        match="name"
                        data-align="start">
                        <span ng-bind="$item.name"></span>
                    </oui-select>
                    <button class="outside-button">Outside</button>
                </div>`, {
                countries: data
            });

            const $container = angular.element(getContainer(element));
            const $triggerButton = angular.element(getDropdownButton(element));
            const outsideElement = element[0].querySelector(".outside-button");

            // Open dropdown.
            $triggerButton.triggerHandler("click");

            // Close the dropdown by clicking outside the dropdown.
            $document.triggerHandler({ type: "click", target: outsideElement });
            expect($container.hasClass(openClass)).toBeFalsy();
        });

        describe("Single select", () => {
            it("should open dropdown when trigger button is clicked", () => {
                const element = TestUtils.compileTemplate(`
                    <oui-select name="country"
                        model="$ctrl.country"
                        data-title="Select a country"
                        placeholder="Select a country..."
                        items="$ctrl.countries"
                        match="name"
                        data-align="start">
                        <span ng-bind="$item.name"></span>
                    </oui-select>`, {
                    countries: data
                });

                const $container = angular.element(getContainer(element));
                const $triggerButton = angular.element(getDropdownButton(element));

                expect($container.hasClass(openClass)).toBeFalsy();

                // Open the dropdown
                $triggerButton.triggerHandler("click");

                // Select 5th element and check if it's highlighted.
                let $itemButton = angular.element(getDropdownItem(element, 4));
                expect($itemButton.hasClass(selectedItemClass)).toBeFalsy();
                $itemButton.triggerHandler("click");
                expect($itemButton.hasClass(selectedItemClass)).toBeTruthy();

                // By the way, the dropdown should have been closed.
                expect($container.hasClass(openClass)).toBeFalsy();

                // Reopen dropdown and check if the selected element is highlighted.
                // The element is retrieved again to be sure to not test on a detached element.
                $itemButton = angular.element(getDropdownItem(element, 4));
                expect($itemButton.hasClass(selectedItemClass)).toBeTruthy();
            });
        });

        describe("Not grouped", () => {
            it("should display all the choices (objectArray)", () => {
                const element = TestUtils.compileTemplate(`
                    <oui-select name="country"
                        model="$ctrl.country"
                        data-title="Select a country"
                        placeholder="Select a country..."
                        items="$ctrl.countries"
                        match="name"
                        data-align="start">
                        <span ng-bind="$item.name"></span>
                    </oui-select>`, {
                    countries: data
                });

                expect(getDropdownItems(element).length).toEqual(data.length);
                expect(angular.element(getDropdownItem(element, 0)).text()).toContain(data[0].name);
                expect(angular.element(getDropdownItem(element, data.length - 1)).text()).toContain(data[data.length - 1].name);
                expect(getItemsGroups(element).length).toEqual(1);
            });

            it("should display all the choices (stringArray)", () => {
                const stringArray = ["a", "b", "c"];
                const element = TestUtils.compileTemplate(`
                    <oui-select name="country"
                        data-title="Select a country"
                        model="$ctrl.country"
                        items="$ctrl.array"
                        data-align="start">
                        <span ng-bind="$item"></span>
                    </oui-select>`, {
                    array: stringArray
                });

                expect(getDropdownItems(element).length).toEqual(stringArray.length);
                expect(angular.element(getDropdownItem(element, 0)).text()).toContain(stringArray[0]);
                expect(angular.element(getDropdownItem(element, stringArray.length - 1)).text()).toContain(stringArray[stringArray.length - 1]);
                expect(getItemsGroups(element).length).toEqual(1);
            });
        });

        describe("Grouped", () => {
            it("should display all the choices", () => {
                const groupByFirstLetter = (item) => item.name.substr(0, 1).toUpperCase();
                const element = TestUtils.compileTemplate(`
                    <oui-select name="country"
                        model="$ctrl.country"
                        data-title="Select a country"
                        placeholder="Select a country..."
                        items="$ctrl.countries"
                        match="name"
                        group-by="$ctrl.groupByFirstLetter"
                        data-align="start">
                        <span ng-bind="$item.name"></span>
                    </oui-select>`, {
                    countries: data,
                    groupByFirstLetter
                });

                const groups = uniq(data.map(groupByFirstLetter));
                const firstGroupElement = getItemsGroup(element, 0);
                const lastGroupElement = getItemsGroup(element, groups.length - 1);

                expect(getDropdownItems(element).length).toEqual(data.length);
                expect(angular.element(getItemsGroupLabel(firstGroupElement)).text()).toContain(groups[0]);
                expect(angular.element(getItemsGroupLabel(lastGroupElement)).text()).toContain(groups[groups.length - 1]);
                expect(getItemsGroups(element).length).toEqual(groups.length);
            });
        });

        describe("Blur on dropdown trigger", () => {
            it("should call onBlur callback", () => {
                const onBlur = jasmine.createSpy();
                const element = TestUtils.compileTemplate(`
                    <oui-select name="country"
                        model="$ctrl.country"
                        data-title="Select a country"
                        placeholder="Select a country..."
                        items="$ctrl.countries"
                        match="name"
                        on-blur="$ctrl.onBlur()">
                        <span ng-bind="$item.name"></span>
                    </oui-select>`, {
                    onBlur
                });

                angular.element(getDropdownButton(element)).triggerHandler("blur");
                expect(onBlur).toHaveBeenCalled();
            });
        });

        describe("Focus on dropdown trigger", () => {
            it("should call onFocus callback", () => {
                const onFocus = jasmine.createSpy();
                const element = TestUtils.compileTemplate(`
                    <oui-select name="country"
                        model="$ctrl.country"
                        data-title="Select a country"
                        placeholder="Select a country..."
                        items="$ctrl.countries"
                        match="name"
                        on-focus="$ctrl.onFocus()">
                        <span ng-bind="$item.name"></span>
                    </oui-select>`, {
                    onFocus
                });

                angular.element(getDropdownButton(element)).triggerHandler("focus");
                expect(onFocus).toHaveBeenCalled();
            });
        });

        describe("Change on dropdown trigger", () => {
            it("should call onChange callback", () => {
                const onChange = jasmine.createSpy();
                const element = TestUtils.compileTemplate(`
                    <oui-select name="country"
                        model="$ctrl.country"
                        data-title="Select a country"
                        placeholder="Select a country..."
                        items="$ctrl.countries"
                        match="name"
                        on-change="$ctrl.onChange(modelValue)">
                        <span ng-bind="$item.name"></span>
                    </oui-select>`, {
                    countries: data,
                    onChange
                });

                let $itemButton = angular.element(getDropdownItem(element, 4));
                $itemButton.triggerHandler("click");
                $timeout.flush();
                expect(onChange).toHaveBeenCalledWith(data[4]);

                $itemButton = angular.element(getDropdownItem(element, 10));
                $itemButton.triggerHandler("click");
                $timeout.flush();
                expect(onChange).toHaveBeenCalledWith(data[10]);
            });
        });
    });
});
