# Header tabs

<component-status cx-design="complete" ux="rc"></component-status>

## Usage

### Normal

```html:preview
<oui-header-tabs>
  <oui-header-tabs-item text="Home" href="/#"></oui-header-tabs-item>
  <oui-header-tabs-item text="Page Header" href="/#!/oui-angular/page-header"></oui-header-tabs-item>
  <oui-header-tabs-item text="Header Tabs" href="/#!/oui-angular/header-tabs" active></oui-header-tabs-item>
  <oui-header-tabs-item text="Pagination" href="/#!/oui-angular/pagination"></oui-header-tabs-item>
  <oui-header-tabs-item text="Datagrid" href="/#!/oui-angular/datagrid"></oui-header-tabs-item>
</oui-header-tabs>
```

### With dropdown
```html:preview
<oui-header-tabs>
  <oui-header-tabs-item text="Home" href="/#"></oui-header-tabs-item>
  <oui-header-tabs-dropdown text="Form">
    <oui-header-tabs-item text="Field" href="/#!/oui-angular/field"></oui-header-tabs-item>
    <oui-header-tabs-divider></oui-header-tabs-divider>
    <oui-header-tabs-item text="Checkbox" href="#!/oui-angular/checkbox"></oui-header-tabs-item>
    <oui-header-tabs-item text="Radio" href="#!/oui-angular/radio-group"></oui-header-tabs-item>
    <oui-header-tabs-divider></oui-header-tabs-divider>
    <oui-header-tabs-item text="Select" href="/#!/oui-angular/select"></oui-header-tabs-item>
    <oui-header-tabs-item text="Select Picker" href="/#!/oui-angular/select-picker"></oui-header-tabs-item>
  </oui-header-tabs-dropdown>
  <oui-header-tabs-dropdown text="Datagrid">
    <oui-header-tabs-item text="Datagrid" href="/#!/oui-angular/datagrid"></oui-header-tabs-item>
    <oui-header-tabs-item text="Criteria Adder" href="#!/oui-angular/criteria-adder"></oui-header-tabs-item>
  </oui-header-tabs-dropdown>
  <oui-header-tabs-item text="Page Header" href="/#!/oui-angular/page-header"></oui-header-tabs-item>
  <oui-header-tabs-item text="Header Tabs" href="/#!/oui-angular/header-tabs" active></oui-header-tabs-item>
</oui-header-tabs>  
```

### In Page Header

```html:preview
<oui-page-header heading="Title" description="Description">
  <oui-header-tabs>
    <oui-header-tabs-item text="Home" href="/#"></oui-header-tabs-item>
    <oui-header-tabs-item text="Page Header" href="/#!/oui-angular/page-header"></oui-header-tabs-item>
    <oui-header-tabs-item text="Header Tabs" href="/#!/oui-angular/header-tabs" active></oui-header-tabs-item>
    <oui-header-tabs-dropdown text="Form">
      <oui-header-tabs-item text="Field" href="/#!/oui-angular/field"></oui-header-tabs-item>
      <oui-header-tabs-divider></oui-header-tabs-divider>
      <oui-header-tabs-item text="Checkbox" href="#!/oui-angular/checkbox"></oui-header-tabs-item>
      <oui-header-tabs-item text="Radio" href="#!/oui-angular/radio-group"></oui-header-tabs-item>
      <oui-header-tabs-divider></oui-header-tabs-divider>
      <oui-header-tabs-item text="Select" href="/#!/oui-angular/select"></oui-header-tabs-item>
      <oui-header-tabs-item text="Select Picker" href="/#!/oui-angular/select-picker"></oui-header-tabs-item>
    </oui-header-tabs-dropdown>
    <oui-header-tabs-item text="Pagination" href="/#!/oui-angular/pagination"></oui-header-tabs-item>
    <oui-header-tabs-item text="Datagrid" href="/#!/oui-angular/datagrid"></oui-header-tabs-item>
  </oui-header-tabs>
</oui-page-header>
```

## API

### oui-header-tabs-item

| Attribute         | Type      | Binding   | One-time Binding  | Values            | Default   | Description
| ----              | ----      | ----      | ----              | ----              | ----      | ----
| `text`            | string    | @         | yes               |                   |           | display the menu item with this text
| `href`            | string    | @?        | yes               |                   |           | href of the menu item
| `state`           | boolean   | @?        | yes               |                   |           | state of the menu item
| `stateParams`     | object    | <?        |                   |                   |           | state params of the menu item
| `external`        | boolean   | <?        | yes               | `true`, `false`   | `false`   | external link flag
| `active`          | boolean   | <?        |                   | `true`, `false`   | `false`   | manual active flag

**Note:** `ui-router` is needed for the attributes `state` and `state-params`.

### oui-header-tabs-dropdown

| Attribute         | Type      | Binding   | One-time Binding  | Values            | Default   | Description
| ----              | ----      | ----      | ----              | ----              | ----      | ----
| `text`            | string    | @         | yes               |                   |           | display the dropdown with this text

### oui-header-tabs-divider

Add a separator for the dropdown menu
