import { filter } from "lodash";

describe("oui-message: ", () => {
    let $compile;
    let $scope;
    const message = "My message";
    let textTranscludeElement;
    let textBindingElement;

    beforeEach(angular.mock.module("oui.message"));

    beforeEach(angular.mock.inject((_$rootScope_, _$compile_) => {
        $scope = _$rootScope_;
        $compile = _$compile_;
    }));

    describe("When success type, it", () => {
        beforeEach(() => {
            textTranscludeElement = compileDirective(`<oui-message type="success">${message}</oui-message>`);
            textBindingElement = compileDirective(`<oui-message type="success" message="${message}"></oui-message>`);
        });

        it("should display text message from transclusion", () => {
            expect(getTextMessageFromTransclusion(textTranscludeElement)).toBe(message);
        });

        it("should display text message from binding", () => {
            expect(getTextMessageFromBinding(textBindingElement)).toBe(message);
        });

        it("should display success icon", () => {
            expect(getIcons(textBindingElement, "oui-icon-success_circle").length).toBe(1);
        });

        it("should display close button", () => {
            expect(getCloseButton(textBindingElement)).toBeDefined();
        });

        it("should close message when close button is clicked", () => {
            getCloseButton(textBindingElement).click();

            expect(messageExist(textBindingElement)).toBe(false);
        });
    });

    describe("When error type, it", () => {
        beforeEach(() => {
            textTranscludeElement = compileDirective(`<oui-message type="error">${message}</oui-message>`);
            textBindingElement = compileDirective(`<oui-message type="error" message="${message}"></oui-message>`);
        });

        it("should display text message from transclusion", () => {
            expect(getTextMessageFromTransclusion(textTranscludeElement)).toBe(message);
        });

        it("should display text message from binding", () => {
            expect(getTextMessageFromBinding(textBindingElement)).toBe(message);
        });

        it("should display error icon", () => {
            expect(getIcons(textBindingElement, "oui-icon-error_circle").length).toBe(1);
        });

        it("should not display close button", () => {
            expect(getCloseButton(textBindingElement)).not.toBeDefined();
        });
    });

    describe("When info type, it", () => {
        beforeEach(() => {
            textTranscludeElement = compileDirective(`<oui-message type="info">${message}</oui-message>`);
            textBindingElement = compileDirective(`<oui-message type="info" message="${message}"></oui-message>`);
        });

        it("should display text message from transclusion", () => {
            expect(getTextMessageFromTransclusion(textTranscludeElement)).toBe(message);
        });

        it("should display text message from binding", () => {
            expect(getTextMessageFromBinding(textBindingElement)).toBe(message);
        });

        it("should display info icon", () => {
            expect(getIcons(textBindingElement, "oui-icon-info_circle").length).toBe(1);
        });

        it("should display close button", () => {
            expect(getCloseButton(textBindingElement)).toBeDefined();
        });

        it("should close message when close button is clicked", () => {
            getCloseButton(textBindingElement).click();

            expect(messageExist(textBindingElement)).toBe(false);
        });
    });

    describe("When warning type, it", () => {
        beforeEach(() => {
            textTranscludeElement = compileDirective(`<oui-message type="warning">${message}</oui-message>`);
            textBindingElement = compileDirective(`<oui-message type="warning" message="${message}"></oui-message>`);
        });

        it("should display text message from transclusion", () => {
            expect(getTextMessageFromTransclusion(textTranscludeElement)).toBe(message);
        });

        it("should display text message from binding", () => {
            expect(getTextMessageFromBinding(textBindingElement)).toBe(message);
        });

        it("should display warning icon", () => {
            expect(getIcons(textBindingElement, "oui-icon-warning_circle").length).toBe(1);
        });

        it("should not display close button", () => {
            expect(getCloseButton(textBindingElement)).not.toBeDefined();
        });
    });

    function compileDirective (template, scope) {
        angular.extend($scope, angular.copy(scope));
        const element = $compile(template)($scope);
        $scope.$digest();
        return element;
    }

    function getCloseButton (element) {
        return getElementsByClassName(element, "button", "oui-message__close-button")[0];
    }

    function getTextTransclude (element) {
        return getElementsByClassName(element, "div", "oui-message__body")[0];
    }

    function getTextMessageFromTransclusion (element) {
        return angular.element(getTextTransclude(element)).text();
    }

    function getTextMessageFromBinding (element) {
        const transcludeElement = angular.element(getTextTransclude(element));

        return angular.element(transcludeElement.children()[0]).text();
    }

    function getIcons (element, className) {
        return getElementsByClassName(element, "i", className);
    }

    function messageExist (element) {
        return getElementsByClassName(element, "div", "oui-message").length > 0;
    }

    function getElementsByClassName (element, tag, className) {
        return filter(element.find(tag), x => angular.element(x).hasClass(className));
    }
});
