# Back button

<component-status cx-design="complete" ux="rc"></component-status>

## Usage

```html
<oui-back-button
    id="..."
    name="..."
    aria-label="..."
    title="..."
    on-click="...">
</oui-back-button>
```

If ```on-click``` is not specified, the default action on user click will be angular's ```$window.history.back()```.

## Examples

### Default

```html:preview
<oui-back-button data-title="Title">
</oui-back-button>
```

### Aria label

```html:preview
<oui-back-button aria-label="foo">
</oui-back-button>
```

### On-click callback

```html:preview
<oui-back-button on-click="$ctrl.myFunction()">
</oui-back-button>
```

## API

| Attribute     | Type     | Binding | One-time binding | Values              | Default                | Description                         |
| ----          | ----     | ----    | ----             | ----                | ----                   | ----                                |
| id            | string   | @?      | true             |                     |                        | id attribute of the input           |
| name          | string   | @?      | true             |                     |                        | name attribute of the input         |
| aria-label    | string   | @?      | true             |                     |                        | accessibility label                 |
| title         | string   | @?      | true             |                     |                        | text of the header 
| on-click      | function | &?      |                  |                     | $window.history.back() | callback on component click         |
