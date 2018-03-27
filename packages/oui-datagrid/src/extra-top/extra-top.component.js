import controller from "./extra-top.controller";

export default {
    controller,
    require: {
        datagridCtrl: "^^ouiDatagrid"
    }
};
