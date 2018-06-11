# Slideshow

<component-status cx-design="none" ux="prototype"></component-status>

## Usage

### Basic

```html:preview
<div class="oui-doc-preview-only-keep-children" style="padding:50px 35px;background-color:rgba(0,0,0,0.3)">
    <oui-slideshow>
        <oui-slideshow-panel title="New feature"
                                     text="Display your infrastructure as a list"
                                     picture="https://upload.wikimedia.org/wikipedia/commons/4/4a/Cercle_rouge_100%25.svg">
        </oui-slideshow-panel>
        <oui-slideshow-panel title="Introducing Ad-Sync"
                                     text="Designed to help you synchronize your local Active Directory with your OVH Active Directory."
                                     picture="https://upload.wikimedia.org/wikipedia/commons/4/4a/Cercle_rouge_100%25.svg"
                                     href="http://www.ovh.com/"
                                     label="Discover">
        </oui-slideshow-panel>
        <oui-slideshow-panel title="New features available in your emails pages"
                                     text="Introducing Ad-Sync, designed to help you synchronize your local Active Directory with your OVH Active Directory."
                                     href="http://www.ovh.com/"
                                     label="Discover">
        </oui-slideshow-panel>
        <oui-slideshow-panel title="Introducing Ad-Sync"
                                         text="Designed to help you synchronize your local Active Directory with your OVH Active Directory."
                                         picture="https://upload.wikimedia.org/wikipedia/commons/4/4a/Cercle_rouge_100%25.svg"
                                         href="http://www.ovh.com/"
                                         label="Discover">
            </oui-slideshow-panel>
    </oui-slideshow>
</div>
```

### Loading state

```html:preview
<div class="oui-doc-preview-only-keep-children" style="padding:50px 35px;background-color:rgba(0,0,0,0.3)">
    <oui-slideshow loading>
        <oui-slideshow-panel title="Panel 1" text="This is the first panel description"></oui-slideshow-panel>
    </oui-slideshow>
</div>
```

### Loop steps

```html:preview
<div class="oui-doc-preview-only-keep-children" style="padding:50px 35px;background-color:rgba(0,0,0,0.3)">
    <oui-slideshow loop>
        <oui-slideshow-panel title="Panel 1" text="This is the first panel description"></oui-slideshow-panel>
        <oui-slideshow-panel title="Panel 2" text="This is the second panel description"></oui-slideshow-panel>
        <oui-slideshow-panel title="Panel 3" text="This is the third panel description"></oui-slideshow-panel>
    </oui-slideshow>
</div>
```

### Link
```html:preview
<div class="oui-doc-preview-only-keep-children" style="padding:50px 35px;background-color:rgba(0,0,0,0.3)">
<oui-slideshow>
    <oui-slideshow-panel title="External link"
                                 text="Introducing Ad-Sync, designed to help you synchronize your local Active Directory with your OVH Active Directory."
                                 href="#"
                                 label="Discover"
                                 external>
    </oui-slideshow-panel>
</oui-slideshow>
</div>
```

## API

### oui-slideshow

| Attribute           | Type     | Binding | One-time Binding | Values          | Default          | Description                                     |
| ----                | ----     | ----    | ----             | ----            | ----             | ----                                            |
| `on-dismiss`        | function | &       |                  |                 |                  | dismiss callback                                |
| `loading`           | boolean  | <?      |                  |                 | false            | display loader flag                             |
| `loop`              | boolean  | <?      |                  |                 | false            | whether the component should cycle continuously |
| `theme`             | string   | @?      | yes              |                 | `default`        | add specific theme to component                 |

### oui-slideshow-panel

| Attribute           | Type     | Binding | One-time Binding | Values          | Default          | Description                                     |
| ----                | ----     | ----    | ----             | ----            | ----             | ----                                            |
| `title`             | string   | @?      | yes              |                 |                  | the panel's title                               |
| `text`              | string   | @?      | yes              |                 |                  | the panel's description                         |
| `picture`           | string   | @?      | yes              |                 |                  | the panel's picture / illustration              |
| `on-click`          | function | &?      |                  |                 |                  | on-click handler (button)                       |
| `href`              | string   | @?      | yes              |                 |                  | link href (button)                              |
| `external`          | boolean  | <?      | yes              |                 | false            | add external link indicators (target, icon)     |
| `label`             | string   | @?      | yes              |                 |                  | the button / link 's label                      |
