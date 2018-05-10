# Guide Button

<component-status cx-design="complete" ux="complete"></component-status>

## Usage


```html:preview
<oui-guide title="Guides">
  <oui-guide-body>
    <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
    <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
    <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
  <oui-guide-body>  
</oui-guide>
```
## With sections


```html:preview
<oui-guide title="Guides">
  <oui-guide-body>  
    <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
    <oui-guide-section header="Section1">
      <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
      <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
    </oui-guide-section>
    <oui-guide-section header="Section2">
      <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
      <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
    </oui-guide-section> 
  <oui-guide-body>  
</oui-guide>
```
## With simple footer


```html:preview
<oui-guide title="Guides">
  <oui-guide-body>  
    <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
    <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
  <oui-guide-body>
  <oui-guide-footer text="footer"></oui-guide-footer>
</oui-guide>
```
## With footer as button


```html:preview
<oui-guide title="Guides">
  <oui-guide-body>
    <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
    <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
  </oui-guide-body>
  <oui-guide-footer text="footer"></oui-guide-footer>
  <oui-guide-footer text="footer" button="true"></oui-guide-footer>
</oui-guide>
```
## Complete example


```html:preview
<oui-guide title="Guides">
  <oui-guide-body>
    <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
    <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
    <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
    <oui-guide-section header="header">
      <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
      <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
    </oui-guide-section>
    <oui-guide-section header="header">
      <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
      <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
    </oui-guide-section>
    <oui-guide-section header="header">
      <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
      <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
    </oui-guide-section>
    <oui-guide-section header="header">
      <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
      <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
    </oui-guide-section>
    <oui-guide-section header="header">
      <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
      <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
    </oui-guide-section>
    <oui-guide-section header="header">
      <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
      <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
    </oui-guide-section>
    <oui-action-menu-divider></oui-action-menu-divider>
    <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
  </oui-guide-body>
  <oui-guide-footer text="footer"></oui-guide-footer>
  <oui-guide-footer text="footer" button="true" ariaLabel="guide button" on-click="$ctrl.action = true"></oui-guide-footer>
</oui-guide>
  <div>Action 1: {{$ctrl.action}}</div>
```


## API

### oui-guide-section

| Attribute         | Type            | Binding | One-time binding | Values                    | Default             | Description                        |
| ----              | ----            | ----    | ----             | ----                      | ----                | ----                               |
| `header`          | string          | @       | yes              |                           |                     | section title                      |

### oui-guide-footer

| Attribute         | Type            | Binding | One-time binding | Values                    | Default             | Description                        |
| ----              | ----            | ----    | ----             | ----                      | ----                | ----                               |
| `text`            | string          | @       | yes              |                           |                     | footer text                        |
| `button`          | boolean         | @?      | yes              |                           |                     | button inside footer               |
| `ariaLabel`       | string          | @?      | yes              |                           |                     | aria label for button              |
| `on-click`        |                 | &?      |                  |                           |                     | on-click handler (button)          |

### oui-guide-body