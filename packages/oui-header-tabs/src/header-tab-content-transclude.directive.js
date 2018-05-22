export default () => {
    "ngInject";
    return {
        restrict: "A",
        require: "^ouiHeaderTabs",
        link: (scope, elm, attrs) => {
            const tab = scope.$eval(attrs.ouiTabContentTransclude);
            tab.$transcludeFn((contents) => {
                angular.forEach(contents, (node) => {
                    if (isTabHeading(node)) {
                        tab.headingElement = node;
                    } else {
                        elm.append(node);
                    }
                });
            });
        }
    };
    function isTabHeading (node) {
        return node.tagName && (
            node.tagName.toLowerCase() === "oui-tab-heading" ||
            node.tagName.toLowerCase() === "data-oui-tab-heading" ||
            node.tagName.toLowerCase() === "x-oui-tab-heading" ||
            node.tagName.toLowerCase() === "oui:tab-heading"
        );
    }
};
