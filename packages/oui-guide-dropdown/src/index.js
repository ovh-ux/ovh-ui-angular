import Guide from "./guide.component.js";
import GuideBody from "./guide-body.component.js";
import GuideFooter from "./guide-footer.component.js";
import GuideProvider from "./guide.provider";
import GuideSection from "./guide-section.component.js";

angular.module("oui.guide", ["ngAria"])
    .component("ouiGuide", Guide)
    .component("ouiGuideBody", GuideBody)
    .component("ouiGuideSection", GuideSection)
    .component("ouiGuideFooter", GuideFooter)
    .provider("ouiGuideConfiguration", GuideProvider);
