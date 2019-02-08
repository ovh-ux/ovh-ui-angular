import Password from "./password.component";
import PasswordConfigurationProvider from "./password.provider";
import PasswordRule from "./rule/password-rule.component";
import PasswordStrength from "./strength/password-strength.component";

export default angular
    .module("oui.password", [])
    .component("ouiPassword", Password)
    .component("ouiPasswordRule", PasswordRule)
    .component("ouiPasswordStrength", PasswordStrength)
    .provider("ouiPasswordConfiguration", PasswordConfigurationProvider)
    .name;
