# Stepper

<component-status cx-design="complete" ux="rc"></component-status>

## Usage

### Simple step

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
    </oui-step-form>
</oui-stepper>
```

### Loading & Disabled state

```html:preview
<div class="oui-doc-preview-only">
    <p>
        <button class="oui-button" type="text"
            ng-class="{
                'oui-button_primary': !$ctrl.stepEnabled,
                'oui-button_secondary': $ctrl.stepEnabled
            }"
            ng-click="$ctrl.stepEnabled = !$ctrl.stepEnabled">
            Toggle disabled
        </button>

        <button class="oui-button" type="text"
            ng-class="{
                'oui-button_primary': !$ctrl.stepLoaded,
                'oui-button_secondary': $ctrl.stepLoaded
            }"
            ng-click="$ctrl.stepLoaded = !$ctrl.stepLoaded">
            Toggle loading
        </button>
    </p>
</div>
<oui-stepper>
    <oui-step-form name="disabledForm"
        header="Lorem ipsum"
        disabled="!$ctrl.stepEnabled"
        loading="!$ctrl.stepLoaded"
        loading-text="Dolor sit amet">
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

### Skippable step

```html:preview
<oui-stepper>
    <oui-step-form
        header="Lorem ipsum"
        skippable>
        <oui-field label="Test" size="xl">
            <input class="oui-input" id="test" name="test"
                type="text" autocomplete="off"
                ng-model="$ctrl.test">
        </oui-field>
    </oui-step-form>
</oui-stepper>
```

### Linear stepper

```html:preview
<oui-stepper linear on-finish="$ctrl.onFinish(forms)">
    <oui-step-form
        header="Step 0"
        description="This is a description"
        name="step1"
        on-focus="$ctrl.completed0 = false"
        on-submit="$ctrl.completed0 = true">
        <oui-field label="Firstname" size="xl">
            <input class="oui-input" id="step0" name="step0"
                type="text" autocomplete="off" required
                ng-model="$ctrl.step0">
        </oui-field>
    </oui-step-form>
    <oui-step-form skippable
        header="Step 1"
        description="This is a description"
        name="step1"
        on-focus="$ctrl.completed = false"
        on-submit="$ctrl.completed = true">
        <oui-field label="Firstname" size="xl">
            <input class="oui-input" id="firstname" name="firstname"
                type="text" autocomplete="off"
                ng-model="$ctrl.firstname">
        </oui-field>
        <oui-field label="Lastname" size="xl">
            <input class="oui-input" id="lastname" name="lastname"
                type="text" autocomplete="off"
                ng-model="$ctrl.lastname">
        </oui-field>
    </oui-step-form>

    <oui-step-form
        header="Step 2"
        description="This is a description"
        on-focus="$ctrl.stepSubmit()"
        on-submit="$ctrl.submitStep2(formStep2)">
        <oui-field label="Test" size="xl">
            <input class="oui-input" id="test" name="test"
                type="text" autocomplete="off" required
                ng-model="$ctrl.test2">
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
| `linear`        | boolean         | <?      |                  |                        | false               | enable stepper to handle steps                |
| `on-init`       | function        | &       |                  |                        |                     | initialization function                       |
| `on-finish`     | function        | &       |                  |                        |                     | submit all steps function                     |

### oui-step-form

| Attribute         | Type            | Binding | One-time binding | Values                 | Default             | Description                                 |
| ----              | ----            | ----    | ----             | ----                   | ----                | ----                                        |
| `name`            | string          | @?      | yes              |                        |                     | step form name, same as normal form         |
| `id`              | string          | @?      | yes              |                        |                     | step form id, same as normal form           |
| `header`          | string          | @?      | yes              |                        |                     | title of the step                           |
| `description`     | string          | @?      | yes              |                        |                     | description of the step                     |
| `loading`         | boolean         | <?      |                  |                        | false               | display the loading state                   |
| `loading-text`    | string          | <?      |                  |                        |                     | text for the loading state                  |
| `disabled`        | boolean         | <?      |                  |                        | false               | disable the step and shrink it              |
| `skippable`       | boolean         | <?      | yes              |                        | false               | add button to skip facultative step         |
| `on-submit`       | function        | &       |                  |                        |                     | submit step function                        |
| `on-focus`        | function        | &       |                  |                        |                     | action to do when opening step              |
