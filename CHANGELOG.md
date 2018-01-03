# Changelog

## v2.0.0

### Breaking change
- Consider `ovh-ui-kit` as a peer dependency instead of a dependency

#### oui-checkbox
- No `oui-checkbox-label` and `oui-checkbox-description` transcludes anymore
- Modifiers no more supported (big and thumbnails)

#### oui-radio
- No `oui-radio-label` and `oui-radio-description` transcludes anymore
- Modifiers no more supported (big and thumbnails)

#### oui-message
- Default aria-label removed for close button
- `message`, `dismissable` and `on-dismiss` attributes removed

#### oui-spinner
- Rename `oui-loader` to `oui-spinner`
- No more `align` and `inline` attributes

### New components
- `oui-button`
- `oui-back-button`
- `oui-numeric`
- `oui-dropdown`
- `oui-action-menu`
- `oui-tooltip`
- `oui-pagination`
- `oui-datagrid`

### New features
- Indeterminate state support on `oui-checkbox`
- Use OVH's eslint config

### Fixes
- Can run `karma` and `karma:watch` commands on Windows

### Doc
- Update years inside license and readme

## v1.1.1

### Build:

- Add Webpack 3
- Remove Lerna

## v1.1.0

### New feature:

- Loader component
