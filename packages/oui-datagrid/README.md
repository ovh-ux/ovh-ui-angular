# Datagrid

<component-status cx-design="complete" ux="complete"></component-status>

## Usage

### Local data, searchable

```html:preview
<oui-datagrid
  rows="$ctrl.data"
  page-size="5">
  <oui-column title="'First name'" property="firstName" sortable="asc" type="string" searchable filterable></oui-column>
  <oui-column title="'Last name'" property="lastName" sortable type="string" searchable filterable></oui-column>
  <oui-column title="'Mother'" property="parents.mother.lastName" sortable>
    {{$row.parents.mother.lastName}}, {{$row.parents.mother.firstName}}
  </oui-column>
  <oui-column title="'Father'" property="parents.father.lastName" sortable>
    {{$row.parents.father.lastName}}, {{$row.parents.father.firstName}}
  </oui-column>
  <oui-column title="'Email'" property="email" sortable type="string" searchable filterable>
    <a href="mailto:{{$value}}">{{$value}}</a>
  </oui-column>
  <oui-column title="'Phone'" property="phone" sortable type="string" searchable filterable></oui-column>
  <oui-column title="'Birth'" property="birth" sortable type="date" filterable>
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
  <oui-column title="'First name'" property="firstName" sortable="asc" type="string" searchable filterable></oui-column>
  <oui-column title="'Last name'" property="lastName" sortable type="string" searchable filterable></oui-column>
  <oui-column title="'Mother'" property="parents.mother.lastName" sortable>
    {{$row.parents.mother.lastName}}, {{$row.parents.mother.firstName}}
  </oui-column>
  <oui-column title="'Father'" property="parents.father.lastName" sortable>
    {{$row.parents.father.lastName}}, {{$row.parents.father.firstName}}
  </oui-column>
  <oui-column title="'Email'" property="email" sortable>
    <a href="mailto:{{$value}}">{{$value}}</a>
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

### Dynamic columns

Columns can be dynamically rendered using the `columns` attribute of datagrid.
Using this attribute, a new column property `hidden` is available.

```html:preview
<div ng-init="showParents = true">
<oui-datagrid
  rows="$ctrl.data"
  page-size="5"
  columns="[{
    title: 'First name',
    property: 'firstName',
    sortable: 'asc',
    searchable: true,
    filterable: true
  },
  {
    title: 'Last name',
    property: 'lastName',
    sortable: true,
    searchable: true,
    filterable: true
  },
  {
    title: 'Mother',
    property: 'parents.mother.lastName',
    template: '{{$row.parents.mother.lastName}}, {{$row.parents.mother.firstName}}',
    sortable: true,
    hidden: !showParents
  },
  {
    title: 'Father',
    property: 'parents.father.lastName',
    template: '{{$row.parents.father.lastName}}, {{$row.parents.father.firstName}}',
    sortable: true,
    hidden: !showParents
  }]"></oui-datagrid>
<oui-checkbox text="Show parents" model="showParents"></oui-checkbox>
</div>
```

```html:preview
<div ng-init="columns = $ctrl.metaData.columns1">
<oui-datagrid
  rows="$ctrl.data"
  page-size="5"
  columns="columns"></oui-datagrid>
<oui-radio-toggle-group model="columns">
  <oui-radio text="Arrangement 1" value="$ctrl.metaData.columns1"></oui-radio>
  <oui-radio text="Arrangement 2" value="$ctrl.metaData.columns2"></oui-radio>
</oui-radio-group>
</div>
```

All the properties of a column also become dynamic.

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

### Search and filtering

```html:preview
<oui-datagrid rows="$ctrl.servers"
  page-size="5">
  <oui-column title="'Name'"
    property="name"
    type="string"
    searchable
    filterable
    sortable="asc"
    type-options="{
        operators: [
            'contains'
        ]
    }"></oui-column>
  <oui-column title="'Memory'"
    property="memory"
    type="number"
    filterable
    sortable></oui-column>
  <oui-column title="'CPUs'"
    property="cpu"
    type="number"
    filterable
    sortable></oui-column>
  <oui-column title="'Running'"
    property="up"
    type="boolean"
    filterable
    sortable>{{ $value ? 'Yes' : 'No' }}</oui-column>
  <oui-column title="'Purpose'"
    property="purpose"
    type="options"
    type-options="{
        values: {
            network: 'Network',
            database: 'Database',
            static: 'Static content',
            frontend: 'Frontend',
            backend: 'Backend',
            broker: 'Broker',
            others: 'Others'
        }
    }"
    filterable
    sortable></oui-column>
  <oui-column title="'IP'"
    property="ip"
    type="string"
    searchable
    filterable
    sortable></oui-column>
</oui-datagrid>
```

### Extra top content

```html:preview
<oui-datagrid
  rows="$ctrl.data"
  page-size="5">
  <oui-column title="'First name'" property="firstName" sortable="asc" type="string" searchable filterable></oui-column>
  <oui-column title="'Last name'" property="lastName" sortable type="string" searchable filterable></oui-column>
  <oui-column title="'Mother'" property="parents.mother.lastName" sortable>
    {{$row.parents.mother.lastName}}, {{$row.parents.mother.firstName}}
  </oui-column>
  <oui-column title="'Father'" property="parents.father.lastName" sortable>
    {{$row.parents.father.lastName}}, {{$row.parents.father.firstName}}
  </oui-column>
  <oui-column title="'Email'" property="email" sortable type="string" searchable filterable>
    <a href="mailto:{{$value}}">{{$value}}</a>
  </oui-column>
  <oui-column title="'Phone'" property="phone" sortable type="string" searchable filterable></oui-column>
  <oui-column title="'Birth'" property="birth" sortable type="date" filterable>
    {{$value|date:short}}
  </oui-column>
  <extra-top>
    <oui-action-menu
      text="Actions"
      aria-label="Server: actions"
      align="start">
      <oui-action-menu-item
        text="Add person"
        aria-label="Persons: add item"></oui-action-menu-item>
      <oui-action-menu-item
        text="Other action"
        aria-label="Persons: other action"></oui-action-menu-item>
    </oui-action-menu>
  </extra-top>
</oui-datagrid>
```

## API

### oui-datagrid

| Attribute         | Type            | Binding | One-time binding | Values                    | Default             | Description                                       |
| ----              | ----            | ----    | ----             | ----                      | ----                | ----                                              |
| `page-size`       | number          | @?      |                  |                           | 25                  | maximum number of rows to show on each pages      |
| `rows`            | array           | <?      | yes              |                           |                     | rows to show                                      |
| `rows-loader`     | function        | &?      | yes              |                           |                     | gets all rows (returns a promise with all rows)   |
| `row-loader`      | function        | &?      | yes              |                           |                     | gets row details (returns a promise with details) |


### oui-column / `columns` attribute

| Attribute                      | Type            | Binding | One-time binding | Values                      | Default                | Description                                       |
| ----                           | ----            | ----    | ----             | ----                        | ----                   | ----                                              |
| `title`                        | string          | N/A     | yes              |                             |                        | column title put in header                        |
| `property`                     | string          | N/A     | yes              |                             | null                   | property path used to get value from value        |
| `sortable`                     | string          | N/A     | yes              | `asc`, `desc`               | `asc` on `sortable=""` | makes a column sortable and gives the order       |
| `type`                         | string          | N/A     |                  | See below                   | null                   | define a column type                              |
| `filterable`                   | N/A             | N/A     |                  |                             |                        | define a filterable column                        |
| `searchable`                   | N/A             | N/A     |                  |                             |                        | define a searchable column                        |
| `type-options` / `typeOptions` | object          | N/A     |                  | See below                   | {}                     | define options related to column type (see below) |

`typeOptions` is used to give options to feed criteria values. Example:

```javascript
const typeOptions = {
    trueValue: "Running", // displayed value for true value when type = boolean
    falseValue: "Down", // displayed value for false value when type = boolean
    values: { // displayed values when type = options)
        nw: "Network",
        db: "Database",
        other: "Other"
    },
    operators: [ // constraint operators list for this field
        "is"
    ]
};
```

### rows-loader promise response

| Attribute         | Type            | Binding | One-time binding | Values                    | Default             | Description                                                                                  |
| ----              | ----            | ----    | ----             | ----                      | ----                | ----                                                                                         |
| `data`            | array           | <?      | yes              |                           |                     | rows to show                                                                                 |
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

### Types

Types are associated to operators. Here's the list of all availables types and operators:

- `boolean`
  - `is`
  - `isNot`
- `date`
  - `is`
  - `isAfter`
  - `isBefore`
- `number`
  - `is`
  - `smaller`
  - `bigger`
- `options`
  - `is`
  - `isNot`
- `string`
  - `contains`
  - `containsNot`
  - `startsWith`
  - `endsWith`
  - `is`
  - `isNot`

