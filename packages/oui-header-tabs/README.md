
# Header Tabs
<component-status cx-design="complete" ux="complete"></component-status>
## Usage
### With state and state params
```html:preview
<oui-header-tabs on-activate="$ctrl.onActivate(tabName)">
    <oui-header-tab 
        data-text="Home" 
        data-state="showcase.oui-angular.header-tabs.home"
        data-state-params="{ name: 'home' }">
    </oui-header-tab>
    <oui-header-tab 
        data-text="Dashboard"
        data-state="showcase.oui-angular.header-tabs.dashboard"
        data-state-params="{ name: 'dashboard' }">
    </oui-header-tab>
    <oui-header-tab 
        data-text="Streams"
        data-state="showcase.oui-angular.header-tabs.streams"
        data-state-params="{ name: 'streams' }">
    </oui-header-tab>
</oui-header-tabs>
<div class="oui-doc-preview-only-keep-children" style="margin-bottom: 15px;">
```
### Disable tab
```html:preview
<oui-header-tabs>
    <oui-header-tab 
        data-text="Tab1" 
        data-state="showcase.oui-angular.header-tabs.tab1">
    </oui-header-tab>
    <oui-header-tab 
        data-text="Tab2"
        data-state="showcase.oui-angular.header-tabs.tab2">
    </oui-header-tab>
    <oui-header-tab 
        data-disabled="$ctrl.disableTab3"
        data-text="Tab3"
        data-state="showcase.oui-angular.header-tabs.tab3">
    </oui-header-tab>
</oui-header-tabs>
<div class="oui-doc-preview-only-keep-children" style="margin-bottom: 15px;">
```
### Hide tab
```html:preview
<oui-header-tabs>
    <oui-header-tab
        data-ng-if="$ctrl.showTab11" 
        data-text="Tab11" 
        data-state="showcase.oui-angular.header-tabs.tab11">
    </oui-header-tab>
    <oui-header-tab 
        data-text="Tab12"
        data-state="showcase.oui-angular.header-tabs.tab12">
    </oui-header-tab>
    <oui-header-tab
        data-text="Tab13"
        data-state="showcase.oui-angular.header-tabs.tab13">
    </oui-header-tab>
</oui-header-tabs>
<div class="oui-doc-preview-only-keep-children" style="margin-bottom: 15px;">
```
## API 
### oui-header-tabs
| Attribute     | Type     | Binding | One-time Binding | Mandatory    | Default   | Description                               |
| ----          | ----     | ----    | ----             | ----      | ----      | ----                                      |
| on-activate   | expression | &?    | true             | false     |           | Callback method called on activating a tab. Sends active tab name(text) in arguments.                    |
| on-inactivate | expression | &?    | true             | false     |           | Callback method called on inactivating a tab. Sends inactive tab name(text) in arguments.  |

### oui-header-tab
| Attribute     | Type     | Binding | One-time Binding | Mandatory    | Default   | Description                               |
| ----          | ----     | ----    | ----             | ----      | ----      | ----                                      |
| text          | string   | @       | true             | true      |           | Tab header text.                  |
| state         | string   | @       | true             | true      |           | Route name associated with this tab. This route gets activated on clicking this tab or tab gets activated on navigating to this route.              |
| state-params  | string   | <?      | true             | false     |           | Route params associated with this route.              |
| disabled      | boolean  | <?      | false            | false     | false     | If set to true, tab will be disabled.                    |