import Progress from "./progress.component.js";
import ProgressBar from "./bar/progress-bar.component.js";
import ProgressThreshold from "./threshold/progress-threshold.component.js";

angular.module("oui.progress", [])
    .component("ouiProgress", Progress)
    .component("ouiProgressBar", ProgressBar)
    .component("ouiProgressThreshold", ProgressThreshold);
