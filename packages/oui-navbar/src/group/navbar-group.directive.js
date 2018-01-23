import controller from "./navbar-group.controller";

export default () => ({
    restrict: "A",
    bindToController: {
        groupName: "@ouiNavbarGroup",
        isLast: "<?ouiNavbarGroupLast"
    },
    controller
});
