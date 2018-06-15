import Calendar from "./calendar.component.js";
import CalendarProvider from "./calendar.provider";

export default angular
    .module("oui.calendar", [])
    .component("ouiCalendar", Calendar)
    .provider("ouiCalendarConfiguration", CalendarProvider)
    .name;
