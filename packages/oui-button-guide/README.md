# Guide Button

<component-status cx-design="complete" ux="complete"></component-status>

## Usage


```html:preview
<oui-guide title="Guides">
  <oui-guide-body>
    <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
    <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
    <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
  </oui-guide-body>  
</oui-guide>
```

## Without title


```html:preview
<oui-guide>
  <oui-guide-body>
    <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
    <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
    <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
  </oui-guide-body>  
</oui-guide>
```

## With sections and long texts


```html:preview
<oui-guide title="Guides">
  <oui-guide-body>  
    <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
    <oui-guide-section title="Section1">
      <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
      <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
    </oui-guide-section>
    <oui-guide-section title="Section2 verrrrrrrrrrrrrrrrrrrrrrrrrrrry very long title for section title">
      <oui-action-menu-item text="External link verrrrrrrrrrrrrrrrrrrrrrrrrrrry long title for the link item" href="#" external></oui-action-menu-item>
      <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
    </oui-guide-section>
  </oui-guide-body>
</oui-guide>
```
## With simple footer


```html:preview
<oui-guide title="Guides">
  <oui-guide-body>  
    <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
    <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
  </oui-guide-body>
  <oui-guide-footer>
      <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>  
  </oui-guide-footer>
</oui-guide>
```
## With footer as button


```html:preview
<oui-guide title="Guides">
  <oui-guide-body>
    <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
    <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
  </oui-guide-body>
  <oui-guide-footer>
    <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
    <oui-action-menu-divider></oui-action-menu-divider>
    <oui-button text="Guide button"></oui-button>
  </oui-guide-footer>
</oui-guide>
```
## Complete example


```html:preview
<oui-guide title="Guides">
  <oui-guide-body>
    <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
    <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
    <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
    <oui-guide-section title="section 1">
      <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
      <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
    </oui-guide-section>
    <oui-guide-section title="section 2">
      <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
      <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
    </oui-guide-section>
    <oui-guide-section title="section 3">
      <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
      <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
    </oui-guide-section>
    <oui-guide-section title="section 4">
      <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
      <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
    </oui-guide-section>
    <oui-guide-section title="section 5">
      <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
      <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
    </oui-guide-section>
    <oui-guide-section title="section 6">
      <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
      <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
    </oui-guide-section>
    <oui-action-menu-divider></oui-action-menu-divider>
    <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
  </oui-guide-body>
  <oui-guide-footer>
    <oui-action-menu-item text="External link" href="#" external></oui-action-menu-item>
    <oui-action-menu-divider></oui-action-menu-divider>
    <oui-button text="Guide button"></oui-button>
  </oui-guide-footer>
</oui-guide>
```


## API
### oui-guide
| Attribute         | Type            | Binding | One-time binding | Values                    | Default             | Description                        |
| ----              | ----            | ----    | ----             | ----                      | ----                | ----                               |
| `title`           | string          | @       | yes              |                           |                     | name of the button                 |

### oui-guide-section

| Attribute         | Type            | Binding | One-time binding | Values                    | Default             | Description                        |
| ----              | ----            | ----    | ----             | ----                      | ----                | ----                               |
| `title`           | string          | @       | yes              |                           |                     | section title                      |