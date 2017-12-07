import controller from "./cell.controller";

export default {
    controller,
    require: {
        datagridCtrl: "^ouiTable"
    },
    bindings: {
        row: "<",
        column: "<"
    }
};
