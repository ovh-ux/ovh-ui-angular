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
        <oui-form-actions submit-text="Next"></oui-form-actions>
    </oui-step-form>
</oui-stepper>
```

### Disabled step

```html:preview
<div class="oui-doc-preview-only">
    <p>
        <oui-button text="Toggle state" variant="primary"
            ng-click="$ctrl.stepEnabled = !$ctrl.stepEnabled">
        </oui-button>
    </p>
</div>
<oui-stepper>
    <oui-step-form name="disabledForm"
        header="Lorem ipsum"
        disabled="!$ctrl.stepEnabled">
        <oui-field label="Test" size="xl">
            <input class="oui-input"
                type="text"
                id="test"
                name="test"
                ng-model="$ctrl.test"
                required>
        </oui-field>
        <oui-form-actions submit-text="Next"></oui-form-actions>
    </oui-step-form>
</oui-stepper>
```

### Loading step

```html:preview
<div class="oui-doc-preview-only">
    <p>
        <oui-button text="Toggle state" variant="primary"
            ng-click="$ctrl.stepLoaded = !$ctrl.stepLoaded">
        </oui-button>
    </p>
</div>
<oui-stepper>
    <oui-step-form name="form2"
        header="Lorem ipsum"
        loading="!$ctrl.stepLoaded">
        <oui-field label="Test" size="xl">
            <input class="oui-input"
                type="text"
                id="test"
                name="test"
                ng-model="$ctrl.test"
                required>
        </oui-field>
        <oui-form-actions submit-text="Next"></oui-form-actions>
    </oui-step-form>
</oui-stepper>
```

### Skippable step

```html:preview
<oui-stepper>
    <oui-step-form
        header="Lorem ipsum"
        skippable
        skippable-text="Skip Lorem ipsum step">
        <oui-field label="Test" size="xl">
            <input class="oui-input"
                autocomplete="off"
                type="text"
                id="test"
                name="test"
                ng-model="$ctrl.test">
        </oui-field>
        <oui-form-actions submit-text="Next"></oui-form-actions>
    </oui-step-form>
</oui-stepper>
```

### Linear stepper

```html:preview
<oui-stepper linear on-finish="$ctrl.onFinish(forms)">
    <oui-step-form
        header="Step 0"
        name="step1"
        on-focus="$ctrl.completed0 = false"
        on-submit="$ctrl.completed0 = true">
        <p>This is a description</p>
        <oui-field label="Firstname" size="xl">
            <input class="oui-input"
                autocomplete="off"
                type="text"
                id="step0"
                name="step0"
                ng-model="$ctrl.step0"
                required>
        </oui-field>
        <oui-form-actions submit-text="Next" ng-if="!$ctrl.completed0"></oui-form-actions>
    </oui-step-form>
    <oui-step-form
        header="Step 1"
        name="step1"
        on-focus="$ctrl.completed = false"
        on-submit="$ctrl.completed = true">
        <oui-field label="Firstname" size="xl" ng-if="$ctrl.completed">
            <input class="oui-input"
                autocomplete="off"
                type="text"
                id="firstname"
                name="firstname"
                ng-model="$ctrl.firstname"
                disabled>
        </oui-field>
        <oui-field label="Lastname" size="xl" ng-if="$ctrl.completed">
            <input class="oui-input"
                autocomplete="off"
                type="text"
                id="lastname"
                name="lastname"
                ng-model="$ctrl.lastname"
                readonly>
        </oui-field>
        <oui-field label="Firstname" size="xl" ng-if="!$ctrl.completed">
            <input class="oui-input"
                autocomplete="off"
                type="text"
                id="firstname"
                name="firstname"
                ng-model="$ctrl.firstname"
                required>
        </oui-field>
        <oui-field label="Lastname" size="xl" ng-if="!$ctrl.completed">
            <input class="oui-input"
                autocomplete="off"
                type="text"
                id="lastname"
                name="lastname"
                ng-model="$ctrl.lastname"
                required>
        </oui-field>
        <oui-form-actions submit-text="Next" ng-if="!$ctrl.completed"></oui-form-actions>
    </oui-step-form>

    <oui-step-form
        header="Step 2"
        on-submit="$ctrl.completed2 = true"
        on-focus="$ctrl.completed2 = false">
        <div ng-if="$ctrl.completed2">
            <span>Test {{ $ctrl.test }}</span>
        </div>
        <oui-field label="Test" size="xl" ng-if="!$ctrl.completed2">
            <input class="oui-input"
                autocomplete="off"
                type="text"
                id="test"
                name="test"
                ng-model="$ctrl.test">
        </oui-field>
        <oui-form-actions submit-text="Next" ng-if="!$ctrl.completed2"></oui-form-actions>
    </oui-step-form>

    <oui-step-form
        header="Step 3"
        on-focus="$ctrl.stepSubmit()"
        on-submit="$ctrl.submitStep2(formStep2)">
        <oui-field label="Test" size="xl">
            <input class="oui-input"
                autocomplete="off"
                type="text"
                id="test"
                name="test"
                ng-model="$ctrl.test2"
                required>
        </oui-field>
        <oui-form-actions submit-text="Finish"></oui-form-actions>
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
| `linear`        | boolean         | <?      |                  |                        | false               | enable stepper to handle steps                |

### oui-step-form

| Attribute         | Type            | Binding | One-time binding | Values                 | Default             | Description                                 |
| ----              | ----            | ----    | ----             | ----                   | ----                | ----                                        |
| `name`            | string          | @?      | yes              |                        |                     | step form name, same as normal form         |
| `id`              | string          | @?      | yes              |                        |                     | step form id, same as normal form           |
| `header`          | string          | @?      | yes              |                        |                     | title to put in step header                 |
| `loading`         | function        | <?      |                  |                        |                     | display loader on step                      |
| `disabled`        | boolean         | <?      |                  |                        | false               | disable the step and shrink it              |
| `on-submit`       | function        | &       |                  |                        |                     | submit step function                        |
| `on-focus`        | function        | &       |                  |                        |                     | action to do when opening step              |
| `skippable`       | boolean         | <?      | yes              |                        |                     | add button to skip facultative step         |
