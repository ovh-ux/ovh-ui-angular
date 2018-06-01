describe("ouiProgress", () => {

    let TestUtils;
    beforeEach(angular.mock.module("oui.progress"));
    beforeEach(angular.mock.module("oui.test-utils"));

    beforeEach(inject((_TestUtils_) => {
        TestUtils = _TestUtils_;
    }));

    describe("ouiProgress Component", () => {
        function getProgressBarComponent (element, type) {
            return element[0].querySelector(`.oui-progress__bar_${type}`);
        }

        function getProgressBarLabel (element) {
            return element[0].querySelector(".oui-progress__label");
        }

        function getProgressThreshold (element) {
            return element[0].querySelector(".oui-progress__threshold");
        }

        it("should display a progress", () => {
            const infoValue = 5;
            const successValue = 10;
            const warningValue = 60;
            const errorValue = 100;
            const infoElement = TestUtils.compileTemplate(`
                <oui-progress type="info" value="${infoValue}">
                </oui-progress>`
            );
            const successElement = TestUtils.compileTemplate(`
                <oui-progress type="success" value="${successValue}">
                </oui-progress>`
            );
            const warningElement = TestUtils.compileTemplate(`
                <oui-progress type="warning" value="${warningValue}">
                </oui-progress>`
            );
            const errorElement = TestUtils.compileTemplate(`
                <oui-progress type="error" value="${errorValue}">
                </oui-progress>`
            );
            expect(getProgressBarComponent(infoElement, "info")).toBeTruthy();
            expect(getProgressBarComponent(successElement, "success")).toBeTruthy();
            expect(getProgressBarComponent(warningElement, "warning")).toBeTruthy();
            expect(getProgressBarComponent(errorElement, "error")).toBeTruthy();
        });

        it("should have the correct width set", () => {
            const value = 5;
            const element = TestUtils.compileTemplate(`
                <oui-progress type="info" value="${value}">
                </oui-progress>`
            );

            const progressBarEl = getProgressBarComponent(element, "info");
            expect(progressBarEl).toBeTruthy();
            expect(progressBarEl.getAttribute("style")).toBe(`width: ${value}%;`);
        });

        it("should have the correct width when max-value is used", () => {
            const value = 10;
            const expectedWidth = value / 2;
            const element = TestUtils.compileTemplate(`
                <oui-progress type="info" max-value="200" value="${value}">
                </oui-progress>`
            );

            const progressBarEl = getProgressBarComponent(element, "info");
            expect(progressBarEl).toBeTruthy();
            expect(progressBarEl.getAttribute("style")).toBe(`width: ${expectedWidth}%;`);
        });

        it("should have the correct default label", () => {
            const value = 5;
            const element = TestUtils.compileTemplate(`
                <oui-progress type="info" value="${value}">
                </oui-progress>`
            );

            const progressBarLabelEl = getProgressBarLabel(element);
            expect(progressBarLabelEl.innerHTML.trim()).toBe(`${value}%`);
        });

        it("should have the correct label", () => {
            const value = 5;
            const label = `Progress: ${value}%`;
            const element = TestUtils.compileTemplate(`
                <oui-progress type="info" value="${value}" label="${label}">
                </oui-progress>`
            );

            const progressBarLabelEl = getProgressBarLabel(element);
            expect(progressBarLabelEl.innerHTML.trim()).toBe(label);
        });

        describe("ouiProgressThreshold Component", () => {
            it("should have the correct position according to value", () => {
                const value = 10;
                const maxValue = 200;
                const leftPosition = value / (maxValue / 100);
                const element = TestUtils.compileTemplate(`
                    <oui-progress type="info" max-value="${maxValue}" value="${value}">
                        <oui-progress-threshold value="${value}"></oui-progress-threshold>
                    </oui-progress>`
                );

                const thresholdEl = getProgressThreshold(element);
                expect(thresholdEl).toBeTruthy();
                expect(thresholdEl.getAttribute("style")).toBe(`left: ${leftPosition}%;`);
            });
        });
    });
});
