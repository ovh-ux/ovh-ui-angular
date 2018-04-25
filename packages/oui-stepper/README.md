# Stepper

<component-status cx-design="complete" ux="rc"></component-status>

## Usage

### Linear stepper

**Note**: The value of the custom validation attribute doesn't override the angular form validation `form.$valid`. Both are needed to be `true` to enable the submission.

```html:preview
<oui-stepper>
    <oui-step-form header="Simple step"
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

    <oui-step-form header="Skippable step" skippable
        description="This is another description">
        <oui-field label="Firstname" size="xl">
            <input class="oui-input" type="text" name="firstname"
                ng-model="$ctrl.user.firstname" maxlength="32">
        </oui-field>
        <oui-field label="Lastname" size="xl">
            <input class="oui-input" type="text" name="lastname"
                ng-model="$ctrl.user.lastname" maxlength="32">
        </oui-field>
        <oui-field label="Description" size="xl">
            <oui-textarea model="$ctrl.user.description" name="description" placeholder="Please insert your text..." maxlength="10"></oui-textarea>
        </oui-field>
    </oui-step-form>

    <oui-step-form header="Custom validation and navigation"
        navigation="$ctrl.isValid"
        valid="$ctrl.isValid">
        <button class="oui-button" type="button"
            ng-class="{
                'oui-button_primary': $ctrl.isValid,
                'oui-button_secondary': !$ctrl.isValid
            }"
            ng-click="$ctrl.isValid = !$ctrl.isValid">
            Toggle navigation &amp; validation
        </button>
        <oui-field label="Lorem ipsum" size="xl">
            <input class="oui-input" name="customValidationInput"
                type="text" autocomplete="off" required
                ng-model="$ctrl.skippableInput">
        </oui-field>
    </oui-step-form>
</oui-stepper>
```

### States

```html:preview
<div class="oui-doc-preview-only">
    <p>
        <button class="oui-button" type="button"
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
| `header`          | string          | @?      | yes              |                        |                     | title of the step                           |
| `description`     | string          | @?      | yes              |                        |                     | description of the step                     |
| `cancel-href`     | string          | @?      | yes              |                        |                     | link url on cancel                          |
| `cancel-text`     | string          | @?      | yes              |                        |                     | text for the cancel button                  |
| `submit-text`     | string          | @?      | yes              |                        |                     | text for the submit button                  |
| `loading-text`    | string          | @?      |                  |                        |                     | text for the loading state                  |
| `loading`         | boolean         | <?      |                  |                        | false               | display the loading state                   |
| `disabled`        | boolean         | <?      |                  |                        | false               | disable the step and shrink it              |
| `navigation`      | boolean         | <?      |                  |                        | true                | show the navigation buttons                 |
| `skippable`       | boolean         | <?      |                  |                        | false               | add button to skip facultative step         |
| `valid`           | boolean         | <?      |                  |                        | true                | custom validation for the form              |
| `on-cancel`       | function        | &?      |                  |                        |                     | cancel step function                        |
| `on-focus`        | function        | &       |                  |                        |                     | focused step function                       |
| `on-submit`       | function        | &       |                  |                        |                     | submit step function                        |

## Configuration

The stepper translations can be globally configured with a provider.

```js
angular.module("myModule", [
    "oui.stepper"
]).config(ouiStepperConfigurationProvider => {
    ouiStepperConfigurationProvider.setTranslations({
        optionalLabel: "(optional)",
        modifyThisStep: "Modify this step",
        skipThisStep: "Skip this step",
        nextButtonLabel: "Next",
        submitButtonLabel: "Submit"
    });
});
```
