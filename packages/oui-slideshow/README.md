# Slideshow

<component-status cx-design="none" ux="prototype"></component-status>

## Usage

### Basic

```html:preview
<div class="oui-doc-preview-only-keep-children" style="padding:50px 35px;background-color:rgba(0,0,0,0.3)">
    <oui-slideshow>
        <oui-slideshow-panel heading="New feature"
                                     text="Display your infrastructure as a list"
                                     picture="https://upload.wikimedia.org/wikipedia/commons/4/4a/Cercle_rouge_100%25.svg">
        </oui-slideshow-panel>
        <oui-slideshow-panel heading="Introducing Ad-Sync"
                                     text="Designed to help you synchronize your local Active Directory with your OVH Active Directory."
                                     picture="https://upload.wikimedia.org/wikipedia/commons/4/4a/Cercle_rouge_100%25.svg"
                                     href="http://www.ovh.com/"
                                     label="Discover">
        </oui-slideshow-panel>
        <oui-slideshow-panel heading="New features available in your emails pages"
                                     text="Introducing Ad-Sync, designed to help you synchronize your local Active Directory with your OVH Active Directory."
                                     href="http://www.ovh.com/"
                                     label="Discover">
        </oui-slideshow-panel>
        <oui-slideshow-panel heading="Introducing Ad-Sync"
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
        <oui-slideshow-panel heading="Panel 1" text="This is the first panel description"></oui-slideshow-panel>
    </oui-slideshow>
</div>
```

### Loop steps

```html:preview
<div class="oui-doc-preview-only-keep-children" style="padding:50px 35px;background-color:rgba(0,0,0,0.3)">
    <oui-slideshow loop>
        <oui-slideshow-panel heading="Panel 1" text="This is the first panel description"></oui-slideshow-panel>
        <oui-slideshow-panel heading="Panel 2" text="This is the second panel description"></oui-slideshow-panel>
        <oui-slideshow-panel heading="Panel 3" text="This is the third panel description"></oui-slideshow-panel>
    </oui-slideshow>
</div>
```

### Link
```html:preview
<div class="oui-doc-preview-only-keep-children" style="padding:50px 35px;background-color:rgba(0,0,0,0.3)">
<oui-slideshow>
    <oui-slideshow-panel heading="External link"
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
| `heading`           | string   | @?      | yes              |                 |                  | the panel's heading                             |
| `text`              | string   | @?      | yes              |                 |                  | the panel's description                         |
| `picture`           | string   | @?      | yes              |                 |                  | the panel's picture / illustration              |
| `on-click`          | function | &?      |                  |                 |                  | on-click handler (button)                       |
| `href`              | string   | @?      | yes              |                 |                  | link href (button)                              |
| `external`          | boolean  | <?      | yes              |                 | false            | add external link indicators (target, icon)     |
| `label`             | string   | @?      | yes              |                 |                  | the button / link 's label                      |
