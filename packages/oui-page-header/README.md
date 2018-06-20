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
<oui-page-header heading="My title" description="My subtitle">à
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
<oui-page-header heading="My title" description="My subtitle"></oui-page-header>
```


## API

| Attribute     | Type     | Binding | One-time Binding | Values                 | Default   | Description                      |
| ----          | ----     | ----    | ----             | ----                   | ----      | ----                             |
| heading       | string   | @?      | true             |                        |           | title of the header              |
| description   | string   | @?      | true             |                        |           | subtitle of the header           |
