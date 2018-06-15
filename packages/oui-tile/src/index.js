import Tile from "./tile.component.js";
import TileButton from "./button/tile-button.component.js";
import TileDefinition from "./definition/tile-definition.component.js";

export default angular
    .module("oui.tile", [])
    .component("ouiTile", Tile)
    .component("ouiTileButton", TileButton)
    .component("ouiTileDefinition", TileDefinition)
    .name;
