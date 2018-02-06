# Datagrid

<component-status cx-design="complete" ux="rc"></component-status>

## Usage

```html
<oui-datagrid
  page-size="..."
  rows="..."
  rows-loader="..."
  row-loader="...">
  <oui-column
    title="..."
    property="..."
    sortable="...">
  </oui-column>
</oui-datagrid>
```

## Examples

### Local data

```html:preview
<oui-datagrid
  rows="$ctrl.data"
  page-size="5">
  <oui-column title="'First name'" property="firstName" sortable="asc"></oui-column>
  <oui-column title="'Last name'" property="lastName" sortable></oui-column>
  <oui-column title="'Mother'" property="parents.mother.lastName" sortable>
    {{$row.parents.mother.lastName}}, {{$row.parents.mother.firstName}}
  </oui-column>
  <oui-column title="'Father'" property="parents.father.lastName" sortable>
    {{$row.parents.father.lastName}}, {{$row.parents.father.firstName}}
  </oui-column>
  <oui-column title="'Email'" property="email" sortable>
    <a href="mailto:{{$value}}">{{$ctrl.label}}: {{$value}}</a>
  </oui-column>
  <oui-column title="'Phone'" property="phone"></oui-column>
  <oui-column title="'Birth'" property="birth" sortable>
    {{$value|date:short}}
  </oui-column>
</oui-datagrid>
```

### Remote data and on-the-fly loading

```html:preview
<oui-datagrid
  rows-loader="$ctrl.loadPartialData($config)"
  row-loader="$ctrl.loadRow($row)"
  page-size="5">
  <oui-column title="'First name'" property="firstName" sortable="asc"></oui-column>
  <oui-column title="'Last name'" property="lastName" sortable></oui-column>
  <oui-column title="'Mother'" property="parents.mother.lastName" sortable>
    {{$row.parents.mother.lastName}}, {{$row.parents.mother.firstName}}
  </oui-column>
  <oui-column title="'Father'" property="parents.father.lastName" sortable>
    {{$row.parents.father.lastName}}, {{$row.parents.father.firstName}}
  </oui-column>
  <oui-column title="'Email'" property="email" sortable>
    <a href="mailto:{{$value}}">{{$ctrl.label}}: {{$value}}</a>
  </oui-column>
  <oui-column title="'Phone'" property="phone"></oui-column>
  <oui-column title="'Birth'" property="birth" sortable>
    {{$value|date:short}}
  </oui-column>
</oui-datagrid>
```

### Actions

```html:preview
<oui-datagrid rows-loader="$ctrl.loadPartialData($config)" row-loader="$ctrl.loadRow($row)" page-size="5">
  <oui-column title="'First name'" property="firstName" sortable="asc"></oui-column>
  <oui-column title="'Last name'" property="lastName" sortable></oui-column>
  <oui-column title="'Mother'" property="parents.mother.lastName" sortable>
    {{$row.parents.mother.lastName}}, {{$row.parents.mother.firstName}}
  </oui-column>
  <oui-column title="'Father'" property="parents.father.lastName" sortable>
    {{$row.parents.father.lastName}}, {{$row.parents.father.firstName}}
  </oui-column>
  <oui-column title="'Email'" property="email" sortable>
    <a href="mailto:{{$value}}">{{$ctrl.label}}: {{$value}}</a>
  </oui-column>
  <oui-column title="'Phone'" property="phone"></oui-column>
  <oui-column title="'Birth'" property="birth" sortable>
    {{$value|date:short}}
  </oui-column>
  <oui-action-menu
      align="end"
      compact>
      <oui-action-menu-item
          text="Action 1"
          on-click="$ctrl.action1Row = $row">
      </oui-action-menu-item>
      <oui-action-menu-divider></oui-action-menu-divider>
      <oui-action-menu-item
          text="Lien externe"
          href="#"
          external>
      </oui-action-menu-item>
  </oui-action-menu>
</oui-datagrid>

Clicked row action 1: <span ng-if="$ctrl.action1Row">{{$ctrl.action1Row.lastName}}, {{$ctrl.action1Row.firstName}}</span>
```

### Empty datagrid

```html:preview
<oui-datagrid
  rows="$ctrl.emptyList"
  page-size="5">
  <oui-column title="'First name'" property="firstName" sortable="asc"></oui-column>
  <oui-column title="'Last name'" property="lastName" sortable></oui-column>
  <oui-column title="'Mother'" property="parents.mother.lastName" sortable>
    {{$row.parents.mother.lastName}}, {{$row.parents.mother.firstName}}
  </oui-column>
  <oui-column title="'Father'" property="parents.father.lastName" sortable>
    {{$row.parents.father.lastName}}, {{$row.parents.father.firstName}}
  </oui-column>
  <oui-column title="'Email'" property="email" sortable>
    <a href="mailto:{{$value}}">{{$ctrl.label}}: {{$value}}</a>
  </oui-column>
  <oui-column title="'Phone'" property="phone"></oui-column>
  <oui-column title="'Birth'" property="birth" sortable>
    {{$value|date:short}}
  </oui-column>
  <oui-action-menu
      align="end"
      compact>
      <oui-action-menu-item
          text="Action 1"
          on-click="$ctrl.action1Row = $row">
      </oui-action-menu-item>
      <oui-action-menu-divider></oui-action-menu-divider>
      <oui-action-menu-item
          text="Lien externe"
          href="#"
          external>
      </oui-action-menu-item>
  </oui-action-menu>
</oui-datagrid>
```

### Pagination

By default the page size is 25.

You can override this value by configuring it:

```javascript
app.config(ouiDatagridConfigurationProvider => {
    ouiDatagridConfigurationProvider.setPageSize(10);
});
```

Or you can use the `page-size` property. It takes precedence over value configured by provider.

```html
<oui-datagrid rows="$ctrl.data" page-size="10">
  <oui-column title="'firstName'" property="firstName"></oui-column>
  <oui-column title="$ctrl.lastNameText" property="lastName"></oui-column>
</oui-datagrid>
```

### Custom cell templates

```html
<oui-datagrid rows="$ctrl.data">
  <oui-column title="'Name'">
    {{$row.firstName}} {{$row.lastName}}
  </oui-column>
  <oui-column property="email">
    <a href="mailto:{{$value}}">{{$value}}</a>
  </oui-column>
  <oui-column property="phone"></oui-column>
  <oui-column property="birth">
    {{$value | date:shortDate}}
  </oui-column>
</oui-datagrid>
```

### Remote data

```html
<oui-datagrid rows-loader="$ctrl.loadData($config)">
  <oui-column property="firstName"></oui-column>
  <oui-column property="lastName"></oui-column>
  <oui-column property="email"></oui-column>
  <oui-column property="phone"></oui-column>
  <oui-column property="birth"></oui-column>
</oui-datagrid>
```

```javascript
class YourController {
  loadData ({ offset, pageSize, sort }) {
    // Make what you want here
    return fetch("/path/to/you/api", {
      method: "POST",
      body: { offset, pageSize, sort }
    }).then(response => response.json());
  }
}
```

Your method must:

 * return a promise or a compatible object
 * this promise must resolve a value of this shape:

```javascript
{
    data: page, // your data (an array)
    meta: {
        totalCount // total number of items
    }
}
```

### Remote partial data

Sometimes you will have to get remote data, but you want to fill other cell from separate API calls or by calculating these new values.

You can use `row-loader`. It take the current row as argument and must return a promise that resolves to the transformed row.

```html
<oui-datagrid rows-loader="$ctrl.loadPartialData($config)"
  row-loader="$ctrl.loadRow($row)">
  <oui-column property="firstName"></oui-column>
  <oui-column property="lastName"></oui-column>
  <oui-column property="email"></oui-column>
  <oui-column property="phone"></oui-column>
  <oui-column property="birth"></oui-column>
</oui-datagrid>
```

### Pagination

By default the page size is 25.

You can override this value by configuring it:

```javascript
app.config(ouiDatagridConfigurationProvider => {
    ouiDatagridConfigurationProvider.setPageSize(10);
});
```

Or you can use the `page-size` property. It takes precedence over value configured by provider.

```html
<oui-datagrid rows="$ctrl.data" page-size="10">
  <oui-column title="'firstName'" property="firstName"></oui-column>
  <oui-column title="$ctrl.lastNameText" property="lastName"></oui-column>
</oui-datagrid>
```

### Custom cell templates

```html
<oui-datagrid rows="$ctrl.data">
  <oui-column title="'Name'">
    {{$row.firstName}} {{$row.lastName}}
  </oui-column>
  <oui-column property="email">
    <a href="mailto:{{$value}}">{{$value}}</a>
  </oui-column>
  <oui-column property="phone"></oui-column>
  <oui-column property="birth">
    {{$value | date:shortDate}}
  </oui-column>
</oui-datagrid>
```

### Remote data

```html
<oui-datagrid rows-loader="$ctrl.loadData($config)">
  <oui-column property="firstName"></oui-column>
  <oui-column property="lastName"></oui-column>
  <oui-column property="email"></oui-column>
  <oui-column property="phone"></oui-column>
  <oui-column property="birth"></oui-column>
</oui-datagrid>
```

```javascript
class YourController {
  loadData ({ offset, pageSize, sort }) {
    // Make what you want here
    return fetch("/path/to/you/api", {
      method: "POST",
      body: { offset, pageSize, sort }
    }).then(response => response.json());
  }
}
```

Your method must:

 * return a promise or a compatible object
 * this promise must resolve a value of this shape:

```javascript
{
    data: page, // your data (an array)
    meta: {
        totalCount // total number of items
    }
}
```

### Remote partial data

Sometimes you will have to get remote data, but you want to fill other cell from separate API calls or by calculating these new values.

You can use `row-loader`. It take the current row as argument and must return a promise that resolves to the transformed row.

```html
<oui-datagrid rows-loader="$ctrl.loadPartialData($config)"
  row-loader="$ctrl.loadRow($row)">
  <oui-column property="firstName"></oui-column>
  <oui-column property="lastName"></oui-column>
  <oui-column property="email"></oui-column>
  <oui-column property="phone"></oui-column>
  <oui-column property="birth"></oui-column>
</oui-datagrid>
```

[Example](src/ovh-ui-angular/controllers/datagrid.controller.js#L60).

## API

### oui-datagrid

| Attribute         | Type            | Binding | One-time binding | Values                    | Default             | Description                                       |
| ----              | ----            | ----    | ----             | ----                      | ----                | ----                                              |
| `page-size`       | number          | @?      |                  |                           | 25                  | maximum number of rows to show on each pages      |
| `rows`            | array<object>   | <?      | yes              |                           |                     | rows to show                                      |
| `rows-loader`     | function        | &?      | yes              |                           |                     | gets all rows (returns a promise with all rows)   |
| `row-loader`      | function        | &?      | yes              |                           |                     | gets row details (returns a promise with details) |


### oui-column

| Attribute         | Type            | Binding | One-time binding | Values                    | Default                | Description                                 |
| ----              | ----            | ----    | ----             | ----                      | ----                   | ----                                        |
| `title`           | string          | N/A     | yes              |                           |                        | column title put in header                  |
| `property`        | string          | N/A     | yes              |                           |                        | property path used to get value from value  |
| `sortable`        | string          | N/A     | yes              | `asc`, `desc`             | `asc` on `sortable=""` | makes a column sortable and gives the order |

### rows-loader promise response

| Attribute         | Type            | Binding | One-time binding | Values                    | Default             | Description                                                                                  |
| ----              | ----            | ----    | ----             | ----                      | ----                | ----                                                                                         |
| `data`            | array<object>   | <?      | yes              |                           |                     | rows to show                                                                                 |
| `meta`            | object          | N/A     | yes              |                           |                     | an object containing pagination information { totalCount: X } |

### oui-action-menu

Can be used as a column and will be sticked on side on smaller devices. Documentation about `oui-action-menu` can be found [here](#!/oui-angular/action-menu).

## Configuration

The datagrid can be globally configured with a provider.

```js
angular.module("myModule", [
    "oui.datagrid"
]).config(ouiDatagridConfigurationProvider => {
    ouiDatagridConfigurationProvider.setPageSize(25); // default page size (when page-size attribute is not set)
    ouiDatagridConfigurationProvider.setTranslations({ // Translations (double curly braces for placeholders)
        emptyPlaceholder: "No data available"
    });
});
```


