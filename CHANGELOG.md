<a name="2.4.0"></a>
# [2.4.0]

### Bug Fixes

- update menu header and active item for navbar
- hide empty sublink for navbar

### Features

- add textarea component
- add radio-group component
- manage textarea and select errors in field component

<a name="2.3.0"></a>
# [2.3.0]

### Bug Fixes

- update navbar template for internal menus
- prevent datagrid to render empty cell when template contains only white spaces

### Features

- add title to existing back-button component
- add a toggler-links attribute to navbar
- add select component

<a name="2.2.0"></a>
# [2.2.0]

### Bug Fixes

- prevent useless calls to row-loader on datagrid
- close the notification menu when clicked on navbar
- fix transition slide on navbar
- avoid sorting if property attribute is not set on datagrid column

### Features

- add field component
- add modal component
- add required attribute on checkbox
- add spinner between page changes on datagrid
- add disabled attribute to disable item on action-menu

<a name="2.1.0"></a>
# [2.1.0]

### Features

- add navbar component

<a name="2.0.2"></a>
# [2.0.2]

### Bug Fixes

- fix unwanted properties on component tags (e.g. `aria-label`, `id`, `name`, ...)

<a name="2.0.1"></a>
# [2.0.1]

### Bug Fixes

- **oui-datagrid:** handle `data-` prefixes on `oui-column`
- **oui-datagrid:** add scope context to process header titles

<a name="2.0.0"></a>
# [2.0.0]

### BREAKING CHANGES
- consider `ovh-ui-kit` as a peer dependency instead of a dependency
- **oui-checkbox:** no `oui-checkbox-label` and `oui-checkbox-description` transcludes anymore
- **oui-checkbox:** modifiers no more supported (big and thumbnails)
- **oui-radio:** no `oui-radio-label` and `oui-radio-description` transcludes anymore
- **oui-radio:** modifiers no more supported (big and thumbnails)
- **oui-message:** default aria-label removed for close button
- **oui-message:** `message`, `dismissable` and `on-dismiss` attributes removed
- **oui-spinner:** rename `oui-loader` to `oui-spinner`
- **oui-spinner:** no more `align` and `inline` attributes

### Features
- indeterminate state support on `oui-checkbox`
- use OVH's eslint config

List of new components:
- `oui-button`
- `oui-back-button`
- `oui-numeric`
- `oui-dropdown`
- `oui-action-menu`
- `oui-tooltip`
- `oui-pagination`
- `oui-datagrid`

### Bug Fixes
- can run `karma` and `karma:watch` commands on Windows

<a name="1.1.0"></a>
# [1.1.0]

### Features

- loader component
