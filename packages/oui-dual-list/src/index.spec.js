import data from "./index.spec.data.json";

describe("ouiDualList", () => {
    let TestUtils;
    let $timeout;
    let $window;
    const debounceDelay = 800;

    const SOURCE_LIST_TEXT = "Unselected items";
    const TARGET_LIST_TEXT = "Selected items";
    const SOURCE_EMPTY_LIST_TEXT = "No items to select";
    const TARGET_EMPTY_LIST_TEXT = "No items are selected";

    const getDualList = element => angular.element(element[0].querySelector(".oui-dual-list"));
    const getDualListSource = element => angular.element(element[0].querySelector(".oui-dual-list__source"));
    const getDualListSourceHeader = element => angular.element(element[0].querySelector(".oui-dual-list__source > .oui-dual-list__header"));

    const getSourceHeaderText = element => angular.element(element[0].querySelector(".oui-dual-list__source > .oui-dual-list__header > div:first-child"));
    const getSourceEmptyText = element => angular.element(element[0].querySelector(".oui-dual-list__source > .oui-dual-list__content > .oui-dual-list__content-empty > p:first-child"));
    const getSourceSize = element => angular.element(element[0].querySelector(".oui-dual-list__source > .oui-dual-list__header > div > span"));
    const getSourceFilter = element => angular.element(element[0].querySelector(".oui-dual-list__source > .oui-dual-list__content .oui-dual-list__filter > input"));
    const getSourceAddAll = element => angular.element(element[0].querySelector(".oui-dual-list__add-all-link .oui-button"));
    const getSourceList = element => angular.element(element[0].querySelectorAll(".oui-dual-list__source > .oui-dual-list__content ul.oui-dual-list__list > li"));
    const getSourceListItem = (element, index) => angular.element(getSourceList(element)[index]);
    const getSourceListItemValue = (element, index) => angular.element(getSourceListItem(element, index)[0].querySelector("span.oui-dual-list__item-text"));

    const getTargetHeaderText = element => angular.element(element[0].querySelector(".oui-dual-list__target > .oui-dual-list__header > div:first-child"));
    const getTargetEmptyText = element => angular.element(element[0].querySelector(".oui-dual-list__target > .oui-dual-list__content > .oui-dual-list__content-empty > p:first-child"));
    const getTargetSize = element => angular.element(element[0].querySelector(".oui-dual-list__target > .oui-dual-list__header > div > span"));
    const getTargetRemoveAll = element => angular.element(element[0].querySelector(".oui-dual-list__target > .oui-dual-list__content .oui-dual-list__remove-all-link button"));
    const getTargetList = element => angular.element(element[0].querySelectorAll(".oui-dual-list__target > .oui-dual-list__content ul.oui-dual-list__list > li"));
    const getTargetListItem = (element, index) => angular.element(getTargetList(element)[index]);
    const getTargetListItemValue = (element, index) => angular.element(getTargetListItem(element, index)[0].querySelector("span.oui-dual-list__item-text"));

    beforeEach(angular.mock.module("oui.dual-list"));
    beforeEach(angular.mock.module("oui.test-utils"));

    beforeEach(inject((_$timeout_, _$window_, _TestUtils_) => {
        $timeout = _$timeout_;
        $window = _$window_;
        TestUtils = _TestUtils_;
    }));

    describe("Component", () => {
        it("dual list component: empty component", () => {
            const element = TestUtils.compileTemplate("<oui-dual-list></oui-dual-list>");
            expect(getDualList(element)).toBeDefined();
        });
    });

    describe("Component", () => {
        it("dual list component: default labels", () => {
            $window.innerWidth = 1000;
            const element = TestUtils.compileTemplate(`
            <oui-dual-list
                source-list="$ctrl.allUsers"
                target-list="$ctrl.selectedUsers">
            </oui-dual-list>`, {
                allUsers: [],
                selectedUsers: []
            });
            expect(getDualList(element)).toBeDefined();
            expect(getDualListSource(element)).toBeDefined();
            expect(getDualListSourceHeader(element)).toBeDefined();

            // default source header
            const $sourceHeader = getSourceHeaderText(element);
            expect($sourceHeader).toBeDefined();
            expect($sourceHeader.html()).toContain(SOURCE_LIST_TEXT);

            // default target header
            const $targetHeader = getTargetHeaderText(element);
            expect($targetHeader).toBeDefined();
            expect($targetHeader.html()).toContain(TARGET_LIST_TEXT);

            // default source empty message
            const $sourceEmptyMsg = getSourceEmptyText(element);
            expect($sourceEmptyMsg).toBeDefined();
            expect($sourceEmptyMsg.html()).toContain(SOURCE_EMPTY_LIST_TEXT);

            // default target empty message
            const $targetEmptyMsg = getTargetEmptyText(element);
            expect($targetEmptyMsg).toBeDefined();
            expect($targetEmptyMsg.html()).toContain(TARGET_EMPTY_LIST_TEXT);
        });
    });

    describe("Component", () => {
        it("dual list component: empty source and target lists", () => {
            const sourceHeaderText = "All Users";
            const targetHeaderText = "Selected Users";
            const sourceEmptyMsg = "No users found";
            const targetEmptyMsg = "No users added";
            const element = TestUtils.compileTemplate(`
            <oui-dual-list
                source-list-label="${sourceHeaderText}"
                target-list-label="${targetHeaderText}"
                source-list-empty-label="${sourceEmptyMsg}"
                target-list-empty-label="${targetEmptyMsg}"
                source-list="$ctrl.allUsers"
                target-list="$ctrl.selectedUsers">
            </oui-dual-list>`, {
                allUsers: [],
                selectedUsers: []
            });
            expect(getDualList(element)).toBeDefined();
            expect(getDualListSource(element)).toBeDefined();
            expect(getDualListSourceHeader(element)).toBeDefined();

            // check source header
            const $sourceHeader = getSourceHeaderText(element);
            expect($sourceHeader).toBeDefined();
            expect($sourceHeader.html()).toContain(sourceHeaderText);

            // check target header
            const $targetHeader = getTargetHeaderText(element);
            expect($targetHeader).toBeDefined();
            expect($targetHeader.html()).toContain(targetHeaderText);

            // check source size is zero
            const $sourceSize = getSourceSize(element);
            expect($sourceSize).toBeDefined();
            expect($sourceSize.html()).toEqual("(0)");

            // check target size is zero
            const $targetSize = getTargetSize(element);
            expect($targetSize).toBeDefined();
            expect($targetSize.html()).toEqual("(0)");

            // default source empty message
            const $sourceEmptyMsg = getSourceEmptyText(element);
            expect($sourceEmptyMsg).toBeDefined();
            expect($sourceEmptyMsg.html()).toContain(sourceEmptyMsg);

            // default target empty message
            const $targetEmptyMsg = getTargetEmptyText(element);
            expect($targetEmptyMsg).toBeDefined();
            expect($targetEmptyMsg.html()).toContain(targetEmptyMsg);
        });
    });

    describe("Component", () => {
        it("dual list component: non empty source and target lists", () => {
            const sourceHeaderText = "All Users";
            const targetHeaderText = "Selected Users";
            const sourceEmptyMsg = "No users found";
            const targetEmptyMsg = "No users added";
            const element = TestUtils.compileTemplate(`
            <oui-dual-list
                source-list-label="${sourceHeaderText}"
                target-list-label="${targetHeaderText}"
                source-list-empty-label="${sourceEmptyMsg}"
                target-list-empty-label="${targetEmptyMsg}"
                source-list="$ctrl.allUsers"
                target-list="$ctrl.selectedUsers">
            </oui-dual-list>`, {
                allUsers: data.users,
                selectedUsers: data.selectedUsers
            });
            expect(getDualList(element)).toBeDefined();
            expect(getDualListSource(element)).toBeDefined();
            expect(getDualListSourceHeader(element)).toBeDefined();

            // check source header
            const $sourceHeader = getSourceHeaderText(element);
            expect($sourceHeader).toBeDefined();
            expect($sourceHeader.html()).toContain(sourceHeaderText);

            // check target header
            const $targetHeader = getTargetHeaderText(element);
            expect($targetHeader).toBeDefined();
            expect($targetHeader.html()).toContain(targetHeaderText);

            // check source size
            const $sourceSize = getSourceSize(element);
            expect($sourceSize).toBeDefined();
            expect($sourceSize.html()).toEqual(`(${data.users.length})`);

            // check target size
            const $targetSize = getTargetSize(element);
            expect($targetSize).toBeDefined();
            expect($targetSize.html()).toEqual(`(${data.selectedUsers.length})`);

            // check source empty message not found
            const $sourceEmptyMsg = getSourceEmptyText(element);
            expect($sourceEmptyMsg[0]).toBeUndefined();

            // check target empty message not found
            const $targetEmptyMsg = getTargetEmptyText(element);
            expect($targetEmptyMsg[0]).toBeUndefined();

            // check filter found
            const $filter = getSourceFilter(element);
            expect($filter).toBeDefined();

            // check "add all" not found
            const $addAll = getSourceAddAll(element);
            expect($addAll[0]).toBeUndefined();

            // check source list length
            const $sourceItems = getSourceList(element);
            expect($sourceItems).toBeDefined();
            expect($sourceItems.length).toEqual(data.users.length);

            // check source list first item value
            const $sourceFirstItem = getSourceListItemValue(element, 0);
            expect($sourceFirstItem).toBeDefined();
            expect($sourceFirstItem.html()).toEqual("ANDREW");

            // check source list last item value
            const $sourceLastItem = getSourceListItemValue(element, data.users.length - 1);
            expect($sourceLastItem).toBeDefined();
            expect($sourceLastItem.html()).toEqual("VANESSA");

            // check "remove all" not found
            const $removeAll = getTargetRemoveAll(element);
            expect($removeAll[0]).toBeUndefined();

            // check target list length
            const $targetItems = getTargetList(element);
            expect($targetItems).toBeDefined();
            expect($targetItems.length).toEqual(data.selectedUsers.length);

            // check target list first item value
            const $targetFirstItem = getTargetListItemValue(element, 0);
            expect($targetFirstItem).toBeDefined();
            expect($targetFirstItem.html()).toEqual("KEVIN");

            // check target list last item value
            const $targetLastItem = getTargetListItemValue(element, data.selectedUsers.length - 1);
            expect($targetLastItem).toBeDefined();
            expect($targetLastItem.html()).toEqual("MARK");


        });
    });

    describe("Component", () => {
        it("dual list component: add remove items", () => {
            const sourceHeaderText = "All Users";
            const targetHeaderText = "Selected Users";
            const sourceEmptyMsg = "No users found";
            const targetEmptyMsg = "No users added";
            const element = TestUtils.compileTemplate(`
            <oui-dual-list
                source-list-label="${sourceHeaderText}"
                target-list-label="${targetHeaderText}"
                source-list-empty-label="${sourceEmptyMsg}"
                target-list-empty-label="${targetEmptyMsg}"
                source-list="$ctrl.allUsers"
                target-list="$ctrl.selectedUsers">
            </oui-dual-list>`, {
                allUsers: data.users,
                selectedUsers: data.selectedUsers
            });

            // check source list length
            let $sourceItems = getSourceList(element);
            expect($sourceItems).toBeDefined();
            expect($sourceItems.length).toEqual(9);

            // check target list length
            let $targetItems = getTargetList(element);
            expect($targetItems).toBeDefined();
            expect($targetItems.length).toEqual(2);

            // add item to target list
            const $sourceFirstItem = getSourceListItem(element, 0);
            expect($sourceFirstItem).toBeDefined();
            $sourceFirstItem.triggerHandler("click");

            // check source list length again
            $sourceItems = getSourceList(element);
            expect($sourceItems).toBeDefined();
            expect($sourceItems.length).toEqual(8);

            // check target list length again
            $targetItems = getTargetList(element);
            expect($targetItems).toBeDefined();
            expect($targetItems.length).toEqual(3);

            // remove item from target list
            const $targetFirstItem = getTargetListItem(element, 0);
            expect($targetFirstItem).toBeDefined();
            $targetFirstItem.triggerHandler("click");

            // check source list length again
            $sourceItems = getSourceList(element);
            expect($sourceItems).toBeDefined();
            expect($sourceItems.length).toEqual(9);

            // check target list length again
            $targetItems = getTargetList(element);
            expect($targetItems).toBeDefined();
            expect($targetItems.length).toEqual(2);
        });
    });

    describe("Component", () => {
        it("dual list component: add all remove all items", () => {
            const sourceHeaderText = "All Users";
            const targetHeaderText = "Selected Users";
            const sourceEmptyMsg = "No users found";
            const targetEmptyMsg = "No users added";
            const element = TestUtils.compileTemplate(`
            <oui-dual-list
                source-list-label="${sourceHeaderText}"
                target-list-label="${targetHeaderText}"
                source-list-empty-label="${sourceEmptyMsg}"
                target-list-empty-label="${targetEmptyMsg}"
                source-list="$ctrl.allUsers"
                target-list="$ctrl.selectedUsers"
                bulk-action-enabled="true">
            </oui-dual-list>`, {
                allUsers: data.users,
                selectedUsers: data.selectedUsers
            });

            // check source list length
            let $sourceItems = getSourceList(element);
            expect($sourceItems).toBeDefined();
            expect($sourceItems.length).toEqual(9);

            // check target list length
            let $targetItems = getTargetList(element);
            expect($targetItems).toBeDefined();
            expect($targetItems.length).toEqual(2);

            const $addAll = getSourceAddAll(element);
            expect($addAll).toBeDefined();
            $addAll.triggerHandler("click");

            // check source list length
            $sourceItems = getSourceList(element);
            expect($sourceItems).toBeDefined();

            // check target list length
            $targetItems = getTargetList(element);
            expect($targetItems).toBeDefined();

            const $removeAll = getTargetRemoveAll(element);
            expect($removeAll).toBeDefined();
            $removeAll.triggerHandler("click");

            // check source list length
            $sourceItems = getSourceList(element);
            expect($sourceItems).toBeDefined();

            // check target list length
            $targetItems = getTargetList(element);
            expect($targetItems).toBeDefined();
        });
    });

    describe("Component", () => {
        it("dual list component: filter items", () => {
            const sourceHeaderText = "All Users";
            const targetHeaderText = "Selected Users";
            const sourceEmptyMsg = "No users found";
            const targetEmptyMsg = "No users added";
            const element = TestUtils.compileTemplate(`
            <oui-dual-list
                source-list-label="${sourceHeaderText}"
                target-list-label="${targetHeaderText}"
                source-list-empty-label="${sourceEmptyMsg}"
                target-list-empty-label="${targetEmptyMsg}"
                source-list="$ctrl.allUsers"
                target-list="$ctrl.selectedUsers"
                bulk-action-enabled="true">
            </oui-dual-list>`, {
                allUsers: data.users,
                selectedUsers: data.selectedUsers
            });

            // check source list length
            let $sourceItems = getSourceList(element);
            expect($sourceItems).toBeDefined();
            expect($sourceItems.length).toEqual(9);

            const $filter = getSourceFilter(element);
            expect($filter).toBeDefined();
            console.log("$filter", $filter);
            $filter.val("ANDREW");
            $filter.triggerHandler("input");
            $timeout(() => {
                console.log("$filter", $filter);
                $sourceItems = getSourceList(element);
                expect($sourceItems).toBeDefined();
                expect($sourceItems.length).toEqual(1);
            }, debounceDelay);

        });
    });
});
