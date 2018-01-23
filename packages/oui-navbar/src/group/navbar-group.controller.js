export default class {
    constructor ($attrs, $element, NavbarGroupService) {
        "ngInject";

        this.$attrs = $attrs;
        this.$element = $element;
        this.navbarGroupService = NavbarGroupService;
    }

    $onInit () {
        // Support presence of attribute 'oui-navbar-group-last'
        if (angular.isDefined(this.$attrs.ouiNavbarGroupLast) && angular.isUndefined(this.isLast)) {
            this.isLast = true;
        }
    }

    $postLink () {
        this.navbarGroupService.addItemToGroup(this.$element[0], this.groupName);

        // Bind items when it's the last item
        if (this.isLast) {
            this.navbarGroupService.bindGroup(this.groupName);
        }
    }
}
