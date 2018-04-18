# Dual List

<component-status cx-design="complete" ux="complete"></component-status>

## Usage

### Basic (Empty component)

```html:preview
<oui-dual-list></oui-dual-list>
<div style="margin-bottom: 20px;"></div>
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
<div style="margin-bottom: 20px;"></div>
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
<div style="margin-bottom: 20px;"></div>
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
<div style="margin-bottom: 20px;"></div>
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
<div style="margin-bottom: 20px;"></div>
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
<div style="margin-bottom: 20px;"></div>
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
<div style="margin-bottom: 20px;"></div>
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
<div style="margin-bottom: 20px;"></div>
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
<div style="margin-bottom: 20px;"></div>
```