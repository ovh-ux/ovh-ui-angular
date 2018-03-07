# Chips

<component-status cx-design="complete" ux="rc"></component-status>

## Usage

### Default

```html:preview
<div class="oui-doc-preview-only-keep-children" style="width: 300px; margin-bottom: 15px;">
<oui-chips items="$ctrl.items"></oui-chips>
</div>
```

### Stacked

```html:preview
<div class="oui-doc-preview-only-keep-children" style="width: 300px; margin-bottom: 15px;">
<oui-chips items="$ctrl.items" stacked></oui-chips>
</div>
```

### Closable

```html:preview
<div class="oui-doc-preview-only-keep-children" style="width: 300px; margin-bottom: 15px;">
<oui-chips items="$ctrl.items" closable></oui-chips>
</div>
```

### Events

**Note**: If you want to access the items inside `on-remove` callback, you need to use the `items` variable as below.

```html:preview
<div class="oui-doc-preview-only">
    <button class="oui-button oui-button_primary" type="button" ng-click="$ctrl.addItem()">Add item</button>
</div>
<div class="oui-doc-preview-only-keep-children" style="width: 300px; margin-bottom: 15px;">
<oui-chips items="$ctrl.itemsValue" on-remove="$ctrl.onRemove(items)" closable></oui-chips>
</div>
<div class="oui-doc-preview-only">
    <p><strong>Items value:</strong> {{$ctrl.itemsValue | json}}</p>
    <p><strong>onRemove value:</strong> {{$ctrl.changedValue | json}}</p>
</div>
```

## API

| Attribute     | Type     | Binding | One-time Binding | Values    | Default   | Description                               |
| ----          | ----     | ----    | ----             | ----      | ----      | ----                                      |
| items         | object   | =       |                  |           |           | items bound to component                  |
| closable      | boolean  | <?      |                  |           | false     | closable flag                             |
| stacked       | boolean  | <?      |                  |           | false     | stacked flag                              |
| on-remove     | function | &       |                  |           |           | handler triggered when items are removed  |
