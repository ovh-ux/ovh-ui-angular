# Stepper

<component-status cx-design="complete" ux="rc"></component-status>

## Usage

### Simple step

```html:preview
<oui-stepper>
    <oui-step-form
        header="Simple step">
        <oui-field label="Lorem ipsum" size="xl">
            <input class="oui-input" name="simpleInput1"
                type="text" required
                ng-model="$ctrl.simpleInput1">
        </oui-field>
        <oui-field label="Dolor sit amet" size="xl">
            <input class="oui-input" name="simpleInput2"
                type="text" required
                ng-model="$ctrl.simpleInput2">
        </oui-field>
    </oui-step-form>
</oui-stepper>
```

### States

```html:preview
<div class="oui-doc-preview-only">
    <p>
        <button class="oui-button" type="text"
            ng-class="{
                'oui-button_primary': $ctrl.stepDisabled,
                'oui-button_secondary': !$ctrl.stepDisabled
            }"
            ng-click="$ctrl.stepDisabled = !$ctrl.stepDisabled">
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
    <oui-step-form
        header="States"
        disabled="$ctrl.stepDisabled"
        loading="!$ctrl.stepLoaded"
        loading-text="Loading text">
        <oui-field label="Lorem ipsum" size="xl">
            <input class="oui-input" name="statesInput"
                type="text" required
                ng-model="$ctrl.statesInput">
        </oui-field>
    </oui-step-form>
</oui-stepper>
```

### Skippable step

**Note**: This step has no input with attributes that trigger an error

```html:preview
<oui-stepper>
    <oui-step-form skippable
        header="Skippable step">
        <oui-field label="Lorem ipsum" size="xl">
            <input class="oui-input" name="skippableInput"
                type="text" autocomplete="off"
                ng-model="$ctrl.skippableInput">
        </oui-field>
        <oui-field label="Dolor sit amet" size="xl">
            <oui-textarea name="skippableTextarea" rows="7"
                model="$ctrl.skippableTextarea">
            </oui-textarea>
        </oui-field>
    </oui-step-form>
</oui-stepper>
```

### Events on `oui-stepper`

**Note**: If you want to access the forms inside `on-finish` callback, you need to use the `forms` variable as below.

```html:preview
<oui-stepper
    on-init="$ctrl.onInit('Dolor sit amet !')"
    on-finish="$ctrl.onFinish(forms)">
    <oui-step-form
        name="eventsStepper"
        header="Events on oui-stepper">
        <oui-field label="Lorem ipsum" size="xl">
            <input class="oui-input" name="initStepper"
                type="text" required
                ng-model="$ctrl.onInitModel">
        </oui-field>
    </oui-step-form>
</oui-stepper>
<div class="oui-doc-preview-only">
    <p>On Finish</p>
    <pre>{{$ctrl.onFinishForms | json}}</pre>
</div>
```

### Events on `oui-step-form`

**Note**: If you want to access the form inside `on-submit` callback, you need to use the `form` variable as below.

```html:preview
<oui-stepper>
    <oui-step-form
        name="eventsStepForm"
        header="Events on oui-step-form"
        on-focus="$ctrl.onFocus('Dolor sit amet !')"
        on-submit="$ctrl.onSubmit(form)">
        <oui-field label="Lorem ipsum" size="xl">
            <input class="oui-input" name="focusStep"
                type="text" required
                ng-model="$ctrl.onfocusModel">
        </oui-field>
    </oui-step-form>
</oui-stepper>
<div class="oui-doc-preview-only">
    <p>On Submit</p>
    <pre>{{$ctrl.onSubmitForm | json}}</pre>
</div>
```

### Custom validation

**Note**: The value of the custom validation attribute doesn't override the angular form validation `form.$valid`. Both are needed to be `true` to enable the submission.

```html:preview
<div class="oui-doc-preview-only">
    <p>
        <button class="oui-button" type="text"
            ng-class="{
                'oui-button_primary': $ctrl.isValid,
                'oui-button_secondary': !$ctrl.isValid
            }"
            ng-click="$ctrl.isValid = !$ctrl.isValid">
            Toggle validation
        </button>
    </p>
</div>
<oui-stepper>
    <oui-step-form
        header="Custom validation"
        valid="$ctrl.isValid"
        on-submit="$ctrl.onCustomSubmit()">
        <oui-field label="Lorem ipsum" size="xl">
            <input class="oui-input" name="customValidationInput"
                type="text" autocomplete="off" required
                ng-model="$ctrl.skippableInput">
        </oui-field>
    </oui-step-form>
</oui-stepper>
<div class="oui-doc-preview-only">
    <p><strong>onSubmit count:</strong> {{$ctrl.customSubmitCount}}</p>
</div>
```

### Linear stepper

```html:preview
<oui-stepper linear>
    <oui-step-form header="Step 1"
        description="This is a description">
        <oui-field label="Email" size="xl">
            <input class="oui-input" type="email" name="email"
                ng-model="$ctrl.user.email" required>
        </oui-field>

        <oui-field label="Username" error-messages="{
                pattern: 'Username must be alphabetic with a length between 3 and 8.'
            }" size="xl">
            <input class="oui-input" type="text" name="username"
                ng-model="$ctrl.user.username" ng-pattern="/^[a-zA-Z]{3,8}$/" required>
        </oui-field>
    </oui-step-form>

    <oui-step-form header="Step 2" skippable
        description="This is a description">
        <oui-field label="Firstname" help-text="At least 3 chars" size="xl">
            <input class="oui-input" type="text" name="firstname"
                ng-model="$ctrl.user.firstname" maxlength="32">
        </oui-field>
        <oui-field label="Lastname" help-text="At least 3 chars" size="xl">
            <input class="oui-input" type="text" name="lastname"
                ng-model="$ctrl.user.lastname" maxlength="32">
        </oui-field>
        <oui-field label="Description" size="xl">
            <oui-textarea model="$ctrl.user.description" name="description" placeholder="Please insert your text..." maxlength="10"></oui-textarea>
        </oui-field>
    </oui-step-form>

    <oui-step-form header="Step 3"
        description="This is a description">
        <oui-field label="OS" size="m">
            <label class="oui-select">
                <select name="os" ng-model="os" class="oui-select__input" required>
                    <option ng-value="undefined">Select the OS</option>
                    <option value="freebsd">FreeBSD</option>
                    <option value="linux">Linux</option>
                    <option value="osx">OSX</option>
                    <option value="windows">Windows</option>
                </select>
                <i class="oui-icon oui-icon-chevron-down" aria-hidden="true"></i>
            </label>
        </oui-field>
        <oui-field label="Server options">
            <oui-checkbox name="ssl" text="SSL" model="$ctrl.ssl" required></oui-checkbox>
            <oui-checkbox name="hsts" text="HSTS" model="$ctrl.hsts"></oui-checkbox>
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
| `linear`        | boolean         | <?      | yes              |                        | false               | enable stepper to handle steps                |
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
| `valid`           | boolean         | <?      |                  |                        | true                | custom validation for the form              |
| `on-focus`        | function        | &       |                  |                        |                     | focused step function                       |
| `on-submit`       | function        | &       |                  |                        |                     | submit step function                        |
