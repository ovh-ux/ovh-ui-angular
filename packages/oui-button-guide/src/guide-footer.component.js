import template from "./guide-footer.html";

export default {
    template,
    bindings: {
        text: "@",
        button: "<?",
        ariaLabel: "@?",
        onClick: "&"
    },
    transclude: true
};
