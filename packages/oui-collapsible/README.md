# Collapsible

<component-status cx-design="complete" ux="rc"></component-status>

## Usage

### Normal

```html:preview
<oui-collapsible heading="Title" aria-label="Action">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper ligula nec fringilla tempor. In rhoncus ullamcorper feugiat. Phasellus vel ipsum vitae neque varius luctus. Proin id iaculis arcu. Fusce justo arcu, egestas vel nulla nec, dictum cursus lacus. Aenean elementum vel odio quis rutrum. In quis tellus in neque vulputate rhoncus vitae ut justo. Ut dignissim varius est in consequat. Donec nisi mauris, pellentesque condimentum congue in, blandit ut arcu. In et elit ipsum.
</oui-collapsible>
```

### Expanded

```html:preview
<oui-collapsible heading="Title" aria-label="Action" expanded="true">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper ligula nec fringilla tempor. In rhoncus ullamcorper feugiat. Phasellus vel ipsum vitae neque varius luctus. Proin id iaculis arcu. Fusce justo arcu, egestas vel nulla nec, dictum cursus lacus. Aenean elementum vel odio quis rutrum. In quis tellus in neque vulputate rhoncus vitae ut justo. Ut dignissim varius est in consequat. Donec nisi mauris, pellentesque condimentum congue in, blandit ut arcu. In et elit ipsum.
</oui-collapsible>
```

### Loading

```html:preview
<oui-collapsible
    heading="Click to load content"
    loading="$ctrl.loading"
    aria-label="Action"
    expanded="$ctrl.expanded"
    on-toggle="$ctrl.onToggle(expanded, this)">
    <span ng-bind="$ctrl.content"></span>
</oui-collapsible>
```

### Event handler

```html:preview
<oui-collapsible heading="Title" aria-label="Action" expanded="true" on-toggle="$ctrl.onToggle(expanded)">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper ligula nec fringilla tempor. In rhoncus ullamcorper feugiat. Phasellus vel ipsum vitae neque varius luctus. Proin id iaculis arcu. Fusce justo arcu, egestas vel nulla nec, dictum cursus lacus. Aenean elementum vel odio quis rutrum. In quis tellus in neque vulputate rhoncus vitae ut justo. Ut dignissim varius est in consequat. Donec nisi mauris, pellentesque condimentum congue in, blandit ut arcu. In et elit ipsum.
</oui-collapsible>
```

## API

### oui-collapsible

| Attribute     | Type      | Binding | One-time binding    | Values            | Default   | Description
| ----          | ----      | ----    | ----                | ----              | ----      | ----
| `heading`     | string    | @       | no                  | n/a               | n/a       | text of the heading
| `aria-label`  | string    | @?      | yes                 | n/a               | n/a       | accessibility label
| `expanded`    | boolean   | <?      | yes                 | n/a               | `false`   | initial expanded state
| `loading`     | boolean   | <?      | no                  | `true`, `false`   | `false`   | loading state, disable toggle when `true`
| `on-toggle`   | function  | &       | no                  | n/a               | n/a       | on collapsible state changed event handler
