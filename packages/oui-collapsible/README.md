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

### Group (Accordion)

If you want to have an accordion mode with multiple collapsible panels, add a group name in the value of this attribute.
When opening a collapsible panel, this will close all others opened panels of the same group.

```html:preview
<oui-collapsible
    heading="Title"
    group="lorem">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    Veniam eveniet, commodi nisi officia iusto minus repellat
    magnam in vel? Nisi, ea? Nam cupiditate sint ullam temporibus
    perspiciatis, nostrum pariatur amet?
</oui-collapsible>
<oui-collapsible
    heading="Title"
    group="lorem">
    Corporis dicta porro labore repellendus accusantium.
    Aperiam dolore velit corrupti ex accusantium nihil doloremque
    rerum voluptate reprehenderit cum molestias cumque mollitia obcaecati,
    est saepe quod dolorum magni non quidem aliquid?
</oui-collapsible>
<oui-collapsible
    heading="Title"
    group="lorem">
    Ut dolore commodi dolorem veniam. Fugiat tempora sunt officiis
    dolores officia eveniet blanditiis minus nisi quaerat voluptate
    maxime necessitatibus voluptas qui rerum, incidunt illo amet
    quae eius error. Autem, impedit.
</oui-collapsible>
<oui-collapsible
    heading="Title"
    group="lorem">
    Non, laborum enim. Magni commodi dolorem sit necessitatibus incidunt,
    iste rerum est mollitia quod voluptatem autem aspernatur illum obcaecati
    quos laboriosam, repudiandae numquam nostrum voluptate,
    in adipisci? Quis, autem repudiandae!
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

| Attribute     | Type      | Binding | One-time binding    | Values          | Default   | Description
| ----          | ----      | ----    | ----                | ----            | ----      | ----
| `heading`     | string    | @       | no                  | n/a             | n/a       | text of the heading
| `group`       | string    | @       | no                  | n/a             | n/a       | group name for the accordion mode
| `aria-label`  | string    | @?      | yes                 | n/a             | n/a       | accessibility label
| `expanded`    | boolean   | <?      | no                  | `true`, `false` | `false`   | initial expanded state
| `loading`     | boolean   | <?      | no                  | `true`, `false` | `false`   | loading state, disable toggle when `true`
| `on-toggle`   | function  | &       | no                  | n/a             | n/a       | on collapsible state changed event handler
