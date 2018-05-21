import DashboardTile from "./dashboard-tile.component.js";
import DashboardTileItem from "./dashboard-tile-item.component.js";

angular.module("oui.dashboard-tile", [])
    .component("ouiDashboardTile", DashboardTile)
    .component("ouiDashboardTileItem", DashboardTileItem);
