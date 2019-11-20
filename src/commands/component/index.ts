import componentActions from "./component.action";
import verifyIfIsCommand from "../../helpers/verify-if-is-command";

export default verifyIfIsCommand({
  actions: componentActions,
  commands: ["create", "component"]
});
