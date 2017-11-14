# Button

<component-status cx-design="complete" ux="prototype"></component-status>

## Usage

```html
<oui-button
  on-click="..."
  on-focus="..."
  on-blur="..."
  on-xxx ?
  name="..."
  disabled
  text="..."
  icon="..."
  previous
  next
  type="[submit|button|reset]"  // 💡 primary auto if button type is "submit" and form is detected?
  primary   ───┐
  secondary ───┤ OR
  link      ───┘
></oui-button>
```

## Examples

### Primary button

```html
<oui-button primary
  text="Confirm order"
  on-click="confirmOrder()"></oui-button>
```

### Link button

```html
<oui-button link
  text="Cancel"
  on-click="cancel()"></oui-button>
```

### Icon button with text

```html
<oui-button secondary
  next
  text="Next"
  on-click="next()"></oui-button>
```

### Icon button

```html
<oui-button
  icon="paperplane"
  text="Send"
  on-click="send()"></oui-button>
```

Text is used as an aria-label.

## API

| Attribute         | Type            | Binding | Values              | Default             | Description                        |
| ----              | ----            | ----    | ----                | ----                | ----                               |
| on-click          | function        | &?      |                     |                     | click handler                      |
| on-focus          | function        | &?      |                     |                     | focus handler                      |
| on-blur           | function        | &?      |                     |                     | blur handler                       |
| name              | string          | @?      |                     | null                | name attribute of the button       |
| disabled          | boolean         | <?      |                     | false               | disabled flag                      |
| text              | string          | @       |                     |                     | button text                        |
| icon              | string          | @?      | see icon ids        | null                | button icon for icon buttons       |
| previous          | string          | @?      | see icon ids        | null                | chrevron-left icon (left side)     |
| next              | string          | @?      | see icon ids        | null                | chrevron-right icon (right side)   |
| type              | string          | @?      | submit,button,reset | button              | click handler                      |
| primary           |                 |         |                     |                     | modifier for primary button        |
| secondary         |                 |         |                     |                     | modifier for secondary button      |
| link              |                 |         |                     |                     | modifier for link button           |
