import "./filter/filter.spec.js";
import columnsData from "./columns.spec.data.json";
import originalFakeData from "./index.spec.data.json";

describe("ouiDatagrid", () => {
    let TestUtils;
    let $rootScope;
    let fakeData;

    const getRows = element => element[0].querySelectorAll(".oui-datagrid__body .oui-datagrid__row:not(.oui-datagrid__row_loading)");
    const getRow = (element, lineNumber) => angular.element(getRows(element)[lineNumber]);
    const getHeaderRow = element => angular.element(element[0].querySelector(".oui-datagrid__headers .oui-datagrid__row:not(.oui-datagrid__row_loading)"));
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

    beforeEach(inject((_TestUtils_, _$rootScope_) => {
        TestUtils = _TestUtils_;
        $rootScope = _$rootScope_;

        fakeData = angular.copy(originalFakeData);
    }));

    describe("Component", () => {
        describe("Local rows", () => {
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

                const $firstRow = getRow(element, 0);
                const $fifthRow = getRow(element, 4);

                expect(getCell($firstRow, 0).children().html()).toBe(fakeData[0].firstName);
                expect(getCell($firstRow, 1).children().html()).toBe(fakeData[0].lastName);

                expect(getCell($fifthRow, 0).children().html()).toBe(fakeData[4].firstName);
                expect(getCell($fifthRow, 1).children().html()).toBe(fakeData[4].lastName);
            });

            it("should refresh when rows changed", () => {
                const fakeDataCopy = angular.copy(fakeData.slice(0, 5));
                const newCellValue = "fakeFirstName";

                const element = TestUtils.compileTemplate(`
                        <oui-datagrid rows="$ctrl.rows">
                            <oui-column property="firstName"></oui-column>
                            <oui-column property="lastName"></oui-column>
                        </oui-datagrid>
                    `, {
                    rows: fakeDataCopy
                }
                );

                changeCellValue(element, 0, "firstName", newCellValue);

                const $firstRow = getRow(element, 0);

                expect(getCell($firstRow, 0).children().html()).toBe(newCellValue);
            });

            it("should load data instantly if data is already available", inject(($q) => {
                const loadRowSpy = jasmine.createSpy("loadRow");
                const additionnalDataValue = "+";

                loadRowSpy.and.callFake(($row) =>
                    $q.when({
                        ...$row,
                        more: additionnalDataValue
                    })
                );

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

                const $firstRow = getRow(element, 0);

                expect(loadRowSpy.calls.count()).toEqual(5);

                expect(getCell($firstRow, 0).children().html()).toBe(fakeData[0].firstName);
                expect(getCell($firstRow, 2).children().html()).toBe(additionnalDataValue);
            }));

            it("should keep undefined when a cell is not loaded", inject(($q) => {
                const deferred = $q.defer();
                const loadRowSpy = jasmine.createSpy("loadRow");

                loadRowSpy.and.returnValue(deferred.promise);

                const element = TestUtils.compileTemplate(`
                        <oui-datagrid rows="$ctrl.rows" row-loader="$ctrl.loadRow($row)">
                            <oui-column property="firstName"></oui-column>
                            <oui-column property="lastName"></oui-column>
                            <oui-column property="more"></oui-column>
                        </oui-datagrid>
                    `, {
                    rows: fakeData.slice(0, 1),
                    loadRow: loadRowSpy
                }
                );

                const $firstRow = getRow(element, 0);

                expect(loadRowSpy.calls.count()).toEqual(1);

                expect(getCell($firstRow, 0).children().html()).toBe(fakeData[0].firstName);
                expect(getCell($firstRow, 2).children().html()).toBeUndefined();
            }));

            it("should load data later and display it", inject(($q) => {
                const additionnalDataValue = "+";
                const deferred = $q.defer();
                const loadRowSpy = jasmine.createSpy("loadRow");

                loadRowSpy.and.returnValue(deferred.promise);

                const element = TestUtils.compileTemplate(`
                        <oui-datagrid rows="$ctrl.rows" row-loader="$ctrl.loadRow($row)">
                            <oui-column property="firstName"></oui-column>
                            <oui-column property="lastName"></oui-column>
                            <oui-column property="more"></oui-column>
                        </oui-datagrid>
                    `, {
                    rows: fakeData.slice(0, 1),
                    loadRow: loadRowSpy
                }
                );

                deferred.resolve({
                    more: additionnalDataValue
                });

                $rootScope.$digest();

                const $firstRow = getRow(element, 0);

                expect(getCell($firstRow, 0).children().html()).toBe(fakeData[0].firstName);
                expect(getCell($firstRow, 2).children().html()).toBe(additionnalDataValue);
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

                expect(rows.length).toEqual(2);
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
                        const $row = getRow(element, index);

                        expect(getCell($row, 1).children().html()).toBe(lastName);
                    });
            });

            describe("Filtering", () => {
                it("should set page to 1 on filtering", () => {
                    const element = TestUtils.compileTemplate(`
                            <oui-datagrid rows="$ctrl.rows">
                                <oui-column property="firstName" type="string" searchable></oui-column>
                                <oui-column property="lastName"></oui-column>
                            </oui-datagrid>
                        `, {
                        rows: fakeData
                    });

                    const tableController = element.controller("ouiDatagrid");
                    tableController.paging.setOffset = jasmine.createSpy("setOffsetSpy")
                        .and.callThrough();
                    tableController.onCriteriaChange([{
                        property: null, // any property
                        operator: "contains",
                        value: "aaron"
                    }]);
                    element.scope().$apply();

                    expect(tableController.paging.setOffset).toHaveBeenCalledWith(1);
                });

                it("should not display search input nor criteria adder", () => {
                    const element = TestUtils.compileTemplate(`
                            <oui-datagrid rows="$ctrl.rows">
                                <oui-column property="firstName" type="string"></oui-column>
                                <oui-column property="lastName"></oui-column>
                            </oui-datagrid>
                        `, {
                        rows: fakeData
                    });

                    const searchInput = element.find("oui-search");
                    const criteriaAdder = element.find("oui-criteria-adder");

                    expect(searchInput.length).toEqual(0);
                    expect(criteriaAdder.length).toEqual(0);
                });

                it("should display search input but not criteria adder", () => {
                    const element = TestUtils.compileTemplate(`
                            <oui-datagrid rows="$ctrl.rows">
                                <oui-column property="firstName" type="string" searchable></oui-column>
                                <oui-column property="lastName"></oui-column>
                            </oui-datagrid>
                        `, {
                        rows: fakeData
                    });

                    const searchInput = element.find("oui-search");
                    const criteriaAdder = element.find("oui-criteria-adder");

                    expect(searchInput.length).toEqual(1);
                    expect(criteriaAdder.length).toEqual(0);
                });

                it("should display criteria adder input but not search", () => {
                    const element = TestUtils.compileTemplate(`
                            <oui-datagrid rows="$ctrl.rows">
                                <oui-column property="firstName" type="string" filterable></oui-column>
                                <oui-column property="lastName"></oui-column>
                            </oui-datagrid>
                        `, {
                        rows: fakeData
                    });

                    const searchInput = element.find("oui-search");
                    const criteriaAdder = element.find("oui-criteria-adder");

                    expect(searchInput.length).toEqual(0);
                    expect(criteriaAdder.length).toEqual(1);
                });

                it("should display search and criteria adder", () => {
                    const element = TestUtils.compileTemplate(`
                            <oui-datagrid rows="$ctrl.rows">
                                <oui-column property="firstName" type="string" filterable></oui-column>
                                <oui-column property="lastName" type="string" searchable></oui-column>
                            </oui-datagrid>
                        `, {
                        rows: fakeData
                    });

                    const searchInput = element.find("oui-search");
                    const criteriaAdder = element.find("oui-criteria-adder");

                    expect(searchInput.length).toEqual(1);
                    expect(criteriaAdder.length).toEqual(1);
                });

                describe("Search text", () => {
                    it("should filter text on a simple column", () => {
                        const criteria = [{
                            property: null, // any property
                            operator: "contains",
                            value: "aaron"
                        }];
                        const expectedResults = 2;

                        const element = TestUtils.compileTemplate(`
                                <oui-datagrid rows="$ctrl.rows">
                                    <oui-column property="firstName" type="string" searchable></oui-column>
                                    <oui-column property="lastName"></oui-column>
                                </oui-datagrid>
                            `, {
                            rows: fakeData
                        });

                        const tableController = element.controller("ouiDatagrid");
                        tableController.onCriteriaChange(criteria);
                        element.scope().$apply();

                        expect(getRows(element).length).toEqual(expectedResults);
                    });

                    it("should filter text on a multiple columns", () => {
                        const criteria = [{
                            property: null, // any property
                            operator: "contains",
                            value: "ron"
                        }];
                        const expectedResults = 15;

                        const element = TestUtils.compileTemplate(`
                                <oui-datagrid rows="$ctrl.rows">
                                    <oui-column property="firstName" type="string" searchable></oui-column>
                                    <oui-column property="lastName" type="string" searchable></oui-column>
                                </oui-datagrid>
                            `, {
                            rows: fakeData
                        });

                        const tableController = element.controller("ouiDatagrid");
                        tableController.onCriteriaChange(criteria);
                        element.scope().$apply();

                        expect(getRows(element).length).toEqual(expectedResults);
                    });
                });

                describe("Text", () => {
                    it("should filter with contains operator", () => {
                        const criteria = [{
                            property: "firstName",
                            operator: "contains",
                            value: "aaron"
                        }];
                        const expectedResults = 2;

                        const element = TestUtils.compileTemplate(`
                                <oui-datagrid rows="$ctrl.rows">
                                    <oui-column property="firstName" type="string" filterable></oui-column>
                                    <oui-column property="lastName"></oui-column>
                                </oui-datagrid>
                            `, {
                            rows: fakeData
                        });

                        const tableController = element.controller("ouiDatagrid");
                        tableController.onCriteriaChange(criteria);
                        element.scope().$apply();

                        expect(getRows(element).length).toEqual(expectedResults);
                    });
                });
            });
        });

        describe("Remote rows", () => {
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

                const $firstRow = getRow(element, 0);
                const $fifthRow = getRow(element, 4);

                expect(getCell($firstRow, 0).children().html()).toBe(fakeData[0].firstName);
                expect(getCell($firstRow, 1).children().html()).toBe(fakeData[0].lastName);

                expect(getCell($fifthRow, 0).children().html()).toBe(fakeData[4].firstName);
                expect(getCell($fifthRow, 1).children().html()).toBe(fakeData[4].lastName);
            });

            it("should keep undefined when a cell is not loaded", inject(($q) => {
                const deferred = $q.defer();
                const loadRowSpy = jasmine.createSpy("loadRow");

                loadRowSpy.and.returnValue(deferred.promise);

                rowsLoaderSpy.and.returnValue($q.when({
                    data: fakeData.slice(0, 1),
                    meta: {
                        currentOffset: 0,
                        pageCount: 1,
                        totalCount: 1,
                        pageSize: 1
                    }
                }));

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

                const $firstRow = getRow(element, 0);

                expect(loadRowSpy.calls.count()).toEqual(1);

                expect(getCell($firstRow, 0).children().html()).toBe(fakeData[0].firstName);
                expect(getCell($firstRow, 2).children().html()).toBeUndefined();
            }));

            it("should load data later and display it", inject(($q) => {
                const additionnalDataValue = "+";
                const deferred = $q.defer();
                const loadRowSpy = jasmine.createSpy("loadRow");

                loadRowSpy.and.returnValue(deferred.promise);

                rowsLoaderSpy.and.returnValue($q.when({
                    data: fakeData.slice(0, 1),
                    meta: {
                        currentOffset: 0,
                        pageCount: 1,
                        totalCount: 1,
                        pageSize: 1
                    }
                }));

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

                deferred.resolve({
                    more: additionnalDataValue
                });

                $rootScope.$digest();

                const $firstRow = getRow(element, 0);

                expect(loadRowSpy.calls.count()).toEqual(1);
                expect(getCell($firstRow, 0).children().html()).toBe(fakeData[0].firstName);
                expect(getCell($firstRow, 2).children().html()).toBe(additionnalDataValue);
            }));

            it("should display rows that can only be contained in a page", inject(($q) => {
                rowsLoaderSpy.and.callFake(config =>
                    $q.when({
                        data: fakeData.slice(config.offset - 1, config.pageSize),
                        meta: {
                            totalCount: config.pageSize - config.offset
                        }
                    })
                );

                const element = TestUtils.compileTemplate(`
                        <oui-datagrid rows-loader="$ctrl.loadRows($config)" page-size="2">
                            <oui-column property="firstName"></oui-column>
                            <oui-column property="lastName"></oui-column>
                        </oui-datagrid>
                    `, {
                    loadRows: rowsLoaderSpy
                }
                );

                const rows = getRows(element);

                expect(rows.length).toEqual(2);
            }));

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
                        columnName: "lastName",
                        dir: 1
                    }
                }));
            });

            describe("Filtering", () => {
                describe("Search text", () => {
                    it("should send criteria in rows-loader params", () => {
                        const criteria = [{
                            property: null, // any property
                            operator: "contains",
                            value: "aaron"
                        }];

                        const element = TestUtils.compileTemplate(`
                                <oui-datagrid rows-loader="$ctrl.loadRows($config)">
                                    <oui-column property="firstName" type="text"></oui-column>
                                    <oui-column property="lastName"></oui-column>
                                </oui-datagrid>
                            `, {
                            loadRows: rowsLoaderSpy
                        });

                        const tableController = element.controller("ouiDatagrid");
                        tableController.onCriteriaChange(criteria);
                        element.scope().$apply();

                        expect(rowsLoaderSpy).toHaveBeenCalledWith(jasmine.objectContaining({
                            criteria
                        }));
                    });
                });

                describe("Text", () => {
                    it("should filter with contains operator", () => {
                        const criteria = [{
                            property: "firstName",
                            operator: "contains",
                            value: "aaron"
                        }];

                        const element = TestUtils.compileTemplate(`
                                <oui-datagrid rows-loader="$ctrl.loadRows($config)">
                                    <oui-column property="firstName" type="text"></oui-column>
                                    <oui-column property="lastName"></oui-column>
                                </oui-datagrid>
                            `, {
                            loadRows: rowsLoaderSpy
                        });

                        const tableController = element.controller("ouiDatagrid");
                        tableController.onCriteriaChange(criteria);
                        element.scope().$apply();

                        expect(rowsLoaderSpy).toHaveBeenCalledWith(jasmine.objectContaining({
                            criteria
                        }));
                    });
                });
            });
        });

        describe("Dynamic columns", () => {
            it("should update columns list", () => {
                const element = TestUtils.compileTemplate(`
                    <oui-datagrid rows="$ctrl.rows"
                        columns="$ctrl.columns">
                    </oui-datagrid>
                `, {
                    columns: columnsData.columns1,
                    rows: fakeData.slice(0, 5)
                });

                const scope = element.scope();
                const controller = element.controller("ouiDatagrid");
                expect(controller.columns.length).toEqual(columnsData.columns1.length);

                scope.$ctrl.columns = columnsData.columns2;
                scope.$digest();
                expect(controller.columns.length).toEqual(columnsData.columns2.length);
            });

            it("should only show non hidden columns", () => {
                const element = TestUtils.compileTemplate(`
                    <oui-datagrid rows="$ctrl.rows"
                        columns="[{
                            title: 'First name',
                            property: 'firstName',
                            sortable: 'asc',
                            searchable: true,
                            filterable: true,
                            hidden: $ctrl.hidden
                          },
                          {
                            title: 'Last name',
                            property: 'lastName',
                            sortable: true,
                            searchable: true,
                            filterable: true
                        }]">
                    </oui-datagrid>
                `, {
                    hidden: false,
                    rows: fakeData.slice(0, 5)
                });

                const scope = element.scope();
                const controller = element.controller("ouiDatagrid");
                expect(controller.columns.length).toEqual(2);

                scope.$ctrl.hidden = true;
                scope.$digest();
                expect(controller.columns.length).toEqual(1);
            });
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

            const $firstRow = getRow(element, 0);

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

            const $firstRow = getRow(element, 0);

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

            const $firstRow = getRow(element, 0);

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

            const $firstRow = getRow(element, 0);
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

            const $headerRow = getHeaderRow(element);

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

            const $headerRow = getHeaderRow(element);

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

            const $headerRow = getHeaderRow(element, 0);

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
                    <oui-datagrid rows="$ctrl.rows" page-size="2">
                        <oui-column property="firstName"></oui-column>
                        <oui-column property="lastName"></oui-column>
                    </oui-datagrid>
                `, {
                rows: fakeData.slice(0, 5)
            }
            );

            getNextPagePaginationButton(element).triggerHandler("click");

            const $firstRow = getRow(element, 0);
            const $secondRow = getRow(element, 1);

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

            const $firstRow = getRow(element, 0);
            const $actionCell = getCell($firstRow, 2);

            expect(getActionMenu($actionCell)).toBeDefined();
            expect(isStickyCell($actionCell)).toBe(true);
        });

        it("should support ng-repeat", () => {
            const firstDatagridSize = 5;
            const secondDatagridSize = 10;
            const multiData = [
                fakeData.slice(0, firstDatagridSize),
                fakeData.slice(0, secondDatagridSize)
            ];

            const element = TestUtils.compileTemplate(`
                    <div>
                        <div ng-repeat="data in $ctrl.multiData track by $index">
                            <oui-datagrid rows="data">
                                <oui-column property="firstName"></oui-column>
                                <oui-column property="lastName"></oui-column>
                                <oui-action-menu>
                                    <oui-action-menu-item text="Action 1"></oui-action-menu-item>
                                    <oui-action-menu-item text="Action 2"></oui-action-menu-item>
                                </oui-action-menu>
                            </oui-datagrid>
                        </div>
                    </div>
                `, {
                multiData
            });

            const datagridElements = element.find("oui-datagrid");
            expect(datagridElements.length).toEqual(multiData.length);

            const firstDatagridRows = getRows(angular.element(datagridElements[0]));
            expect(firstDatagridRows.length).toEqual(firstDatagridSize);

            const secondDatagridRows = getRows(angular.element(datagridElements[1]));
            expect(secondDatagridRows.length).toEqual(secondDatagridSize);
        });

        it("should display an extra top content", () => {
            const element = TestUtils.compileTemplate(`
                    <oui-datagrid rows="$ctrl.rows">
                        <oui-column property="firstName"></oui-column>
                        <oui-column property="lastName"></oui-column>
                        <extra-top>PLACEHOLDER</extra-top>
                    </oui-datagrid>
                `, {
                rows: fakeData.slice(0, 5)
            });

            expect(element.text()).toContain("PLACEHOLDER");
        });

        describe("Columns", () => {
            it("should support dataset notation", () => {
                const element = TestUtils.compileTemplate(`
                        <oui-datagrid data-rows="$ctrl.rows">
                            <oui-column data-property="firstName"
                                data-sortable="asc"
                                data-title="'First name'"></oui-column>
                            <oui-column property="lastName"
                                data-sortable
                                data-title="'Last name'"></oui-column>
                            <oui-action-menu>
                                <oui-action-menu-item text="Action 1"></oui-action-menu-item>
                                <oui-action-menu-item text="Action 2"></oui-action-menu-item>
                            </oui-action-menu>
                        </oui-datagrid>
                    `, {
                    rows: fakeData.slice(0, 5)
                });

                // Check data-sortable and data-title
                const $headerRow = getHeaderRow(element);
                expect(getHeaderCell($headerRow, 0).html()).toEqual("First name");
                expect(isSortableAscCell(getHeaderCell($headerRow, 0))).toBe(true);
                expect(getHeaderCell($headerRow, 1).html()).toEqual("Last name");
                expect(isSortableCell(getHeaderCell($headerRow, 1))).toBe(true);

                // Check data-property
                const firstRow = getRow(element, 0);
                expect(getCell(firstRow, 0).text().trim()).toEqual("Ann");
                expect(getCell(firstRow, 1).text().trim()).toEqual("Cole");
            });

            it("should not accept white spaces as template", () => {
                const element = TestUtils.compileTemplate(`
                    <oui-datagrid data-rows="$ctrl.rows">
                        <oui-column data-property="firstName"
                            data-title="'First name'">
                        </oui-column>
                    </oui-datagrid>
                `, {
                    rows: fakeData.slice(0, 5)
                });

                // Check that property is still rendered in the cell.
                const firstRow = getRow(element, 0);
                expect(getCell(firstRow, 0).text().trim()).toEqual("Raymond");
            });
        });
    });

    function changeCellValue (element, rowNumber, columnName, newValue) {
        const controller = TestUtils.getElementController(element);

        controller.rows[rowNumber][columnName] = newValue;

        $rootScope.$digest();
    }
});
