# Button

<component-status cx-design="complete" ux="complete"></component-status>

## Usage

### Default

```html:preview
<oui-button text="Default button" on-click="onClick()"></oui-button>
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
  <oui-button variant-nav="previous" text="Previous" on-click="previous()" disabled></oui-button>
  <oui-button variant="primary" variant-nav="next" text="Next" on-click="next()" disabled></oui-button>
</div>
```

### Accessibility

```html:preview
<oui-button aria-label="Accessibility text" text="Button with accessibility" on-click="onClick()"></oui-button>
```

- `aria-label` add an attribute `aria-label` on the button.

## API

| Attribute     | Type     | Binding | One-time Binding | Values                 | Default   | Description                      |
| ----          | ----     | ----    | ----             | ----                   | ----      | ----                             |
| text          | string   | @       | true             |                        |           | button text                      |
| id            | string   | @?      | true             |                        |           | id attribute of the button       |
| name          | string   | @?      | true             |                        |           | name attribute of the button     |
| type          | string   | @?      | true             | submit,button,reset    | button    | type attribute of the button     |
| variant       | string   | @?      | true             | primary,secondary,link | secondary | modifier for button              |
| variant-nav   | string   | @?      | true             | next,previous          |           | nav modifier for button          |
| aria-label    | string   | @?      | true             |                        |           | accessibility label              |
| disabled      | boolean  | <?      |                  |                        | false     | disabled flag                    |
| on-click      | function | &?      |                  |                        |           | click handler
