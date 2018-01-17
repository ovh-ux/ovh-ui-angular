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

                expect(icon.hasClass(data.iconClass)).toBe(true);
            });
        });

        describe("Main links", () => {
            const data = mockData.mainLinks;
            const activeIndex = 0;

            let component;
            let menu;
            let links;

            beforeEach(() => {
                component = testUtils.compileTemplate(`<oui-navbar universe="{{$ctrl.mainLinks[${activeIndex}].name}}" main-links="$ctrl.mainLinks"></oui-navbar>`, {
                    mainLinks: data
                });

                menu = angular.element(component[0].querySelector(".oui-navbar-list_main"));
                links = menu.children("li");
            });

            it("should create a list of links", () => {
                expect(menu.length).toEqual(1);
                expect(links.length).toEqual(data.length);
            });

            it("should have an active link from universe value", () => {
                const activeLink = links.eq(activeIndex).children("a");

                expect(activeLink.hasClass("oui-navbar-link_active")).toBe(true);
            });

            it("should have a link with a primary variant", () => {
                const linkIndex = 0;
                const primaryLink = links.eq(linkIndex).children("a");

                expect(data[linkIndex].isPrimary).toBe(true);
                expect(primaryLink.hasClass("oui-navbar-link_primary"));
            });

            it("should have a link with a secondary variant", () => {
                const linkIndex = data.length - 1;
                const secondaryLink = links.eq(linkIndex).children("a");

                expect(data[linkIndex].isPrimary).toBe(false);
                expect(secondaryLink.hasClass("oui-navbar-link_secondary"));
            });
        });

        describe("Aside links", () => {
            const data = mockData.asideLinks;

            let component;
            let menu;
            let links;

            beforeEach(() => {
                component = testUtils.compileTemplate('<oui-navbar aside-links="$ctrl.asideLinks"></oui-navbar>', {
                    asideLinks: data
                });
                menu = angular.element(component[0].querySelector(".oui-navbar-list_aside"));
                links = menu.children("li");
            });

            it("should create a list of links", () => {
                expect(menu.length).toEqual(1);
                expect(links.length).toEqual(data.length);
            });

            it("should have links with tertiary variant", () => {
                expect(links.eq(0).children("a").hasClass("oui-navbar-link_tertiary")).toBe(true);
            });

            it("should have links with icon", () => {
                const index = 1;

                expect(links.eq(index).children("span").hasClass(data[index].iconClass));
            });

            it("should open the menu when button is clicked", () => {
                const button = links.eq(0).children("button");

                expect(!!data[0].subLinks).toBe(true);
                button.triggerHandler("click");
                expect(button.attr("aria-expanded")).toBe("true");
            });

            it("should have a notifications menu", () => {
                const notificationsIndex = 1;
                const notificationsMenu = angular.element(links[notificationsIndex].querySelector(".oui-navbar-menu_notifications"));

                expect(data[notificationsIndex].name).toBe("notifications");
                expect(notificationsMenu.hasClass("oui-navbar-menu_notifications")).toBe(true);
            });

            it("should have a user menu", () => {
                const userIndex = 3;
                const userMenu = angular.element(links[userIndex].querySelector(".oui-navbar-menu_user"));

                expect(data[userIndex].name).toBe("user");
                expect(userMenu.hasClass("oui-navbar-menu_user")).toBe(true);
            });
        });

        describe("Responsive menu", () => {
            const data = mockData.mainLinks;

            let component;
            let toggler;
            let responsiveMenu;

            beforeEach(() => {
                component = testUtils.compileTemplate('<oui-navbar main-links="$ctrl.mainLinks"></oui-navbar>', {
                    mainLinks: data
                });

                toggler = angular.element(component[0].querySelector(".oui-navbar-toggler"));
                responsiveMenu = angular.element(component[0].querySelector(".oui-navbar-menu_toggle"));
            });

            it("should create a toggler button", () => {
                expect(toggler.length).toEqual(1);
            });

            it("should create a responsive menu", () => {
                expect(responsiveMenu.length).toEqual(1);
                expect(responsiveMenu[0].tagName).toBe("OUI-NAVBAR-MENU");
            });

            it("should open the responsive menu when the toggler button is clicked", () => {
                toggler.triggerHandler("click");
                expect(toggler.attr("aria-expanded")).toBe("true");
            });
        });

        describe("Backdrop", () => {
            const data = mockData.mainLinks;

            let component;
            let backdrop;
            let toggler;

            beforeEach(() => {
                component = testUtils.compileTemplate('<oui-navbar main-links="$ctrl.mainLinks"></oui-navbar>', {
                    mainLinks: data
                });

                backdrop = angular.element(component[0].querySelector(".oui-navbar-backdrop"));
                toggler = angular.element(component[0].querySelector(".oui-navbar-toggler"));
            });

            it("should have a backdrop", () => {
                expect(backdrop.length).toEqual(1);
            });

            it("should be active when a menu is open", () => {
                toggler.triggerHandler("click");
                expect(backdrop.hasClass("oui-navbar-backdrop_active")).toBe(true);
            });

            it("should close all opened menus when clicked", () => {
                toggler.triggerHandler("click");
                backdrop.triggerHandler("click");
                expect(toggler.attr("aria-expanded")).toBe("false");
            });
        });
    });
});
