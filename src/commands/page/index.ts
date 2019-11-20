import pageActions from "./page.action";
import verifyIfIsCommand from "../../helpers/verify-if-is-command";

export default verifyIfIsCommand({
  actions: pageActions,
  commands: ["create", "page"]
});
