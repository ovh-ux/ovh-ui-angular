import data from "./index.spec.data.json";

describe("ouiInlineAdder", () => {
    let TestUtils;

    beforeEach(angular.mock.module("oui.inline-adder"));
    beforeEach(angular.mock.module("oui.test-utils"));

    beforeEach(inject((_TestUtils_) => {
        TestUtils = _TestUtils_;
    }));

    describe("Component", () => {
        it("should have rows created", () => {
            const element = TestUtils.compileTemplate(`
                <oui-inline-adder>
                    <oui-inline-adder-item item="$ctrl.user" is-new-item="true">
                        <oui-inline-adder-row>
                            <div>
                                <label for="username" class="oui-label">Username</label>
                                <input type="text" id="username" class="oui-input oui-input_s"
                                    data-ng-model="item.username">
                            </div>
                        </oui-inline-adder-row>
                    </oui-inline-adder-item>
                </oui-inline-adder>`, {
                user: data.user
            });

            const row = element[0].querySelector(".oui-inline-adder__rows_container .oui-inline-adder__row");
            expect(row).toBeTruthy();
        });

        it("rows should have transcluded content", () => {
            const element = TestUtils.compileTemplate(`
                <oui-inline-adder>
                    <oui-inline-adder-item item="$ctrl.user" is-new-item="true">
                        <oui-inline-adder-row>
                            <div id="transcluded-content">
                                <label for="username" class="oui-label">Username</label>
                                <input type="text" id="username" class="oui-input oui-input_s"
                                    data-ng-model="item.username">
                            </div>
                        </oui-inline-adder-row>
                    </oui-inline-adder-item>
                </oui-inline-adder>`, {
                user: data.user
            });

            const content = element[0].querySelector(".oui-inline-adder__row #transcluded-content");
            expect(content).toBeTruthy();
        });

        it("should have add button", () => {
            const element = TestUtils.compileTemplate(`
                <oui-inline-adder>
                    <oui-inline-adder-item item="$ctrl.user" is-new-item="true">
                        <oui-inline-adder-row>
                            <div id="transcluded-content">
                                <label for="username" class="oui-label">Username</label>
                                <input type="text" id="username" class="oui-input oui-input_s"
                                    data-ng-model="item.username">
                            </div>
                        </oui-inline-adder-row>
                    </oui-inline-adder-item>
                </oui-inline-adder>`, {
                user: data.user
            });

            const button = element[0].querySelector(".oui-inline-adder__actions-button");
            expect(button).toBeTruthy();
            const addIcon = element[0].querySelector(".oui-icon-add");
            expect(addIcon).toBeTruthy();
        });

        it("should call callback on add button click", () => {
            const clickSpy = jasmine.createSpyObj("spy", ["addItem"]);
            clickSpy.addItem.and.returnValue(Promise.resolve());
            const element = TestUtils.compileTemplate(`
                <oui-inline-adder on-add="$ctrl.addItem(item)">
                    <oui-inline-adder-item item="$ctrl.user" is-new-item="true">
                        <oui-inline-adder-row>
                            <div id="transcluded-content">
                                <label for="username" class="oui-label">Username</label>
                                <input type="text" id="username" class="oui-input oui-input_s"
                                    data-ng-model="item.username">
                            </div>
                        </oui-inline-adder-row>
                    </oui-inline-adder-item>
                </oui-inline-adder>`, {
                user: data.user,
                addItem: clickSpy.addItem
            });

            const button = element[0].querySelector(".oui-inline-adder__actions-button");
            expect(button).toBeTruthy();

            angular.element(button).triggerHandler("click");
            expect(clickSpy.addItem).toHaveBeenCalled();
            expect(clickSpy.addItem.calls.count()).toEqual(1);
            expect(clickSpy.addItem).toHaveBeenCalledWith(data.user);
        });

        it("should call callback on remove button click", () => {
            const clickSpy = jasmine.createSpyObj("spy", ["removeItem"]);
            clickSpy.removeItem.and.returnValue(Promise.resolve());
            const element = TestUtils.compileTemplate(`
                <oui-inline-adder on-remove="$ctrl.removeItem(item)">
                    <oui-inline-adder-item item="$ctrl.user" is-new-item="false">
                        <oui-inline-adder-row>
                            <div id="transcluded-content">
                                <label for="username" class="oui-label">Username</label>
                                <input type="text" id="username" class="oui-input oui-input_s"
                                    data-ng-model="item.username">
                            </div>
                        </oui-inline-adder-row>
                    </oui-inline-adder-item>
                </oui-inline-adder>`, {
                user: data.user,
                removeItem: clickSpy.removeItem
            });

            const button = element[0].querySelector(".oui-inline-adder__actions-button");
            expect(button).toBeTruthy();

            angular.element(button).triggerHandler("click");
            expect(clickSpy.removeItem).toHaveBeenCalled();
            expect(clickSpy.removeItem.calls.count()).toEqual(1);
            expect(clickSpy.removeItem).toHaveBeenCalledWith(data.user);
        });

        it("should have remove button", () => {
            const element = TestUtils.compileTemplate(`
                <oui-inline-adder>
                    <oui-inline-adder-item item="$ctrl.user" is-new-item="false">
                        <oui-inline-adder-row>
                            <div id="transcluded-content">
                                <label for="username" class="oui-label">Username</label>
                                <input type="text" id="username" class="oui-input oui-input_s"
                                    data-ng-model="item.username">
                            </div>
                        </oui-inline-adder-row>
                    </oui-inline-adder-item>
                </oui-inline-adder>`, {
                user: data.user
            });

            const button = element[0].querySelector(".oui-inline-adder__actions-button");
            expect(button).toBeTruthy();
            const removeIcon = element[0].querySelector(".oui-icon-trash_line");
            expect(removeIcon).toBeTruthy();
        });

        it("should set add aria label correctly", () => {
            const ariaLabel = "Add new item";
            const element = TestUtils.compileTemplate(`
                <oui-inline-adder>
                    <oui-inline-adder-item item="$ctrl.user" aria-add-item="${ariaLabel}" is-new-item="true">
                        <oui-inline-adder-row>
                            <div id="transcluded-content">
                                <label for="username" class="oui-label">Username</label>
                                <input type="text" id="username" class="oui-input oui-input_s"
                                    data-ng-model="item.username">
                            </div>
                        </oui-inline-adder-row>
                    </oui-inline-adder-item>
                </oui-inline-adder>`, {
                user: data.user
            });

            const button = element[0].querySelector(".oui-inline-adder__actions-button");
            expect(button).toBeTruthy();
            expect(button.getAttribute("aria-label")).toBe(ariaLabel);
        });

        it("should set remove aria label correctly", () => {
            const ariaLabel = "Remove this item";
            const element = TestUtils.compileTemplate(`
                <oui-inline-adder>
                    <oui-inline-adder-item item="$ctrl.user" aria-remove-item="${ariaLabel}" is-new-item="false">
                        <oui-inline-adder-row>
                            <div id="transcluded-content">
                                <label for="username" class="oui-label">Username</label>
                                <input type="text" id="username" class="oui-input oui-input_s"
                                    data-ng-model="item.username">
                            </div>
                        </oui-inline-adder-row>
                    </oui-inline-adder-item>
                </oui-inline-adder>`, {
                user: data.user
            });

            const button = element[0].querySelector(".oui-inline-adder__actions-button");
            expect(button).toBeTruthy();
            expect(button.getAttribute("aria-label")).toBe(ariaLabel);
        });
    });
});
