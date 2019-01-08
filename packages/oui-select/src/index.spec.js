import data from "./index.spec.data";
import uniq from "lodash/uniq";

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

    const selectedItemClass = "ui-select-choices-row_selected";

    const getContainer = element => element[0].querySelector(".ui-select-container");
    const getDropdownButton = element => element[0].querySelector(".ui-select-match");
    const getMultipleDropdownButton = element => element[0].querySelector(".ui-select-match-container");
    const getMultipleMatchItem = element => element[0].querySelectorAll(".ui-select-match-item");
    const getDropdown = element => element[0].querySelector(".ui-select-choices-content");
    const getFocusser = element => element[0].querySelector(".ui-select-focusser");
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
                    title="${title}"
                    placeholder="${placeholder}"
                    items="$ctrl.countries"
                    match="name">
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
                    title="Select a country"
                    placeholder="Select a country..."
                    items="$ctrl.countries"
                    match="name">
                </oui-select>`, {
                countries: data
            });

            const $triggerButton = angular.element(getDropdownButton(element));

            // The dropdown should be initially closed.
            expect($triggerButton.attr("aria-expanded")).toBe("false");

            // Click on the trigger and check if it's open.
            $triggerButton.triggerHandler("click");
            expect($triggerButton.attr("aria-expanded")).toBe("true");

            $triggerButton.triggerHandler("click");
            expect($triggerButton.attr("aria-expanded")).toBe("false");
        });

        it("should close the dropdown on click outside it", () => {
            const element = TestUtils.compileTemplate(`
                <div>
                    <oui-select name="country"
                        model="$ctrl.country"
                        title="Select a country"
                        placeholder="Select a country..."
                        items="$ctrl.countries"
                        match="name">
                        <span ng-bind="$item.name"></span>
                    </oui-select>
                    <button class="outside-button">Outside</button>
                </div>`, {
                countries: data
            });

            const $triggerButton = angular.element(getDropdownButton(element));
            const outsideElement = element[0].querySelector(".outside-button");

            // Open dropdown.
            $triggerButton.triggerHandler("click");

            // Close the dropdown by clicking outside the dropdown.
            $document.triggerHandler({ type: "click", target: outsideElement });
            expect($triggerButton.attr("aria-expanded")).toBe("false");
        });

        describe("Single select", () => {
            it("should close dropdown when item is select", () => {
                const element = TestUtils.compileTemplate(`
                    <oui-select name="country"
                        model="$ctrl.country"
                        title="Select a country"
                        placeholder="Select a country..."
                        items="$ctrl.countries"
                        match="name">
                        <span ng-bind="$item.name"></span>
                    </oui-select>`, {
                    countries: data
                });

                const $triggerButton = angular.element(getDropdownButton(element));

                expect($triggerButton.attr("aria-expanded")).toBe("false");

                // Open the dropdown
                $triggerButton.triggerHandler("click");

                // Select 5th element and check if it's highlighted.
                let $itemButton = angular.element(getDropdownItem(element, 4)); // eslint-disable-line no-magic-numbers
                expect($itemButton.hasClass(selectedItemClass)).toBeFalsy();
                $itemButton.triggerHandler("click");

                // The dropdown should have been closed.
                expect($triggerButton.attr("aria-expanded")).toBe("false");

                // Reopen dropdown and check if the selected element is highlighted.
                // The element is retrieved again to be sure to not test on a detached element.
                $triggerButton.triggerHandler("click");
                $itemButton = angular.element(getDropdownItem(element, 4)); // eslint-disable-line no-magic-numbers
                expect($itemButton.hasClass(selectedItemClass)).toBeTruthy();
            });
        });

        describe("Multiple select", () => {
            it("should not close dropdown when an item is selected", () => {
                const element = TestUtils.compileTemplate(`
                    <oui-select name="country"
                        model="$ctrl.country"
                        title="Select a country"
                        placeholder="Select a country..."
                        items="$ctrl.countries"
                        match="name"
                        multiple>
                    </oui-select>`, {
                    countries: data
                });

                const $triggerButton = angular.element(getMultipleDropdownButton(element));

                expect($triggerButton.attr("aria-expanded")).toBe("false");

                // Open the dropdown
                $triggerButton.triggerHandler("click");

                // Select 5th element and check if it's highlighted.
                const $itemButton = angular.element(getDropdownItem(element, 4)); // eslint-disable-line no-magic-numbers
                $itemButton.triggerHandler("click");

                // The dropdown should stay opened.
                expect($triggerButton.attr("aria-expanded")).toBe("true");
            });

            it("should remove item selected", () => {
                const element = TestUtils.compileTemplate(`
                    <oui-select name="country"
                        model="$ctrl.country"
                        title="Select a country"
                        placeholder="Select a country..."
                        items="$ctrl.countries"
                        match="name"
                        multiple>
                    </oui-select>`, {
                    countries: data
                });

                const $triggerButton = angular.element(getMultipleDropdownButton(element));

                expect($triggerButton.attr("aria-expanded")).toBe("false");

                // Open the dropdown
                $triggerButton.triggerHandler("click");

                // Select 5th element and check if it's highlighted.
                let $itemButton = angular.element(getDropdownItem(element, 4)); // eslint-disable-line no-magic-numbers
                $itemButton.triggerHandler("click");

                $itemButton = angular.element(getDropdownItem(element, 4)); // eslint-disable-line no-magic-numbers
                $itemButton.triggerHandler("click");

                // The dropdown should stay opened.
                let matchItems = getMultipleMatchItem(element);
                expect(matchItems.length).toBe(2); // eslint-disable-line no-magic-numbers

                angular.element(matchItems[0]).triggerHandler("click");
                matchItems = getMultipleMatchItem(element);

                expect(matchItems.length).toBe(1); // eslint-disable-line no-magic-numbers
            });
        });

        describe("Not grouped", () => {
            it("should display all the choices (objectArray)", () => {
                const element = TestUtils.compileTemplate(`
                    <oui-select name="country"
                        model="$ctrl.country"
                        title="Select a country"
                        placeholder="Select a country..."
                        items="$ctrl.countries"
                        match="name">
                    </oui-select>`, {
                    countries: data
                });

                // Must open the select first, to init the dropdown menu
                const $triggerButton = angular.element(getDropdownButton(element));
                $triggerButton.triggerHandler("click");

                expect(getDropdownItems(element).length).toEqual(data.length);
                expect(angular.element(getDropdownItem(element, 0)).text()).toContain(data[0].name);
                expect(angular.element(getDropdownItem(element, data.length - 1)).text()).toContain(data[data.length - 1].name);
                expect(getItemsGroups(element).length).toEqual(1);
            });

            it("should display all the choices (stringArray)", () => {
                const stringArray = ["a", "b", "c"];
                const element = TestUtils.compileTemplate(`
                    <oui-select name="country"
                        title="Select a country"
                        model="$ctrl.country"
                        items="$ctrl.array">
                    </oui-select>`, {
                    array: stringArray
                });

                // Must open the select first, to init the dropdown menu
                const $triggerButton = angular.element(getDropdownButton(element));
                $triggerButton.triggerHandler("click");

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
                        title="Select a country"
                        placeholder="Select a country..."
                        items="$ctrl.countries"
                        match="name"
                        group-by="$ctrl.groupByFirstLetter">
                    </oui-select>`, {
                    countries: data,
                    groupByFirstLetter
                });

                // Must open the select first, to init the dropdown menu
                const $triggerButton = angular.element(getDropdownButton(element));
                $triggerButton.triggerHandler("click");

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
                        title="Select a country"
                        placeholder="Select a country..."
                        items="$ctrl.countries"
                        match="name"
                        on-blur="$ctrl.onBlur()">
                    </oui-select>`, {
                    onBlur
                });

                $timeout.flush();

                angular.element(getFocusser(element)).triggerHandler("blur");

                // Need to flush again for the callback
                $timeout.flush();

                expect(onBlur).toHaveBeenCalled();
            });
        });

        describe("Focus on dropdown trigger", () => {
            it("should call onFocus callback", () => {
                const onFocus = jasmine.createSpy();
                const element = TestUtils.compileTemplate(`
                    <oui-select name="country"
                        model="$ctrl.country"
                        title="Select a country"
                        placeholder="Select a country..."
                        items="$ctrl.countries"
                        match="name"
                        on-focus="$ctrl.onFocus()">
                    </oui-select>`, {
                    onFocus
                });

                $timeout.flush();

                angular.element(getFocusser(element)).triggerHandler("focus");

                // Need to flush again for the callback
                $timeout.flush();

                expect(onFocus).toHaveBeenCalled();
            });
        });

        describe("Change on dropdown trigger", () => {
            it("should call onChange callback", () => {
                const onChange = jasmine.createSpy();
                const element = TestUtils.compileTemplate(`
                    <oui-select name="country"
                        model="$ctrl.country"
                        title="Select a country"
                        placeholder="Select a country..."
                        items="$ctrl.countries"
                        match="name"
                        on-change="$ctrl.onChange(modelValue)">
                    </oui-select>`, {
                    countries: data,
                    onChange
                });

                $timeout.flush();

                // Must open the select first, to init the dropdown menu
                const $triggerButton = angular.element(getDropdownButton(element));
                $triggerButton.triggerHandler("click");

                const index = 4;
                const $itemButton = angular.element(getDropdownItem(element, index));
                $itemButton.triggerHandler("click");

                // onSelect from ui-select is inside a $timeout
                // Must open the dropdown before flushing the $timeout
                $triggerButton.triggerHandler("click");
                $timeout.flush();
                expect(onChange).toHaveBeenCalledWith(data[index]);
            });
        });

        describe("Disable options", () => {
            it("should disable corresponding items", () => {
                const disableCountry = (item) => item.name === data[3].name;
                const element = TestUtils.compileTemplate(`
                    <oui-select name="country"
                        model="$ctrl.country"
                        title="Select a country"
                        placeholder="Select a country..."
                        items="$ctrl.countries"
                        disable-items="$ctrl.disableCountry($item)"
                        match="name">
                    </oui-select>`, {
                    countries: data,
                    disableCountry
                });

                $timeout.flush();

                // Trigger click to update the options with corresponding dynamic attributes
                getDropdownButton(element).click();
                expect(angular.element(getDropdownItem(element, 3)).prop("disabled")).toBeTruthy();
            });

            it("should update item", () => {
                const countries = data.concat({ name: "Imaginary country", code: "IC" });
                const disableCountry = (item) => item.code === "";
                const element = TestUtils.compileTemplate(`
                    <oui-select name="country"
                        model="$ctrl.country"
                        title="Select a country"
                        placeholder="Select a country..."
                        items="$ctrl.countries"
                        disable-items="$ctrl.disableCountry($item)"
                        match="name">
                    </oui-select>`, {
                    countries,
                    disableCountry
                });

                $timeout.flush();

                // Trigger click to update the options with corresponding dynamic attributes
                getDropdownButton(element).click();
                expect(angular.element(getDropdownItem(element, data.length - 1)).prop("disabled")).toBeFalsy();

                element.scope().$ctrl.countries[data.length - 1].code = "";
                $timeout.flush();

                expect(angular.element(getDropdownItem(element, data.length - 1)).prop("disabled")).toBeTruthy();
            });
        });
    });
});
