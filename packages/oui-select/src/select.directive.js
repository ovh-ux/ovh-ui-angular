import controller from "./select.controller";
import template from "./select.html";

export default () => ({
    require: {
        fieldCtrl: "?^^ouiField",
        selectCtrl: "ouiSelect"
    },
    controller,
    controllerAs: "$ctrl",
    bindToController: true,
    scope: {
        model: "=",
        name: "@?",
        required: "<?",
        disabled: "<?",
        title: "@?",
        placeholder: "@?",
        items: "<",
        match: "@?",
        groupBy: "<?",
        align: "@?",
        onBlur: "&",
        onFocus: "&",
        onChange: "&"
    },
    compile: ($element, $attrs) => {
        const itemTemplate = $element.html();
        const $template = angular.element(template);
        const choicesElement = $template.find("ui-select-choices");
        const matchElement = $template.find("ui-select-match");

        choicesElement.html(itemTemplate);
        if ($attrs.groupBy) {
            choicesElement.attr("group-by", "$ctrl.groupBy");
        }

        if ($attrs.match) {
            matchElement.html(`{{$select.selected.${$attrs.match}}}`);
        } else {
            matchElement.html("{{$select.selected}}");
        }


        const htmlContent = $template[0].outerHTML;
        $element.empty();

        return (scope, elem, attrs, { selectCtrl }) => {
            selectCtrl.htmlContent = htmlContent;
        };
    }
});
