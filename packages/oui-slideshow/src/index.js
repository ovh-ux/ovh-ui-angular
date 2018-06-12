import ModalOnBoarding from "./slideshow.component";
import ModalOnBoardingPanel from "./slideshow-panel.component";

angular.module("oui.onboarding", [])
    .component("ouiSlideshow", ModalOnBoarding)
    .component("ouiSlideshowPanel", ModalOnBoardingPanel);
