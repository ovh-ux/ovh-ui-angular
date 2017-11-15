# Button

<component-status cx-design="complete" ux="prototype"></component-status>

## Usage

```html
<oui-button
  primary|secondary|link
  previous-step|next-step
  text="..."
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
  <oui-button primary text="Primary"></oui-button>
  <oui-button secondary text="Secondary"></oui-button>
  <oui-button link text="Link"></oui-button>
</div>

<div>
  <oui-button primary text="Primary" disabled="true"></oui-button>
  <oui-button secondary text="Secondary" disabled="true"></oui-button>
  <oui-button link text="Link" disabled="true"></oui-button>
</div>
```

### Steps buttons

```html:preview
<div>
  <oui-button previous-step text="Previous" on-click="previous()"></oui-button>
  <oui-button primary next-step text="Next" on-click="next()"></oui-button>
</div>

<div>
  <oui-button previous-step text="Previous" disabled="true" on-click="previous()"></oui-button>
  <oui-button primary next-step text="Next" disabled="true" on-click="next()"></oui-button>
</div>
```

### Accessibility

`text` is used as an `aria-label`.

## API

| Attribute     | Type     | Binding | Values              | Default | Description                      |
| ----          | ----     | ----    | ----                | ----    | ----                             |
| on-click      | function | &?      |                     |         | click handler                    |
| text          | string   | @       |                     |         | button text                      |
| id            | string   | @?      |                     |         | id attribute of the button       |
| name          | string   | @?      |                     |         | name attribute of the button     |
| type          | string   | @?      | submit,button,reset | button  | click handler                    |
| disabled      | boolean  | <?      |                     | false   | disabled flag                    |
| primary       |          |         |                     |         | modifier for primary button      |
| secondary     |          |         |                     |         | modifier for secondary button    |
| link          |          |         |                     |         | modifier for link button         |
| previous-step |          |         |                     |         | chrevron-left icon (left side)   |
| next-step     |          |         |                     |         | chrevron-right icon (right side) |
