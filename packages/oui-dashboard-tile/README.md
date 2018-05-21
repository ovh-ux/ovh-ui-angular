# Button

<component-status cx-design="complete" ux="rc"></component-status>

> Tiles are used in Dashboard to group information and actions of the same nature.

## Layout

A tile always has a title. The related information in a tile are displayed as a block of info, composed of:

* Label
* Value(s)
* Actions Dropdown

If needed, a block of info can be grouped as multiple labels/values.
Blocks of info are separated with an horizontal line.

## Usage

### Simple tile with title

```html:preview
<div class="row" style="margin-bottom: 2rem;">
    <div class="col-md-3">
        <oui-dashboard-tile title="Tile 1">
            <oui-dashboard-tile-item>
                <a href="#" class="oui-link oui-link_icon">Link 1</a>
            </oui-dashboard-tile-item>
        </oui-dashboard-tile>
    </div>
</div>
```

### Tile with multiple items

```html:preview
<div class="row" style="margin-bottom: 2rem;">
    <div class="col-md-3">
        <oui-dashboard-tile title="Tile 1">
            <oui-dashboard-tile-item>
                <a href="#" class="oui-link oui-link_icon">Link 1</a>
            </oui-dashboard-tile-item>
            <oui-dashboard-tile-item>
                <a href="#" class="oui-link oui-link_icon">
                    External link
                    <i class="oui-icon oui-icon-external_link" aria-hidden="true"></i>
                </a>
            </oui-dashboard-tile-item>
        </oui-dashboard-tile>
    </div>
</div>
```

### Tile without title border

```html:preview
<div class="row" style="margin-bottom: 2rem;">
    <div class="col-md-3">
        <oui-dashboard-tile title="Tile 1" title-border="false">
            <oui-dashboard-tile-item>
                <a href="#" class="oui-link oui-link_icon">Link 1</a>
            </oui-dashboard-tile-item>
            <oui-dashboard-tile-item>
                <a href="#" class="oui-link oui-link_icon">
                    External link
                    <i class="oui-icon oui-icon-external_link" aria-hidden="true"></i>
                </a>
            </oui-dashboard-tile-item>
        </oui-dashboard-tile>
    </div>
</div>
```

### Tile items without border

```html:preview
<div class="row" style="margin-bottom: 2rem;">
    <div class="col-md-3">
        <oui-dashboard-tile title="Tile 1">
            <oui-dashboard-tile-item bottom-border="false">
                <a href="#" class="oui-link oui-link_icon">Link 1</a>
            </oui-dashboard-tile-item>
            <oui-dashboard-tile-item bottom-border="false">
                <a href="#" class="oui-link oui-link_icon">
                    External link
                    <i class="oui-icon oui-icon-external_link" aria-hidden="true"></i>
                </a>
            </oui-dashboard-tile-item>
        </oui-dashboard-tile>
    </div>
</div>
```

### Tile items with title

```html:preview
<div class="row" style="margin-bottom: 2rem;">
    <div class="col-md-3">
        <oui-dashboard-tile title="Tile 1">
            <oui-dashboard-tile-item title="Status">
                <oui-button variant="secondary" text="Active"></oui-button>
            </oui-dashboard-tile-item>
            <oui-dashboard-tile-item title="6 Front-ends">
                <div><span class="oui-status oui-status_success">2 of 6 active</span></div>
                <div><span class="oui-status oui-status_warning">3 of 6 with warnings</span></div>
                <div><span class="oui-status oui-status_error">1 of 6 with errors</span></div>
            </oui-dashboard-tile-item>
        </oui-dashboard-tile>
    </div>
</div>
```

### Tile item with action menu

```html:preview
<div class="row" style="margin-bottom: 2rem;">
    <div class="col-md-3">
        <oui-dashboard-tile title="Tile 1">
            <oui-dashboard-tile-item title="Main Domain">
                <a href="#" class="oui-link oui-link_icon">mydomainname.com</a>
                <oui-action-menu aria-label="Server: actions" align="start" compact>
                    <oui-action-menu-item text="Action 1" aria-label="Action 1" on-click="$ctrl.action = true"></oui-action-menu-item>
                    <oui-action-menu-item text="Action 2" aria-label="Action 2" on-click="$ctrl.action = true"></oui-action-menu-item>
                </oui-action-menu>
            </oui-dashboard-tile-item>
        </oui-dashboard-tile>
    </div>
</div>
```

### Information tile

```html:preview
<div class="row" style="margin-bottom: 2rem;">
    <div class="col-md-3">
        <oui-dashboard-tile title="Information">
            <oui-dashboard-tile-item title="Status">
                <oui-button variant="secondary" text="Active"></oui-button>
            </oui-dashboard-tile-item>
            <oui-dashboard-tile-item title="6 Front-ends">
                <div><span class="oui-status oui-status_success">2 of 6 active</span></div>
                <div><span class="oui-status oui-status_warning">3 of 6 with warnings</span></div>
                <div><span class="oui-status oui-status_error">1 of 6 with errors</span></div>
            </oui-dashboard-tile-item>
            <oui-dashboard-tile-item title="Main Domain">
                <a href="#" class="oui-link oui-link_icon">mydomainname.com</a>
                <oui-action-menu aria-label="Server: actions" align="start" compact>
                    <oui-action-menu-item text="Action 1" aria-label="Action 1" on-click="$ctrl.action = true"></oui-action-menu-item>
                    <oui-action-menu-item text="Action 2" aria-label="Action 2" on-click="$ctrl.action = true"></oui-action-menu-item>
                </oui-action-menu>
            </oui-dashboard-tile-item>
            <oui-dashboard-tile-item title="IPv4" bottom-border=false>37.59.16.168</oui-dashboard-tile-item>
        </oui-dashboard-tile>
    </div>
</div>
```

### Shortcuts tile

```html:preview
<div class="row" style="margin-bottom: 2rem;">
    <div class="col-md-3">
        <oui-dashboard-tile title="Shortcuts">
            <oui-dashboard-tile-item bottom-border="false">
                <a href="#" class="oui-link">Associate a domain name</a>
            </oui-dashboard-tile-item>
            <oui-dashboard-tile-item>
                <a href="#" class="oui-link">Execute a diagnostic</a>
            </oui-dashboard-tile-item>
            <oui-dashboard-tile-item title="Associated Sharepoint service" bottom-border="false">
                <a href="#" class="oui-link oui-link_icon">sharepoint-fg5643-1</a>
            </oui-dashboard-tile-item>
            <oui-dashboard-tile-item title="Checking URL">
                <a href="#" class="oui-link oui-link_icon">
                    https://mysp.ovh.net
                    <i class="oui-icon oui-icon-external_link" aria-hidden="true"></i>
                </a>
            </oui-dashboard-tile-item>
            <oui-dashboard-tile-item bottom-border="false">
                <a href="#" class="oui-link">Migrate to Exchange 2016</a>
            </oui-dashboard-tile-item>
        </oui-dashboard-tile>
    </div>
</div>
```

## API

### oui-dashboard-tile

| Attribute         | Type            | Binding | One-time binding | Values                    | Default             | Description                          |
| ----              | ----            | ----    | ----             | ----                      | ----                | ----                                 |
| `title`           | string          | @       | yes              |                           |                     | tile title                           |
| `title-border`    | boolean         | <?      |                  |                           | `true`              | applies a bottom border to the title |

### oui-dashboard-tile-item

| Attribute         | Type            | Binding | One-time binding | Values                    | Default             | Description                          |
| ----              | ----            | ----    | ----             | ----                      | ----                | ----                                 |
| `title`           | string          | @       | yes              |                           |                     | item title                           |
| `bottom-border`   | boolean         | <?      |                  |                           | `true`              | applies a bottom border to the item  |
