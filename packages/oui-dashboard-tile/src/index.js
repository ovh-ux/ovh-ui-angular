import DashboardTile from "./dashboard-tile.component.js";
import DashboardTileButton from "./dashboard-tile-button.component.js";
import DashboardTileDivider from "./dashboard-tile-divider.component.js";
import DashboardTileItem from "./dashboard-tile-item.component.js";
import DashboardTileItemContainer from "./dashboard-tile-item-container.component.js";

angular.module("oui.dashboard-tile", [])
    .component("ouiDashboardTile", DashboardTile)
    .component("ouiDashboardTileDivider", DashboardTileDivider)
    .component("ouiDashboardTileItem", DashboardTileItem)
    .component("ouiDashboardTileItemContainer", DashboardTileItemContainer)
    .component("ouiDashboardTileButton", DashboardTileButton);
