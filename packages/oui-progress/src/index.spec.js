describe("ouiProgress", () => {

    let TestUtils;
    beforeEach(angular.mock.module("oui.progress"));
    beforeEach(angular.mock.module("oui.test-utils"));

    beforeEach(inject((_TestUtils_) => {
        TestUtils = _TestUtils_;
    }));

    describe("ouiProgress Component", () => {
        function getProgressComponent (element, type) {
            return element[0].querySelector(`.oui-progress_${type}`);
        }

        function getProgressBarComponent (element, type) {
            return element[0].querySelector(`.oui-progress__bar_${type}`);
        }

        function getIndeterminateProgressComponent (element) {
            return element[0].querySelector(".oui-progress_indeterminate");
        }

        function getProgressBarLabel (element) {
            return element[0].querySelector(".oui-progress__label");
        }

        function getProgressBarAlignedLabel (element, alignment) {
            return element[0].querySelector(`.oui-progress__bar_text-${alignment}`);
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
                <oui-progress type="info">
                    <oui-progress-bar value="${infoValue}"></oui-progress-bar>
                </oui-progress>`
            );
            const successElement = TestUtils.compileTemplate(`
                <oui-progress type="success">
                    <oui-progress-bar value="${successValue}"></oui-progress-bar>
                </oui-progress>`
            );
            const warningElement = TestUtils.compileTemplate(`
                <oui-progress type="warning">
                    <oui-progress-bar value="${warningValue}"></oui-progress-bar>
                </oui-progress>`
            );
            const errorElement = TestUtils.compileTemplate(`
                <oui-progress type="error">
                    <oui-progress-bar value="${errorValue}"></oui-progress-bar>
                </oui-progress>`
            );

            expect(getProgressComponent(infoElement, "info")).toBeTruthy();
            expect(getProgressComponent(successElement, "success")).toBeTruthy();
            expect(getProgressComponent(warningElement, "warning")).toBeTruthy();
            expect(getProgressComponent(errorElement, "error")).toBeTruthy();
            expect(getProgressBarComponent(infoElement, "info")).toBeTruthy();
            expect(getProgressBarComponent(successElement, "success")).toBeTruthy();
            expect(getProgressBarComponent(warningElement, "warning")).toBeTruthy();
            expect(getProgressBarComponent(errorElement, "error")).toBeTruthy();
        });

        it("should display a indeterminate progress", () => {
            const element = TestUtils.compileTemplate("<oui-progress type='info' indeterminate='true'></oui-progress>");
            expect(getIndeterminateProgressComponent(element)).toBeTruthy();
        });

        describe("ouiProgressBar Component", () => {
            it("should have the correct width set", () => {
                const value = 5;
                const element = TestUtils.compileTemplate(`
                    <oui-progress type="info">
                        <oui-progress-bar value="${value}"></oui-progress-bar>
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
                    <oui-progress type="info" max-value="200">
                        <oui-progress-bar value="${value}"></oui-progress-bar>
                    </oui-progress>`
                );

                const progressBarEl = getProgressBarComponent(element, "info");
                expect(progressBarEl).toBeTruthy();
                expect(progressBarEl.getAttribute("style")).toBe(`width: ${expectedWidth}%;`);
            });

            it("should overide parent's type", () => {
                const type = "warning";
                const element = TestUtils.compileTemplate(`
                    <oui-progress type="info">
                        <oui-progress-bar type="${type}" value="5"></oui-progress-bar>
                    </oui-progress>`
                );

                const progressBarEl = getProgressBarComponent(element, type);
                expect(progressBarEl).toBeTruthy();
            });

            it("should have the correct label", () => {
                const value = 5;
                const label = `${value}%`;
                const element = TestUtils.compileTemplate(`
                    <oui-progress type="info">
                        <oui-progress-bar value="${value}">${label}</oui-progress-bar>
                    </oui-progress>`
                );

                const progressBarLabelEl = getProgressBarLabel(element);
                expect(progressBarLabelEl.innerHTML).toBe(label);
            });

            it("should have the label aligned correctly", () => {
                const rightLabelElement = TestUtils.compileTemplate(`
                    <oui-progress type="info">
                        <oui-progress-bar value="5" label-align="right">5%</oui-progress-bar>
                    </oui-progress>`
                );
                const leftLabelElement = TestUtils.compileTemplate(`
                    <oui-progress type="info">
                        <oui-progress-bar value="5" label-align="left">5%</oui-progress-bar>
                    </oui-progress>`
                );
                expect(getProgressBarAlignedLabel(rightLabelElement, "right")).toBeTruthy();
                expect(getProgressBarAlignedLabel(leftLabelElement, "left")).toBeTruthy();
            });
        });

        describe("ouiProgressThreshold Component", () => {
            it("should have the correct position according to value", () => {
                const value = 10;
                const maxValue = 200;
                const leftPosition = value / (maxValue / 100);
                const element = TestUtils.compileTemplate(`
                    <oui-progress type="info" max-value="${maxValue}">
                        <oui-progress-threshold value="${value}"></oui-progress-threshold>
                        <oui-progress-bar value="${value}">${value}%</oui-progress-bar>
                    </oui-progress>`
                );

                const thresholdEl = getProgressThreshold(element);
                expect(thresholdEl).toBeTruthy();
                expect(thresholdEl.getAttribute("style")).toBe(`left: ${leftPosition}%;`);
            });
        });
    });
});
