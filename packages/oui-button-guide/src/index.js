import Guide from "./guide.component.js";
import GuideBody from "./guide-body.component.js";
import GuideFooter from "./guide-footer.component.js";
import GuideSection from "./guide-section.component.js";

angular.module("oui.guide", [])
    .component("ouiGuide", Guide)
    .component("ouiGuideSection", GuideSection)
    .component("ouiGuideFooter", GuideFooter)
    .component("ouiGuideBody", GuideBody);
