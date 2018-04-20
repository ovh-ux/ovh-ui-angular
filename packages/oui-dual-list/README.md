# Dual List

<component-status cx-design="complete" ux="complete"></component-status>

## Usage

### Basic (Empty component)

```html:preview
<oui-dual-list></oui-dual-list>
<div class="oui-doc-preview-only" style="margin-bottom: 20px;"></div>
```

### Basic (Empty source and destination list)

```html:preview
<oui-dual-list 
    source-list-label="All Users"
    target-list-label="Selected Users"
    source-list-empty-label="No users found"
    target-list-empty-label="No users added"
    source-list="$ctrl.emptySource"
    target-list="$ctrl.emptyDestination">
</oui-dual-list>
<div class="oui-doc-preview-only" style="margin-bottom: 20px;"></div>
```

### Basic (array of strings)

```html:preview
<oui-dual-list 
    source-list-label="All Users"
    target-list-label="Selected Users"
    source-list-empty-label="No users found"
    target-list-empty-label="No users added"
    source-list="$ctrl.data.users"
    target-list="$ctrl.data.selectedUsers">
</oui-dual-list>
<div class="oui-doc-preview-only" style="margin-bottom: 20px;"></div>
```

### Basic (fixed height)

```html:preview
<div style="height:250px;">
<oui-dual-list 
    source-list-label="All Users"
    target-list-label="Selected Users"
    source-list-empty-label="No users found"
    target-list-empty-label="No users added"
    source-list="$ctrl.data.users"
    target-list="$ctrl.data.selectedUsers">
</oui-dual-list>
</div>
<div class="oui-doc-preview-only" style="margin-bottom: 20px;"></div>
```

### Basic (with bulk action enabled)

```html:preview
<div style="height:400px;">
<oui-dual-list 
    source-list-label="All Users"
    target-list-label="Selected Users"
    source-list-empty-label="No users found"
    target-list-empty-label="No users added"
    source-list="$ctrl.data.users"
    target-list="$ctrl.data.selectedUsers"
    bulk-action-enabled="true">
</oui-dual-list>
</div>
<div class="oui-doc-preview-only" style="margin-bottom: 20px;"></div>
```

### Array of objects

```html:preview
<oui-dual-list 
    source-list-label="All Users"
    target-list-label="Selected Users"
    source-list-empty-label="No users found"
    target-list-empty-label="No users added"
    source-list="$ctrl.data.objects.users"
    target-list="$ctrl.data.objects.selectedUsers"
    property="name">
</oui-dual-list>
<div class="oui-doc-preview-only" style="margin-bottom: 20px;"></div>
```

### Array of objects (deep nested property)

```html:preview
<oui-dual-list 
    source-list-label="All Users"
    target-list-label="Selected Users"
    source-list-empty-label="No users found"
    target-list-empty-label="No users added"
    source-list="$ctrl.data.deepNestedObjects.users"
    target-list="$ctrl.data.deepNestedObjects.selectedUsers"
    property="name.firstName">
</oui-dual-list>
<div class="oui-doc-preview-only" style="margin-bottom: 20px;"></div>
```

### AJAX source and target list

```html:preview
<oui-dual-list 
    source-list-label="All Users"
    target-list-label="Selected Users"
    source-list-empty-label="No users found"
    target-list-empty-label="No users added"
    source-list="$ctrl.laxyUsersList"
    target-list="$ctrl.laxySelectedUsersList"
    on-add="$ctrl.add(items)"
    on-remove="$ctrl.remove(items)"
    property="name">
</oui-dual-list>
<div class="oui-doc-preview-only" style="margin-bottom: 20px;"></div>
```

### Dual list with all options

```html:preview
<oui-dual-list 
    source-list-label="All Users"
    target-list-label="Selected Users"
    source-list-empty-label="No users found"
    target-list-empty-label="No users added"
    source-list="$ctrl.laxyUsersList"
    target-list="$ctrl.laxySelectedUsersList"
    on-add="$ctrl.add(items)"
    on-remove="$ctrl.remove(items)"
    property="name"
    move-all-label="Add all users",
    remove-all-label="Remove all users"
    add-label="Add user"
    bulk-action-enabled="true"
    height="250px">
</oui-dual-list>
<div class="oui-doc-preview-only" style="margin-bottom: 20px;"></div>
```


## API

### oui-dual-list

| Attribute           | Type     | Binding | One-time Binding | Values   | Default           | Description         |
| ----                | ----     | ----    | ----             | ----     | ----              | ----                |
| `source-list-label` | string   | @?      | yes              |          | Unselected items  | Source list title   |
| `target-list-label` | string   | @?      | yes              |          | Selected items    | Target list title   |
| `source-list-empty-label` | string   | @?      | yes              |          | No items to select    | Message to show when source list is empty  |
| `target-list-empty-label` | string   | @?      | yes              |          | No items are selected    | Message to show when target list is empty  |
| `source-list` | expression   | <?      | yes             |          | []  | Array of strings, array of objects or promise resolved to array of strings/objects  |
| `target-list` | expression   | <?      | yes             |          | []  | Array of strings, array of objects or promise resolved to array of strings/objects  |
| `on-add`    | method   | &?      | yes             |          |   | Callback method called on moving item from source to target   |
| `on-remove` | method   | &?      | yes             |          |   | Callback method called on moving item from target to source   |
| `property` | string   | @?       | yes             |          |   |  Object property name who's value is to be shown on dula list. Required only if array of objects are used. The value of this property must be unique. |
| `move-all-label`   | string   | @?      | yes              |          | Add all       | Add all link title   |
| `remove-all-label` | string   | @?      | yes              |          | Remove all    | Remove all link title   |
| `add-label` | string   | @?      | yes              |          | Add    | Add title   |
| `bulk-action-enabled` | boolean   | <?      | yes              |          | false    | Shows Add all and Remove all links if set to true   |
