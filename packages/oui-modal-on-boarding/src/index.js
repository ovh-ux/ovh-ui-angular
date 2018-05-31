import ModalOnBoarding from "./modal-on-boarding.component";
import ModalOnBoardingPanel from "./modal-on-boarding-panel.component";

angular.module("oui.modal-on-boarding", [])
    .component("ouiModalOnBoarding", ModalOnBoarding)
    .component("ouiModalOnBoardingPanel", ModalOnBoardingPanel);
