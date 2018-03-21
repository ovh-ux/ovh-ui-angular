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
    <oui-step-form header="Completed step" state="complete"></oui-step-form>
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
    </oui-step-form>
    <oui-step-form name="form2"
        header="Dolor sit amet"
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
    <oui-step-form name="form2"
        header="Consectetur adipiscing elit"
        on-submit="$ctrl.stepSubmit2(form)"
        state="disabled">
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
| `name`          | string          | @?      |                  |                        |                     | stepper name used to identify step            |
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
| `autovalidate`    | boolean         | <?      | yes              | false                  |                     | enable auto validation of the step          |
| `on-enter`        | function        | &       |                  |                        |                     | action to do when opening step              |


