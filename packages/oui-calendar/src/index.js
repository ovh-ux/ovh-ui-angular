import Calendar from "./calendar.component.js";
import CalendarProvider from "./calendar.provider";

angular
    .module("oui.calendar", [])
    .component("ouiCalendar", Calendar)
    .provider("ouiCalendarConfiguration", CalendarProvider);
