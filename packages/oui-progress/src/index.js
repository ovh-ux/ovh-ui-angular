import Progress from "./progress.component.js";
import ProgressBar from "./progress-bar.component.js";
import ProgressThreshold from "./progress-threshold.component.js";

angular.module("oui.progress", [])
    .component("ouiProgress", Progress)
    .component("ouiProgressBar", ProgressBar)
    .component("ouiProgressThreshold", ProgressThreshold);
