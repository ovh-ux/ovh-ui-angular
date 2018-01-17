import mockData from "./index.spec.data.json";

describe("ouiNavbar", () => {
    let testUtils;

    beforeEach(angular.mock.module("oui.navbar"));
    beforeEach(angular.mock.module("oui.test-utils"));

    beforeEach(inject((_TestUtils_) => {
        testUtils = _TestUtils_;
    }));

    describe("Component", () => {

        describe("Brand", () => {
            const data = mockData.brand;
            let component;
            let brand;

            beforeEach(() => {
                component = testUtils.compileTemplate('<oui-navbar brand="$ctrl.brand"></oui-navbar>', {
                    brand: data
                });
                brand = angular.element(component[0].querySelector(".oui-navbar__brand"));
            });

            it("should create a link", () => {
                expect(brand.length).toEqual(1);
                expect(brand[0].tagName).toBe("A");
                expect(brand.attr("href")).toBe(data.url);
            });

            it("should have an accessibility label", () => {
                expect(brand.attr("aria-label")).toBe(data.label);
            });

            it("should have an icon", () => {
                const icon = brand.find("span").eq(0);
                expect(icon.hasClass(data.class));
            });
        });

        describe("Main links", () => {
            const data = mockData.mainLinks;
            let component;

            beforeEach(() => {
                component = testUtils.compileTemplate('<oui-navbar main-links="$ctrl.mainLinks"></oui-navbar>', {
                    mainLinks: data
                });
            });

            it("should create a list of links", () => {
                const menu = angular.element(component[0].querySelector(".oui-navbar-list_main"));
                expect(menu.length).toEqual(1);

                const links = menu.children();
                expect(links.length).toEqual(data.length);
            });

            it("should create a toggler button", () => {
                const toggler = angular.element(component[0].querySelector(".oui-navbar-toggler"));
                expect(toggler.length).toEqual(1);
            });

            it("should create a responsive menu", () => {
                const menu = angular.element(component[0].querySelector(".oui-navbar-menu_toggle"));
                expect(menu.length).toEqual(1);
                expect(menu[0].tagName).toBe("OUI-NAVBAR-MENU");
            });

            it("should open the responsive menu when the toggler button is clicked", () => {
                const toggler = angular.element(component[0].querySelector(".oui-navbar-toggler"));
                toggler.triggerHandler("click");
                expect(toggler.attr("aria-expanded")).toBe("true");
            });
        });

        describe("Aside links", () => {
            const data = mockData.mainLinks;
            let component;

            beforeEach(() => {
                component = testUtils.compileTemplate('<oui-navbar aside-links="$ctrl.asideLinks"></oui-navbar>', {
                    asideLinks: data
                });
            });

            it("should create a list of links", () => {
                const menu = angular.element(component[0].querySelector(".oui-navbar-list_aside"));
                expect(menu.length).toEqual(1);

                const links = menu.children();
                expect(links.length).toEqual(data.length);
            });
        });

        describe("Backdrop", () => {
            const data = mockData.mainLinks;
            let component;

            beforeEach(() => {
                component = testUtils.compileTemplate('<oui-navbar main-links="$ctrl.mainLinks"></oui-navbar>', {
                    mainLinks: data
                });
            });

            it("should have a backdrop", () => {
                const backdrop = angular.element(component[0].querySelector(".oui-navbar-backdrop"));
                expect(backdrop.length).toEqual(1);
            });

            it("should be active when a menu is open", () => {
                const toggler = angular.element(component[0].querySelector(".oui-navbar-toggler"));
                toggler.triggerHandler("click");

                const backdrop = angular.element(component[0].querySelector(".oui-navbar-backdrop"));
                expect(backdrop.hasClass("oui-navbar-backdrop_active"));
            });

            it("should close all opened menus when clicked", () => {
                const toggler = angular.element(component[0].querySelector(".oui-navbar-toggler"));
                toggler.triggerHandler("click");

                const backdrop = angular.element(component[0].querySelector(".oui-navbar-backdrop"));
                backdrop.triggerHandler("click");

                expect(toggler.attr("aria-expanded")).toBe("false");
            });
        });
    });
});
