import controller from './switch.controller'

export default {
  template: `<label class="oui-switch">
      <input type="checkbox"
        name="{{ $ctrl.name }}"
        class="oui-switch__checkbox"
        ng-disabled="$ctrl.disabled"
        ng-model="$ctrl.value"
        ng-change="$ctrl.onChange({ $event: { value: $ctrl.value } })">
      <div class="oui-switch__slider"></div>
      <i class="oui-icon oui-icon-success" aria-hidden="true"></i>
      <i class="oui-icon oui-icon-error" aria-hidden="true"></i>
    </label>`,
  controller,
  bindings: {
    disabled: '<?',
    name: '@?',
    value: '<',
    onChange: '&?'
  },
  transclude: true
}
