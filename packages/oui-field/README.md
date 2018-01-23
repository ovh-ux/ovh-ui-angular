# Field

<component-status cx-design="complete" ux="rc"></component-status>

## Usage

```html:preview
<form novalidate name="$ctrl.myForm">
    <oui-field label="{{'Lastname'}}"
        help-text="At least 3 chars">
        <input
            class="oui-input"
            type="text"
            id="lastname"
            name="lastname"
            ng-model="$ctrl.user.lastname"
            required
            ng-minlength="3">
    </oui-field>
</form>
```
