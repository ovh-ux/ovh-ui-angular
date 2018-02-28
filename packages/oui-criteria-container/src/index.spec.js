import CriteriaContainerController from "./criteria-container.controller";

fdescribe("ouiCriteriaContainer", () => {
    let TestUtils;

    const criterion = {
        property: "column1",
        operator: "equal",
        value: "test"
    };

    const criterion2 = {
        property: "column2",
        operator: "equal",
        value: "test"
    };

    beforeEach(angular.mock.module("oui.criteria-container"));
    beforeEach(angular.mock.module("oui.test-utils"));

    beforeEach(inject((_TestUtils_) => {
        TestUtils = _TestUtils_;
    }));

    describe("Controller", () => {
        let controller;

        beforeEach(() => {
            controller = new CriteriaContainerController();
            controller.onChange = jasmine.createSpy("onChange");
            controller.$onInit();
        });

        it("should init the criteria if not defined", () => {
            expect(controller.criteria).toEqual([]);
        });

        it("should add a criteria", () => {
            expect(controller.criteria.length).toEqual(0);

            controller.add(criterion);
            expect(controller.criteria.length).toEqual(1);
            expect(controller.criteria[0]).toEqual(criterion);

            expect(controller.onChange).toHaveBeenCalledWith({ modelValue: [criterion] });
        });

        it("should not add an existing criteria", () => {
            controller.criteria.push(criterion);
            expect(controller.criteria.length).toEqual(1);

            controller.add(criterion);
            expect(controller.criteria.length).toEqual(1);

            expect(controller.onChange).not.toHaveBeenCalled();
        });

        it("should delete a criteria", () => {
            controller.criteria.push(criterion);
            controller.criteria.push(criterion2);
            expect(controller.criteria.length).toEqual(2);

            controller.remove(criterion);
            expect(controller.criteria.length).toEqual(1);
            expect(controller.criteria[0]).toEqual(criterion2);

            expect(controller.onChange).toHaveBeenCalledWith({ modelValue: [criterion2] });
        });

        it("should not delete a nonexistent criteria", () => {
            controller.criteria.push(criterion);

            expect(() => controller.remove(criterion2)).not.toThrow();
            expect(controller.onChange).not.toHaveBeenCalled();
        });

        it("should set all criteria", () => {
            const criteria = [criterion, criterion2];
            expect(controller.criteria.length).toEqual(0);

            controller.set(criteria);
            expect(controller.criteria.length).toEqual(2);
        });

        it("should delete all criteria", () => {
            controller.criteria.push(criterion);
            controller.criteria.push(criterion2);
            expect(controller.criteria.length).toEqual(2);

            controller.clear();
            expect(controller.criteria.length).toEqual(0);
        });
    });
});
