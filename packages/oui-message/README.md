# oui-message

## Usage

### Success

```html:preview
<oui-message message="Nullam a pellentesque nisl. Aliquam erat volutpat. Sed sed ornare diam, ut sollicitudin mauris. Quisque tincidunt dapibus augue, et tincidunt arcu sagittis et. Nam sed aliquet tellus, vel tincidunt urna. Aliquam a placerat enim. Donec condimentum sed nibh a egestas. Maecenas at leo et magna lobortis pretium. Praesent vitae fermentum dui. Interdum et malesuada fames ac ante ipsum primis in faucibus." type="success"></oui-message>
```

### Information

```html:preview
<oui-message message="Nullam a pellentesque nisl. Aliquam erat volutpat. Sed sed ornare diam, ut sollicitudin mauris. Quisque tincidunt dapibus augue, et tincidunt arcu sagittis et. Nam sed aliquet tellus, vel tincidunt urna. Aliquam a placerat enim. Donec condimentum sed nibh a egestas. Maecenas at leo et magna lobortis pretium. Praesent vitae fermentum dui. Interdum et malesuada fames ac ante ipsum primis in faucibus." type="info"></oui-message>
```

### Warning

```html:preview
<oui-message message="Nullam a pellentesque nisl. Aliquam erat volutpat. Sed sed ornare diam, ut sollicitudin mauris. Quisque tincidunt dapibus augue, et tincidunt arcu sagittis et. Nam sed aliquet tellus, vel tincidunt urna. Aliquam a placerat enim. Donec condimentum sed nibh a egestas. Maecenas at leo et magna lobortis pretium. Praesent vitae fermentum dui. Interdum et malesuada fames ac ante ipsum primis in faucibus." type="warning"></oui-message>
```

### Error

```html:preview
<oui-message message="Nullam a pellentesque nisl. Aliquam erat volutpat. Sed sed ornare diam, ut sollicitudin mauris. Quisque tincidunt dapibus augue, et tincidunt arcu sagittis et. Nam sed aliquet tellus, vel tincidunt urna. Aliquam a placerat enim. Donec condimentum sed nibh a egestas. Maecenas at leo et magna lobortis pretium. Praesent vitae fermentum dui. Interdum et malesuada fames ac ante ipsum primis in faucibus." type="error"></oui-message>
```

### Complexe message

```html:preview
<oui-message type="info">
  <span>Grocery list</span>
  <ul>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ul>
</oui-message>
```

## Attributes

|Attribute        | Value           | Description         |
| ----            | ----            | ----                |
| __message__     |                 | Text message        |
| __type__        | success         | Success message     |
|                 | info            | Information message |
|                 | warn            | Warning message     |
|                 | error           | Error message       |


## Services

- [OuiMessageDispatcher](#!/oui-angular/message-dispatcher)
- [OuiMessageListenerFactory](#!/oui-angular/message-listener)
