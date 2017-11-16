# Button

<component-status cx-design="complete" ux="prototype"></component-status>

## Usage

```html
<oui-button
  text="..."
  variant="[primary|secondary|link]"
  variant-nav="[previous|next]"
  type="[submit|button|reset]"
  id="..."
  name="..."
  disabled="..."
  on-click="..."
></oui-button>
```

## Examples

### Default

```html:preview
<oui-button text="Default button" on-click="click()"></oui-button>
```

### Action buttons

```html:preview
<div>
  <oui-button variant="primary" text="Primary"></oui-button>
  <oui-button variant="secondary" text="Secondary"></oui-button>
  <oui-button variant="link" text="Link"></oui-button>
</div>

<div>
  <oui-button variant="primary" text="Primary" disabled></oui-button>
  <oui-button variant="secondary" text="Secondary" disabled></oui-button>
  <oui-button variant="link" text="Link" disabled></oui-button>
</div>
```

### Steps buttons

```html:preview
<div>
  <oui-button variant-nav="previous" text="Previous" on-click="previous()"></oui-button>
  <oui-button variant="primary" variant-nav="next" text="Next" on-click="next()"></oui-button>
</div>

<div>
  <oui-button variant-nav="previous-step" text="Previous" on-click="previous()" disabled></oui-button>
  <oui-button variant="primary" variant-nav="next" text="Next" on-click="next()" disabled></oui-button>
</div>
```

### Accessibility

`text` is used as an `aria-label`.

## API

| Attribute     | Type     | Binding | Values                 | Default   | Description                      |
| ----          | ----     | ----    | ----                   | ----      | ----                             |
| on-click      | function | &?      |                        |           | click handler                    |
| text          | string   | @       |                        |           | button text                      |
| id            | string   | @?      |                        |           | id attribute of the button       |
| name          | string   | @?      |                        |           | name attribute of the button     |
| type          | string   | @?      | submit,button,reset    | button    | type attribute of the button     |
| variant       | string   | @?      | primary,secondary,link | secondary | modifier for button              |
| variant-nav   | string   | @?      | next,previous          |           | nav modifier for button          |
| disabled      | boolean  | <?      |                        | false     | disabled flag                    |
