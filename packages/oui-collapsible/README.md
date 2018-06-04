# Collapsible

<component-status cx-design="complete" ux="rc"></component-status>

## Usage

### Normal

```html:preview
<oui-collapsible title="Title" aria-label="Action">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper ligula nec fringilla tempor. In rhoncus ullamcorper feugiat. Phasellus vel ipsum vitae neque varius luctus. Proin id iaculis arcu. Fusce justo arcu, egestas vel nulla nec, dictum cursus lacus. Aenean elementum vel odio quis rutrum. In quis tellus in neque vulputate rhoncus vitae ut justo. Ut dignissim varius est in consequat. Donec nisi mauris, pellentesque condimentum congue in, blandit ut arcu. In et elit ipsum.
</oui-collapsible>
```

### Expanded

```html:preview
<oui-collapsible title="Title" aria-label="Action" expanded="true">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper ligula nec fringilla tempor. In rhoncus ullamcorper feugiat. Phasellus vel ipsum vitae neque varius luctus. Proin id iaculis arcu. Fusce justo arcu, egestas vel nulla nec, dictum cursus lacus. Aenean elementum vel odio quis rutrum. In quis tellus in neque vulputate rhoncus vitae ut justo. Ut dignissim varius est in consequat. Donec nisi mauris, pellentesque condimentum congue in, blandit ut arcu. In et elit ipsum.
</oui-collapsible>
```

## API

### oui-collapsible

| Attribute     | Type      | Binding | One-time binding | Values | Default   | Description
| ----          | ----      | ----    | ----             | ----   | ----      | ----
| `title`       | string    | @       |                  |        |           | collapsible title
| `aria-label`  | string    | @?      | yes              |        |           | accessibility label
| `expanded`    | boolean   | <?      | yes              |        | `false`   | initial expanded state
