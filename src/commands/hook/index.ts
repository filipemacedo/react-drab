import serviceActions from "./hook.action";
import verifyIfIsCommand from "../../helpers/verify-if-is-command";

export default verifyIfIsCommand({
  actions: serviceActions,
  commands: ["create", "hook"]
});
