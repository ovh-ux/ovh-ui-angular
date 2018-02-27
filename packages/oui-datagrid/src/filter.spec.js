import Filter from "./filter";
import originalFakeData from "./index.spec.data.json";

const textSearchCriterion = {
    property: null,
    operator: "contains",
    value: "aaron"
};

const columns = [{
    name: "firstName",
    searchable: true,
    type: "text"
}, {
    name: "lastName"
}];

const fakeData = angular.copy(originalFakeData);

describe("Filter", () => {
    let filter;

    beforeEach(() => {
        filter = new Filter([textSearchCriterion], columns);
    });

    describe("itemContainsText", () => {
        let item;

        beforeEach(() => {
            item = {
                firstName: "aabbb",
                lastName: "ccccc"
            };
        });

        it("should find text in object", () => {
            const needle = "aa";
            const contains = filter.itemContainsText(item, needle);
            expect(contains).toBe(true);
        });

        it("should find text in object", () => {
            const needle = "zz";
            const contains = filter.itemContainsText(item, needle);
            expect(contains).toBe(false);
        });
    });

    describe("applyCriteria", () => {
        it("should find text in object", () => {
            const filtered = filter.applyCriteria(fakeData, textSearchCriterion);
            expect(filtered.length).toBe(2);
        });
    });

    describe("applyFilter", () => {
        it("should find text in object", () => {
            const filtered = filter.applyFilter(fakeData);
            expect(filtered.length).toBe(2);
        });
    });

    it("should pass", () => {
        expect(filter.searchableColumns).toEqual(["firstName"]);
    });
});
