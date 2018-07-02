import Progress from "./progress.component.js";
import ProgressThreshold from "./threshold/progress-threshold.component.js";

angular.module("oui.progress", [])
    .component("ouiProgress", Progress)
    .component("ouiProgressThreshold", ProgressThreshold);
