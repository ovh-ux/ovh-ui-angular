# Page Header

<component-status cx-design="complete" ux="rc"></component-status>

## Usage

### Default

```html:preview
<oui-page-header heading="My title"></oui-page-header>
```

```html:preview
<oui-page-header heading="My title" description="My subtitle"></oui-page-header>
```


### With guide

```html:preview
<oui-page-header heading="My title" description="My subtitle">
    <oui-guide-menu text="Guides">
        <oui-guide-menu-group label="Section 1">
            <oui-guide-menu-item text="Guide 1 (link)" href="#"></oui-guide-menu-item>
            <oui-guide-menu-item text="Guide 2 (button)" on-click="$ctrl.onActionClick()"></oui-guide-menu-item>
        </oui-guide-menu-group>
        <oui-guide-menu-group label="Section 2">
            <oui-guide-menu-item text="Guide 1 (link)" href="#"></oui-guide-menu-item>
            <oui-guide-menu-item text="Guide 2 (button)" on-click="$ctrl.onActionClick()"></oui-guide-menu-item>
        </oui-guide-menu-group>
        <oui-guide-menu-divider></oui-guide-menu-divider>
        <oui-guide-menu-item text="External link" href="#" external></oui-guide-menu-item>
    </oui-guide-menu>
</oui-page-header>
```


### With tabs

```html:preview
<oui-page-header heading="My title" description="My subtitle">
    <oui-header-tabs>
        <oui-header-tabs-item text="Home" href="/#"></oui-header-tabs-item>
        <oui-header-tabs-item text="Page Header" href="/#!/oui-angular/page-header" active></oui-header-tabs-item>
        <oui-header-tabs-item text="Header Tabs" href="/#!/oui-angular/header-tabs"></oui-header-tabs-item>
        <oui-header-tabs-dropdown text="Form">
            <oui-header-tabs-item text="Field" href="/#!/oui-angular/field"></oui-header-tabs-item>
            <oui-header-tabs-divider></oui-header-tabs-divider>
            <oui-header-tabs-item text="Checkbox" href="#!/oui-angular/checkbox"></oui-header-tabs-item>
            <oui-header-tabs-item text="Radio" href="#!/oui-angular/radio-group"></oui-header-tabs-item>
        </oui-header-tabs-dropdown>
        <oui-header-tabs-item text="Pagination" href="/#!/oui-angular/pagination"></oui-header-tabs-item>
        <oui-header-tabs-item text="Datagrid" href="/#!/oui-angular/datagrid"></oui-header-tabs-item>
    </oui-header-tabs>
</oui-page-header>
```


## API

| Attribute     | Type     | Binding    | One-time Binding  | Values    | Default   | Description
| ----          | ----     | ----       | ----              | ----      | ----      | ----
| `heading`     | string   | @?         | yes               | n/a       | n/a       | title of the header
| `description` | string   | @?         | yes               | n/a       | n/a       | subtitle of the header
