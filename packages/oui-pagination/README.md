# Pagination

<component-status cx-design="complete" ux="prototype"></component-status>



## Usage

### A few pages

```html:preview
<oui-pagination
    current-offset="$ctrl.pagination1.offset"
    total-items="$ctrl.pagination1.totalItems"
    on-change="$ctrl.onChange('pagination1', $event)">
    </oui-pagination>
```

### Lots of pages

```html:preview
<oui-pagination
    current-offset="$ctrl.pagination2.offset"
    page-size="$ctrl.pagination2.pageSize"
    total-items="$ctrl.pagination2.totalItems"
    on-change="$ctrl.onChange('pagination2', $event)">
    </oui-pagination>
```

## API

| Attribute         | Type     | Binding | One-time Binding | Values                 | Default             | Description                                      |
| ----              | ----     | ----    | ----             | ----                   | ----                | ----                                             |
| `current-offset`  | Number   | <       | no               |                        |                     | offset of the current page first item            |
| `page-size`       | Number   | <?      | no               |                        | defined by provider | number of items per page                         |
| `page-size-max`   | Number   | <?      | no               |                        |                     | max page size of the page sizes list             |
| `total-items`     | Number   | <       | no               |                        |                     | total number of items                            |
| `on-change`       | function | &?      |                  |                        |                     | change callback, called on pagination changes    |

`on-change` callback takes a parameter `$event` containing:

  - `offset`: the new offset
  - `pageSize`: the new page size

## Configuration

The pagination can be globally configured with a provider.

```js
angular.module("myModule", [
    "oui.pagination"
]).config(ouiPaginationConfigurationProvider => {
    ouiPaginationConfigurationProvider.setPageSize(25); // default page size (when page-size attribute is not set)
    ouiPaginationConfigurationProvider.setPageSizeList([25, 50, 100, 300]); // List of page sizes
    ouiPaginationConfigurationProvider.setTranslations({ // Translations (double curly braces for placeholders)
        resultsPerPage: "Results per page",
        ofNResults: "of {{totalItems}} results",
        currentPageOfPageCount: "Page {{currentPage}} of {{pageCount}}"
    });
});
```


