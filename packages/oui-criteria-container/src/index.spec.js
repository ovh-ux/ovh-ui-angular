import CriteriaContainerController from "./criteria-container.controller";

describe("ouiCriteriaContainer", () => {
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

    const previewCriterion = {
        property: "column3",
        operator: "equal",
        value: "test",
        preview: true
    };

    const previewCriterion2 = {
        property: "column3",
        operator: "equal",
        value: "anotherTest",
        preview: true
    };

    beforeEach(angular.mock.module("oui.criteria-container"));
    beforeEach(angular.mock.module("oui.test-utils"));

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
            const expectedLength = 2;
            expect(controller.criteria.length).toEqual(expectedLength);

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
            const expectedLength = 2;
            expect(controller.criteria.length).toEqual(expectedLength);
        });

        it("should delete all criteria", () => {
            controller.criteria.push(criterion);
            controller.criteria.push(criterion2);
            const expectedLength = 2;
            expect(controller.criteria.length).toEqual(expectedLength);

            controller.clear();
            expect(controller.criteria.length).toEqual(0);
        });

        describe("Preview criterion", () => {
            it("should be added if nonexistent", () => {
                expect(controller.criteria.length).toEqual(0);

                controller.setPreviewCriterion(previewCriterion);
                expect(controller.criteria.length).toEqual(1);
            });

            it("should be removed", () => {
                controller.criteria.push(previewCriterion);
                expect(controller.criteria.length).toEqual(1);

                controller.deletePreviewCriterion();
                expect(controller.criteria.length).toEqual(0);
            });

            it("should replace previous preview criterion", () => {
                controller.criteria.push(previewCriterion);

                controller.setPreviewCriterion(previewCriterion2);
                expect(controller.criteria.length).toEqual(1);
                expect(controller.criteria[0]).toEqual(previewCriterion2);
            });

            it("should be deleted if an equivalent non-preview criterion is added", () => {
                const nonPreviewCriterion = Object.assign({}, previewCriterion);
                nonPreviewCriterion.preview = false;

                // Initial state
                controller.criteria.push(previewCriterion);

                controller.add(nonPreviewCriterion);

                expect(controller.criteria.length).toEqual(1);
                expect(controller.criteria[0]).toEqual(nonPreviewCriterion);
            });
        });
    });
});
