# Navbar

<component-status cx-design="complete" ux="complete"></component-status>

## Usage

```html:preview
<div class="oui-doc-preview-only-keep-children" style="margin-bottom: 15px;">
<oui-navbar
    brand="$ctrl.brand"
    active-link="lorem"
    main-links="$ctrl.mainLinks"
    aside-links="$ctrl.asideLinks"
    toggler-links="$ctrl.togglerLinks">
</oui-navbar>
</div>
```

Note: All children menus have `.oui-navbar-menu_fixed`. The component is intended to be used in `fixed` mode. To avoid being hidden by the documentation navbar, this example is not `fixed`.

## API

| Attribute     | Type      | Binding   | One-time Binding    | Values               | Default   | Description                                                                   |
| ----          | ----      | ----      | ----                | ----                 | ----      | ----                                                                          |
| brand         | object    | <?        | true                | _see example below_  |           | object for the brand logo of the navbar                                       |
| active-link   | string    | @?        | true                |                      |           | current active-link of the navbar                                             |
| main-links    | array     | <?        | true                | _see example below_  |           | array of objects for the items on the left and the toggler (for responsive)   |
| aside-links   | array     | <?        | true                | _see example below_  |           | array of objects for the items on the right                                   |
| toggler-links | array     | <?        | true                | _see example below_  |           | array of objects for the responsive menu                                      |
| fixed         | boolean   | <?        | true                |                      | false     | set the navbar in fixed mode                                                  |

### Properties of attribute `brand`

- `label` _(optional)_: define `aria-label` of the brand link.
- `title`: _(optional)_: define the brand text.
- `url`: define `href` of the brand link.

#### Set a brand icon with a CSS class (for `oui-icon`)

- `iconClass`: define `class` of the brand icon.

The brand icon will be set as a `<span>`.

###### Example

```json
{
    "label": String,
    "title": String,
    "url": String<Url>,
    "iconClass": String
}
```

#### Set a brand icon with an image

- `iconAlt` _(optional)_: define `alt` of the brand icon.
- `iconClass` _(optional)_: define `class` of the brand icon.
- `iconSrc`: define `src` of the brand icon.

The brand icon will be set as a `<img>`.

###### Example

```json
{
    "label": String,
    "title": String,
    "url": String<Url>,
    "iconAlt": String,
    "iconClass": String,
    "iconSrc": String<Url>
}
```

### Common properties of attributes `*-links`

- `name`: define the navigation name of a menu.
- `class` _(optional)_: define `class` of the menu item (only used for root links).
- `label` _(optional)_: define `aria-label` of the menu item.
- `title`: define the menu item text.
- `headerTitle` _(optional)_: define the title of the menu header (default text is `title`).
- `headerBreadcrumb` _(optional)_: define the breadcrumb of the menu header.
- `headerTemplate` _(optional)_: define the HTML template of the menu header.
- `isActive` _(optional)_: define if the menu item has active variant `.oui-navbar-menu__item_active`.
- `acknowledged` _(optional)_: define if the menu item is acknowledged.

If `headerTemplate` is defined, `headerBreadcrumb` and `headerTitle` are not used.

#### Set a menu item as a link

- `url`: define `href` of the menu item.

The menu item will be set as a `<a>`.

##### Example

```json
{
    "name": String,
    "class": String,
    "label": String,
    "title": String,
    "url": String<Url>
}
```

#### Set a menu item as a link for ui-router

- `state`: define `ui-sref` of the menu item. The menu item will be set as a `<a>`, `click` and `url` will be ignored.
- `stateParams` _(optional)_: define parameters for `state`.

The menu item will be set as a `<a>`.

##### Example

```json
{
    "name": String,
    "class": String,
    "label": String,
    "title": String,
    "state": String,
    "stateParams": Object
}
```

#### Set a menu item as a button with a click function

- `click`: define `ng-click` of the menu item.

The menu item will be set as a `<button>`.

##### Example

```json
{
    "name": String,
    "class": String,
    "label": String,
    "title": String,
    "click": Function
}
```

#### Set a menu item as a button to open a menu

- `subLinks`: define the array of links for the children menu.

The menu item will be set as a `<button>`.

##### Example

```json
{
    "name": String,
    "class": String,
    "label": String,
    "title": String,
    "headerTitle": String,
    "headerBreadcrumb": String,
    "subLinks": Array[]
}
```

Note: Root links can have `url` and `subLinks`. `subLinks` will only be used for the responsive menu.

### Properties of attribute `main-links`

This property is only available for root links of `main-links`.

- `isPrimary`: define if the menu item has primary variant `.oui-navbar-link_primary`, else has secondary variant `.oui-navbar-link_secondary`.

##### Example

```json
[{
    "name": String,
    "label": String,
    "title": String,
    "url": String<Url>,
    "isPrimary": Boolean,
    "subLinks": Array[{
        "label": String,
        "title": String,
        "url": String<Url>
    }]
}]
```

### Properties of attribute `aside-links`

This property is only available for root links of `aside-links`.

- `iconClass`: define `class` of the menu item icon.

##### Example

```json
[{
    "name": String,
    "class": String,
    "label": String,
    "title": String,
    "iconClass": String,
    "subLinks": Array[{
        "label": String,
        "title": String,
        "url": String<Url>
    }]
}]
```

#### Variant `notifications` menu

The property `name` **must be** `"notifications"`.

- `template`: define the HTML template in the menu item.
- `limitTo` _(optional)_: define the maximum of menu links displayed.
- `footerTitle`: define the text of the link in the menu footer.
- `footerUrl`: define `href` of the link in the menu footer.
- `footerTemplate` _(optional)_: define the HTML template of the menu footer.

If `footerTemplate` is defined, `footerTitle` and `footerUrl` are not used.

##### Example

```json
{
    "name": "notifications",
    "class": String,
    "label": String,
    "title": String,
    "iconClass": String,
    "limitTo": Number,
    "headerTemplate": String<Html>,
    "footerTitle": String,
    "footerUrl": String<Url>,
    "onClick": Function,
    "subLinks": Array[{
        "subject": String,
        "description": String,
        "url": String<Url>,
        "time": String<Html>,
        "actionClicked": Function,
        "linkClicked": Function,
        "isActive": Boolean,
        "acknowledged": Boolean
    }]
}
```

#### Variant `user` menu

The property `name` **must be** `"user"`.

- `nichandle`: Define the nichandle in the menu header.
- `fullName`: Define the fullname in the menu header.

##### Example

```json
{
    "name": "user",
    "class": String,
    "label": String,
    "title": String,
    "iconClass": String,
    "nichandle": String,
    "fullName": String,
    "subLinks": Array[{
        "label": String,
        "title": String,
        "url": String<Url>
    }]
}
```
