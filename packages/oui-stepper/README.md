# Stepper

<component-status cx-design="complete" ux="rc"></component-status>

## Usage

```html
<oui-stepper
  name="..."
  onFinish="...">
  <oui-step-form
    step-title="..."
    onEnter="..."
    onSubmit="...">
  </oui-step-form>
</oui-stepper>
```

## Examples

### Simple stepper

```html:preview
<oui-stepper>
    <oui-step-form name="form"
        header="Lorem ipsum"
        on-submit="$ctrl.stepSubmit(form)">
        <oui-field label="Firstname" size="xl">
            <input class="oui-input"
                type="text"
                id="firstname"
                name="firstname"
                ng-model="$ctrl.firstname"
                required>
        </oui-field>
        <oui-field label="Lastname" size="xl">
            <input class="oui-input"
                type="text"
                id="lastname"
                name="lastname"
                ng-model="$ctrl.lastname"
                required>
        </oui-field>
        <oui-form-actions></oui-form-actions>
    </oui-step-form>

    <oui-step-form name="form2"
        header="Loading step"
        loading="true"
        on-submit="$ctrl.stepSubmit2(form)">
        <oui-field label="Test" size="xl">
            <input class="oui-input"
                type="text"
                id="test"
                name="test"
                ng-model="$ctrl.test"
                required>
        </oui-field>
    </oui-step-form>

    <oui-step-form name="disabledForm"
        header="Disabled step"
        on-submit="$ctrl.stepSubmit2(form)"
        disabled>
        <oui-field label="Test" size="xl">
            <input class="oui-input"
                type="text"
                id="test"
                name="test"
                ng-model="$ctrl.test"
                required>
        </oui-field>
    </oui-step-form>
</oui-stepper>
```

### Multi stepper

```html:preview
<oui-stepper>
    <oui-step-form name="formStep1" id="formStep1"
        header="Step 1"
        on-submit="$ctrl.submitStep1(formStep1)">
        <oui-field label="Firstname" size="xl">
            <input class="oui-input"
                type="text"
                id="firstname"
                name="firstname"
                ng-model="$ctrl.firstname"
                required>
        </oui-field>
        <oui-field label="Lastname" size="xl">
            <input class="oui-input"
                type="text"
                id="lastname"
                name="lastname"
                ng-model="$ctrl.lastname"
                required>
        </oui-field>
        <oui-form-actions></oui-form-actions>
    </oui-step-form>

    <oui-step-form name="form2"
        header="Step 2"
        disabled="formStep1.$invalid && formStep1.$submitted"
        on-submit="$ctrl.submitStep2(form2)">
        <oui-field label="Test" size="xl">
            <input class="oui-input"
                type="text"
                id="test"
                name="test"
                ng-model="$ctrl.test"
                required>
        </oui-field>
        <oui-form-actions></oui-form-actions>
    </oui-step-form>

    <oui-step-form name="disabled"
        header="Step 3 : Disabled"
        on-submit="$ctrl.submitStep2(disabled)"
        disabled>
        <oui-field label="Test" size="xl">
            <input class="oui-input"
                type="text"
                id="test"
                name="test"
                ng-model="$ctrl.test"
                required>
        </oui-field>
    </oui-step-form>
</oui-stepper>
```

## API

### oui-stepper

| Attribute       | Type            | Binding | One-time binding | Values                 | Default             | Description                                   |
| ----            | ----            | ----    | ----             | ----                   | ----                | ----                                          |
| `name`          | string          | @?      | yes              |                        |                     | stepper name used to identify step            |
| `id`            | string          | @?      | yes              |                        |                     | stepper id used to identify step              |
| `on-init`       | function        | &       |                  |                        |                     | initialization function                       |
| `on-finish`     | function        | &       |                  |                        |                     | submit all steps function                     |


### oui-step-form

| Attribute         | Type            | Binding | One-time binding | Values                 | Default             | Description                                 |
| ----              | ----            | ----    | ----             | ----                   | ----                | ----                                        |
| `name`            | string          | @?      | yes              |                        |                     | step form name, same as normal form         |
| `id`              | string          | @?      | yes              |                        |                     | step form id, same as normal form           |
| `on-submit`       | function        | &       |                  |                        |                     | submit step function                        |
| `header`          | string          | @?      | yes              |                        |                     | title to put in step header                 |
| `loading`         | function        | &?      |                  |                        |                     | display loader on step                      |
| `disabled`        | boolean         | <?      |                  |                        | false               | disable the step and shrink it              |
| `on-enter`        | function        | &       |                  |                        |                     | action to do when opening step              |


