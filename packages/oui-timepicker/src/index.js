import Calendar from "@ovh-ui/oui-calendar";
import Timepicker from "./timepicker.component";

export default angular
    .module("oui.timepicker", [Calendar])
    .component("ouiTimepicker", Timepicker)
    .name;
