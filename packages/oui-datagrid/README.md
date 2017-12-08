# Datagrid

<component-status cx-design="complete" ux="prototype"></component-status>

## Usage

### General case

Local

<oui-table
  rows="$ctrl.data"
  page-size="25">
  <column property="firstName" sortable="asc"></column>
  <column property="lastName" sortable></column>
  <column title="'Mère'" property="parents.mother.lastName" sortable>
    {{$row.parents.mother.lastName}}, {{$row.parents.mother.firstName}}
  </column>
  <column title="'Père'" property="parents.father.lastName" sortable>
    {{$row.parents.father.lastName}}, {{$row.parents.father.firstName}}
  </column>
  <column property="email" sortable>
    <a href="mailto:{{$value}}">{{$ctrl.label}}: {{$value}}</a>
  </column>
  <column property="phone"></column>
  <column property="birth" sortable>
    {{$value|date:short}}
  </column>
</oui-table>

Remote data + on-the-fly loading

<oui-table
  rows-loader="$ctrl.loadPartialData($config)"
  row-loader="$ctrl.loadRow($row)"
  page-size="25">
  <column property="firstName" sortable="asc"></column>
  <column property="lastName" sortable></column>
  <column title="'Mère'" property="parents.mother.lastName" sortable>
    {{$row.parents.mother.lastName}}, {{$row.parents.mother.firstName}}
  </column>
  <column title="'Père'" property="parents.father.lastName" sortable>
    {{$row.parents.father.lastName}}, {{$row.parents.father.firstName}}
  </column>
  <column property="email" sortable>
    <a href="mailto:{{$value}}">{{$ctrl.label}}: {{$value}}</a>
  </column>
  <column property="phone"></column>
  <column property="birth" sortable>
    {{$value|date:short}}
  </column>
</oui-table>
