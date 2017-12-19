import fakeData from "./index.spec.data.json";

describe("ouiDatagrid", () => {
    let TestUtils;

    const getRows = element => element[0].querySelectorAll(".oui-datagrid__row:not(.oui-datagrid__row_loading)");
    const getRow = (element, lineNumber) => angular.element(getRows(element)[lineNumber]);
    const getHeaderCell = (element, columnNumber) => angular.element(element[0].querySelectorAll(".oui-datagrid__header")[columnNumber]);
    const getCell = (element, columnNumber) => angular.element(element[0].querySelectorAll(".oui-datagrid__cell")[columnNumber]);
    const getPaginationOffset = element => angular.element(element[0].querySelector(".oui-pagination .oui-dropdown .oui-button span:first-child"));
    const getPaginationLastItemOffset = element => angular.element(element[0].querySelector(".oui-pagination .oui-dropdown .oui-button span:nth-child(2)"));
    const getNextPagePaginationButton = element => angular.element(element[0].querySelector(".oui-pagination__selector > .oui-button:last-child"));
    const isSortableCell = element => element.hasClass("oui-datagrid__header_sortable");
    const isSortableAscCell = element => element.hasClass("oui-datagrid__header_sortable-asc");
    const isSortableDescCell = element => element.hasClass("oui-datagrid__header_sortable-desc");
    const getActionMenu = element => angular.element(element[0].querySelectorAll("oui-action-menu"));
    const isStickyCell = element => element.hasClass("oui-datagrid__cell-sticky");

    beforeEach(angular.mock.module("oui.datagrid"));
    beforeEach(angular.mock.module("oui.test-utils"));
    beforeEach(angular.mock.module("oui.action-menu"));

    beforeEach(inject((_TestUtils_) => {
        TestUtils = _TestUtils_;
    }));

    describe("Component", () => {
        describe("local rows", () => {
            it("should display rows using rows attribute", () => {
                const element = TestUtils.compileTemplate(`
                        <oui-datagrid rows="$ctrl.rows">
                            <oui-column property="firstName"></oui-column>
                            <oui-column property="lastName"></oui-column>
                        </oui-datagrid>
                    `, {
                        rows: fakeData.slice(0, 5)
                    }
                );

                const $firstRow = getRow(element, 1);
                const $fifthRow = getRow(element, 5);

                expect(getCell($firstRow, 0).children().html()).toBe(fakeData[0].firstName);
                expect(getCell($firstRow, 1).children().html()).toBe(fakeData[0].lastName);

                expect(getCell($fifthRow, 0).children().html()).toBe(fakeData[4].firstName);
                expect(getCell($fifthRow, 1).children().html()).toBe(fakeData[4].lastName);
            });

            it("should display a pagination component", () => {
                const element = TestUtils.compileTemplate(`
                        <oui-datagrid rows="$ctrl.rows">
                            <oui-column property="firstName"></oui-column>
                            <oui-column property="lastName"></oui-column>
                        </oui-datagrid>
                    `, {
                        rows: fakeData.slice(0, 5)
                    }
                );

                const $paginationOffset = getPaginationOffset(element);
                const $paginationLastItemOffset = getPaginationLastItemOffset(element);

                expect($paginationOffset.html()).toBe("1");
                expect($paginationLastItemOffset.html()).toBe("5");
            });

            it("should refresh when rows changed", inject(($rootScope) => {
                const fakeDataCopy = angular.copy(fakeData.slice(0, 5));

                const element = TestUtils.compileTemplate(`
                        <oui-datagrid rows="$ctrl.rows">
                            <oui-column property="firstName"></oui-column>
                            <oui-column property="lastName"></oui-column>
                        </oui-datagrid>
                    `, {
                        rows: fakeDataCopy
                    }
                );
                const controller = TestUtils.getElementController(element);

                controller.rows[0].firstName = "fakeFirstName";

                $rootScope.$digest();

                const $firstRow = getRow(element, 1);

                expect(getCell($firstRow, 0).children().html()).toBe("fakeFirstName");
            }));

            it("should load data later and display it", inject(($q, $rootScope) => {
                const deferred = $q.defer();
                let deferredRow;
                const loadRowSpy = jasmine.createSpy("loadRow");

                loadRowSpy.and.callFake(($row) => {
                    if ($row.firstName === fakeData[1].firstName && $row.lastName === fakeData[1].lastName) {
                        deferredRow = $row;
                        return deferred.promise;
                    }

                    return $q.when({
                        ...$row,
                        more: "+"
                    });
                });

                const element = TestUtils.compileTemplate(`
                        <oui-datagrid rows="$ctrl.rows" row-loader="$ctrl.loadRow($row)">
                            <oui-column property="firstName"></oui-column>
                            <oui-column property="lastName"></oui-column>
                            <oui-column property="more"></oui-column>
                        </oui-datagrid>
                    `, {
                        rows: fakeData.slice(0, 5),
                        loadRow: loadRowSpy
                    }
                );

                const $firstRow = getRow(element, 1);
                const $secondRow = getRow(element, 2);

                expect(loadRowSpy.calls.count()).toEqual(5);

                expect(getCell($firstRow, 0).children().html()).toBe(fakeData[0].firstName);
                expect(getCell($firstRow, 2).children().html()).toBe("+");
                expect(getCell($secondRow, 0).children().html()).toBe(fakeData[1].firstName);
                expect(getCell($secondRow, 2).children().html()).toBeUndefined();

                deferred.resolve({
                    ...deferredRow,
                    more: "++"
                });

                $rootScope.$digest();

                expect(getCell($secondRow, 0).children().html()).toBe(fakeData[1].firstName);
                expect(getCell($secondRow, 2).children().html()).toBe("++");
            }));

            it("should display rows that can only be contained in a page", () => {
                const element = TestUtils.compileTemplate(`
                        <oui-datagrid rows="$ctrl.rows" page-size="2">
                            <oui-column property="firstName"></oui-column>
                            <oui-column property="lastName"></oui-column>
                        </oui-datagrid>
                    `, {
                        rows: fakeData.slice(0, 5)
                    }
                );

                const rows = getRows(element);

                // 2 per page + 1 header row
                expect(rows.length).toEqual(3);
            });

            it("should display rows sorted", () => {
                const element = TestUtils.compileTemplate(`
                        <oui-datagrid rows="$ctrl.rows">
                            <oui-column property="firstName"></oui-column>
                            <oui-column property="lastName" sortable="asc"></oui-column>
                        </oui-datagrid>
                    `, {
                        rows: fakeData.slice(0, 5)
                    }
                );

                [
                    "Cole",
                    "Harris",
                    "Jackson",
                    "Jenkins",
                    "Torres"
                ]
                    .forEach((lastName, index) => {
                        const $row = getRow(element, index + 1);

                        expect(getCell($row, 1).children().html()).toBe(lastName);
                    });
            });
        });

        describe("remote rows", () => {
            let rowsLoaderSpy;

            beforeEach(inject(($q) => {
                rowsLoaderSpy = jasmine.createSpy("rowsLoader");

                rowsLoaderSpy.and.returnValue($q.when({
                    data: fakeData.slice(0, 5),
                    meta: {
                        currentOffset: 0,
                        pageCount: 1,
                        totalCount: 5,
                        pageSize: 25
                    }
                }));
            }));

            it("should display rows using rowsLoader", () => {
                const element = TestUtils.compileTemplate(`
                        <oui-datagrid rows-loader="$ctrl.loadRows($config)">
                            <oui-column property="firstName"></oui-column>
                            <oui-column property="lastName"></oui-column>
                        </oui-datagrid>
                    `, {
                        loadRows: rowsLoaderSpy
                    }
                );

                const $firstRow = getRow(element, 1);
                const $fifthRow = getRow(element, 5);

                expect(getCell($firstRow, 0).children().html()).toBe(fakeData[0].firstName);
                expect(getCell($firstRow, 1).children().html()).toBe(fakeData[0].lastName);

                expect(getCell($fifthRow, 0).children().html()).toBe(fakeData[4].firstName);
                expect(getCell($fifthRow, 1).children().html()).toBe(fakeData[4].lastName);
            });

            it("should display a pagination component", () => {
                const element = TestUtils.compileTemplate(`
                        <oui-datagrid rows-loader="$ctrl.loadRows($config)">
                            <oui-column property="firstName"></oui-column>
                            <oui-column property="lastName"></oui-column>
                        </oui-datagrid>
                    `, {
                        loadRows: rowsLoaderSpy
                    }
                );

                const $paginationOffset = getPaginationOffset(element);
                const $paginationLastItemOffset = getPaginationLastItemOffset(element);

                expect($paginationOffset.html()).toBe("1");
                expect($paginationLastItemOffset.html()).toBe("5");
            });

            it("should load data later and display it", inject(($q, $rootScope) => {
                const deferred = $q.defer();
                let deferredRow;
                const loadRowSpy = jasmine.createSpy("loadRow");

                loadRowSpy.and.callFake(($row) => {
                    if ($row.firstName === fakeData[1].firstName && $row.lastName === fakeData[1].lastName) {
                        deferredRow = $row;
                        return deferred.promise;
                    }

                    return $q.when({
                        ...$row,
                        more: "+"
                    });
                });

                const element = TestUtils.compileTemplate(`
                        <oui-datagrid rows-loader="$ctrl.loadRows($config)" row-loader="$ctrl.loadRow($row)">
                            <oui-column property="firstName"></oui-column>
                            <oui-column property="lastName"></oui-column>
                            <oui-column property="more"></oui-column>
                        </oui-datagrid>
                    `, {
                        loadRows: rowsLoaderSpy,
                        loadRow: loadRowSpy
                    }
                );

                const $firstRow = getRow(element, 1);
                const $secondRow = getRow(element, 2);

                expect(loadRowSpy.calls.count()).toEqual(5);

                expect(getCell($firstRow, 0).children().html()).toBe(fakeData[0].firstName);
                expect(getCell($firstRow, 2).children().html()).toBe("+");
                expect(getCell($secondRow, 0).children().html()).toBe(fakeData[1].firstName);
                expect(getCell($secondRow, 2).children().html()).toBeUndefined();

                deferred.resolve({
                    ...deferredRow,
                    more: "++"
                });

                $rootScope.$digest();

                expect(getCell($secondRow, 0).children().html()).toBe(fakeData[1].firstName);
                expect(getCell($secondRow, 2).children().html()).toBe("++");
            }));

            it("should display rows that can only be contained in a page", () => {
                TestUtils.compileTemplate(`
                        <oui-datagrid rows-loader="$ctrl.loadRows($config)" page-size="2">
                            <oui-column property="firstName"></oui-column>
                            <oui-column property="lastName"></oui-column>
                        </oui-datagrid>
                    `, {
                        loadRows: rowsLoaderSpy
                    }
                );

                expect(rowsLoaderSpy).toHaveBeenCalledWith(jasmine.objectContaining({
                    offset: 1,
                    pageSize: 2
                }));
            });

            it("should display rows sorted", () => {
                TestUtils.compileTemplate(`
                        <oui-datagrid rows-loader="$ctrl.loadRows($config)">
                            <oui-column property="firstName"></oui-column>
                            <oui-column property="lastName" sortable="asc"></oui-column>
                        </oui-datagrid>
                    `, {
                        loadRows: rowsLoaderSpy
                    }
                );

                expect(rowsLoaderSpy).toHaveBeenCalledWith(jasmine.objectContaining({
                    sort: {
                        property: "lastName",

                        // TODO: Remove it, since columnName seems to be the same
                        // thing than property ?
                        columnName: "lastName",
                        dir: 1
                    }
                }));
            });
        });

        it("should support row data binding inside cell", () => {
            const element = TestUtils.compileTemplate(`
                    <oui-datagrid rows="$ctrl.rows">
                        <oui-column property="firstName"></oui-column>
                        <oui-column property="lastName">
                            test: {{ $row.lastName }}
                        </oui-column>
                    </oui-datagrid>
                `, {
                    rows: fakeData.slice(0, 5)
                }
            );

            const $firstRow = getRow(element, 1);

            const actualCellHtml = getCell($firstRow, 1)
                .children()
                .children()
                .html()
                .trim();

            expect(actualCellHtml).toBe(`test: ${fakeData[0].lastName}`);
        });

        it("should support value data binding inside cell", () => {
            const element = TestUtils.compileTemplate(`
                    <oui-datagrid rows="$ctrl.rows">
                        <oui-column property="firstName"></oui-column>
                        <oui-column property="lastName">
                            test: {{ $value }}
                        </oui-column>
                    </oui-datagrid>
                `, {
                    rows: fakeData.slice(0, 5)
                }
            );

            const $firstRow = getRow(element, 1);

            const actualCellHtml = getCell($firstRow, 1)
                .children()
                .children()
                .html()
                .trim();

            expect(actualCellHtml).toBe(`test: ${fakeData[0].lastName}`);
        });

        it("should support parent binding inside cell", () => {
            const element = TestUtils.compileTemplate(`
                    <oui-datagrid rows="$ctrl.rows">
                        <oui-column property="firstName"></oui-column>
                        <oui-column property="lastName">
                            {{ $row.lastName }} + {{ $ctrl.something }}
                        </oui-column>
                    </oui-datagrid>
                `, {
                    rows: fakeData.slice(0, 5),
                    something: "hello world"
                }
            );

            const $firstRow = getRow(element, 1);

            const actualCellHtml = getCell($firstRow, 1)
                .children()
                .children()
                .html()
                .trim();

            expect(actualCellHtml).toBe(`${fakeData[0].lastName} + hello world`);
        });

        it("should support advanced component inside cell", () => {
            const element = TestUtils.compileTemplate(`
                    <oui-datagrid rows="$ctrl.rows">
                        <oui-column property="firstName"></oui-column>
                        <oui-column property="lastName"></oui-column>
                        <oui-column>
                            <oui-action-menu>
                                <oui-action-menu-item text="Action 1"></oui-action-menu-item>
                                <oui-action-menu-item text="Action 2"></oui-action-menu-item>
                            </oui-action-menu>
                        </oui-column>
                    </oui-datagrid>
                `, {
                    rows: fakeData.slice(0, 5)
                }
            );

            const $firstRow = getRow(element, 1);
            const $actionCell = getCell($firstRow, 2);

            const actions = $actionCell[0].querySelectorAll(".oui-button_action-menu");

            expect(actions.length).toEqual(2);
        });

        it("should support sortable columns", () => {
            const element = TestUtils.compileTemplate(`
                    <oui-datagrid rows="$ctrl.rows">
                        <oui-column property="firstName" sortable></oui-column>
                        <oui-column property="lastName"></oui-column>
                        <oui-column property="phone" sortable></oui-column>
                    </oui-datagrid>
                `, {
                    rows: fakeData.slice(0, 5)
                }
            );

            const $headerRow = getRow(element, 0);

            expect(isSortableCell(getHeaderCell($headerRow, 0))).toBe(true);
            expect(isSortableCell(getHeaderCell($headerRow, 1))).toBe(false);
            expect(isSortableCell(getHeaderCell($headerRow, 2))).toBe(true);
        });

        it("should support default sortable column", () => {
            const element = TestUtils.compileTemplate(`
                    <oui-datagrid rows="$ctrl.rows">
                        <oui-column property="firstName" sortable="asc"></oui-column>
                        <oui-column property="lastName"></oui-column>
                        <oui-column property="phone" sortable></oui-column>
                    </oui-datagrid>
                `, {
                    rows: fakeData.slice(0, 5)
                }
            );

            const $headerRow = getRow(element, 0);

            expect(isSortableCell(getHeaderCell($headerRow, 0))).toBe(true);
            expect(isSortableCell(getHeaderCell($headerRow, 1))).toBe(false);
            expect(isSortableCell(getHeaderCell($headerRow, 2))).toBe(true);

            expect(isSortableAscCell(getHeaderCell($headerRow, 0))).toBe(true);
            expect(isSortableAscCell(getHeaderCell($headerRow, 1))).toBe(false);
            expect(isSortableAscCell(getHeaderCell($headerRow, 2))).toBe(false);

            expect(isSortableDescCell(getHeaderCell($headerRow, 0))).toBe(false);
            expect(isSortableDescCell(getHeaderCell($headerRow, 1))).toBe(false);
            expect(isSortableDescCell(getHeaderCell($headerRow, 2))).toBe(false);
        });

        it("should update sort order on header click", () => {
            const element = TestUtils.compileTemplate(`
                    <oui-datagrid rows="$ctrl.rows">
                        <oui-column property="firstName" sortable="asc"></oui-column>
                        <oui-column property="lastName"></oui-column>
                        <oui-column property="phone" sortable></oui-column>
                    </oui-datagrid>
                `, {
                    rows: fakeData.slice(0, 5)
                }
            );

            const $headerRow = getRow(element, 0);

            getHeaderCell($headerRow, 0).triggerHandler("click");

            expect(isSortableCell(getHeaderCell($headerRow, 0))).toBe(true);
            expect(isSortableCell(getHeaderCell($headerRow, 1))).toBe(false);
            expect(isSortableCell(getHeaderCell($headerRow, 2))).toBe(true);

            expect(isSortableAscCell(getHeaderCell($headerRow, 0))).toBe(false);
            expect(isSortableAscCell(getHeaderCell($headerRow, 1))).toBe(false);
            expect(isSortableAscCell(getHeaderCell($headerRow, 2))).toBe(false);

            expect(isSortableDescCell(getHeaderCell($headerRow, 0))).toBe(true);
            expect(isSortableDescCell(getHeaderCell($headerRow, 1))).toBe(false);
            expect(isSortableDescCell(getHeaderCell($headerRow, 2))).toBe(false);
        });

        it("should refresh when pagination has changed", () => {
            const element = TestUtils.compileTemplate(`
                    <oui-datagrid rows="$ctrl.rows", page-size="2">
                        <oui-column property="firstName"></oui-column>
                        <oui-column property="lastName"></oui-column>
                    </oui-datagrid>
                `, {
                    rows: fakeData.slice(0, 5)
                }
            );

            getNextPagePaginationButton(element).triggerHandler("click");

            const $firstRow = getRow(element, 1);
            const $secondRow = getRow(element, 2);

            expect(getCell($firstRow, 0).children().html()).toBe(fakeData[2].firstName);
            expect(getCell($firstRow, 1).children().html()).toBe(fakeData[2].lastName);

            expect(getCell($secondRow, 0).children().html()).toBe(fakeData[3].firstName);
            expect(getCell($secondRow, 1).children().html()).toBe(fakeData[3].lastName);
        });

        it("should support action-menu as column", () => {
            const element = TestUtils.compileTemplate(`
                    <oui-datagrid rows="$ctrl.rows">
                        <oui-column property="firstName"></oui-column>
                        <oui-column property="lastName"></oui-column>
                        <oui-action-menu>
                            <oui-action-menu-item text="Action 1"></oui-action-menu-item>
                            <oui-action-menu-item text="Action 2"></oui-action-menu-item>
                        </oui-action-menu>
                    </oui-datagrid>
                `, {
                    rows: fakeData.slice(0, 5)
                }
            );

            const $firstRow = getRow(element, 1);
            const $actionCell = getCell($firstRow, 2);

            expect(getActionMenu($actionCell)).toBeDefined();
            expect(isStickyCell($actionCell)).toBe(true);
        });
    });
});
