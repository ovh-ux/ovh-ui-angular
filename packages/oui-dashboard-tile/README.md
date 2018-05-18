# Button

<component-status cx-design="complete" ux="rc"></component-status>

## Usage

### Default

```html:preview
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
        <oui-action-menu aria-label="Server: actions" align="start" compact></oui-action-menu>
    </oui-dashboard-tile-item>
    <oui-dashboard-tile-item title="IPv4" bordered=false>37.59.16.168</oui-dashboard-tile-item>
</oui-dashboard-tile>
```

### Shortcuts

```html:preview
<oui-dashboard-tile title="Shortcuts">
    <oui-dashboard-tile-item bordered="false">
        <a href="#" class="oui-link">Associate a domain name</a>
    </oui-dashboard-tile-item>
    <oui-dashboard-tile-item>
        <a href="#" class="oui-link">Execute a diagnostic</a>
    </oui-dashboard-tile-item>
    <oui-dashboard-tile-item title="Associated Sharepoint service" bordered="false">
        <a href="#" class="oui-link oui-link_icon">sharepoint-fg5643-1</a>
    </oui-dashboard-tile-item>
    <oui-dashboard-tile-item title="Checking URL">
        <a href="#" class="oui-link oui-link_icon">
            https://mysp.ovh.net
            <i class="oui-icon oui-icon-external_link" aria-hidden="true"></i>
        </a>
    </oui-dashboard-tile-item>
    <oui-dashboard-tile-item bordered="false">
        <a href="#" class="oui-link">Migrate to Exchange 2016</a>
    </oui-dashboard-tile-item>
</oui-dashboard-tile>
```
