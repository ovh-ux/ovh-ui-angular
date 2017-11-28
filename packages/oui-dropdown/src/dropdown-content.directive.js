const dropdownContentClass = "oui-dropdown__content";
const arrowDropdownContentModifierClass = "oui-dropdown__content_arrow";
const arrowDropdownContentClass = "oui-dropdown__arrow";

export default () => {
    "ngInject";

    return {
        restrict: "AE",
        require: "^ouiDropdown",
        scope: {},
        link: (scope, element, attrs, ctrl) => {
            const wrapped = element.wrap(`<div class="${dropdownContentClass}"></div>`).parent();

            element.attr("aria-labelledby", ctrl.id);

            if (ctrl.arrow) {
                wrapped.addClass(arrowDropdownContentModifierClass);
                wrapped.prepend(`<div class="${arrowDropdownContentClass}"></div>`);
            }
        }
    };
};
