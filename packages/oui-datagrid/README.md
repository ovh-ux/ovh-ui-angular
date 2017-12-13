# Datagrid

<component-status cx-design="complete" ux="prototype"></component-status>

## Usage

### General case

Local

<oui-datagrid
  rows="$ctrl.data"
  page-size="25">
  <oui-column property="firstName" sortable="asc"></oui-column>
  <oui-column property="lastName" sortable></oui-column>
  <oui-column title="'Mère'" property="parents.mother.lastName" sortable>
    {{$row.parents.mother.lastName}}, {{$row.parents.mother.firstName}}
  </oui-column>
  <oui-column title="'Père'" property="parents.father.lastName" sortable>
    {{$row.parents.father.lastName}}, {{$row.parents.father.firstName}}
  </oui-column>
  <oui-column property="email" sortable>
    <a href="mailto:{{$value}}">{{$ctrl.label}}: {{$value}}</a>
  </oui-column>
  <oui-column property="phone"></oui-column>
  <oui-column property="birth" sortable>
    {{$value|date:short}}
  </oui-column>
</oui-datagrid>

Remote data + on-the-fly loading

<oui-datagrid
  rows-loader="$ctrl.loadPartialData($config)"
  row-loader="$ctrl.loadRow($row)"
  page-size="25">
  <oui-column property="firstName" sortable="asc"></oui-column>
  <oui-column property="lastName" sortable></oui-column>
  <oui-column title="'Mère'" property="parents.mother.lastName" sortable>
    {{$row.parents.mother.lastName}}, {{$row.parents.mother.firstName}}
  </oui-column>
  <oui-column title="'Père'" property="parents.father.lastName" sortable>
    {{$row.parents.father.lastName}}, {{$row.parents.father.firstName}}
  </oui-column>
  <oui-column property="email" sortable>
    <a href="mailto:{{$value}}">{{$ctrl.label}}: {{$value}}</a>
  </oui-column>
  <oui-column property="phone"></oui-column>
  <oui-column property="birth" sortable>
    {{$value|date:short}}
  </oui-column>
</oui-datagrid>

With actions

<oui-datagrid rows-loader="$ctrl.loadPartialData($config)" row-loader="$ctrl.loadRow($row)" page-size="25">
  <oui-column property="firstName" sortable="asc"></oui-column>
  <oui-column property="lastName" sortable></oui-column>
  <oui-column title="'Mère'" property="parents.mother.lastName" sortable>
    {{$row.parents.mother.lastName}}, {{$row.parents.mother.firstName}}
  </oui-column>
  <oui-column title="'Père'" property="parents.father.lastName" sortable>
    {{$row.parents.father.lastName}}, {{$row.parents.father.firstName}}
  </oui-column>
  <oui-column property="email" sortable>
    <a href="mailto:{{$value}}">{{$ctrl.label}}: {{$value}}</a>
  </oui-column>
  <oui-column property="phone"></oui-column>
  <oui-column property="birth" sortable>
    {{$value|date:short}}
  </oui-column>
  <oui-column>
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
  </oui-column>
</oui-datagrid>

Clicked row action 1: <span ng-if="$ctrl.action1Row">{{$ctrl.action1Row.lastName}}, {{$ctrl.action1Row.firstName}}</span>
