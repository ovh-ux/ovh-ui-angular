import Slideshow from "./slideshow.component";
import SlideshowPanel from "./slideshow-panel.component";

angular.module("oui.slideshow", [])
    .component("ouiSlideshow", Slideshow)
    .component("ouiSlideshowPanel", SlideshowPanel);
