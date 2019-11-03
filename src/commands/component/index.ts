import { CommandTerminatedType, argvType } from "../commands.type";
import { finished, notFinished } from "../../helpers/command-terminated";
import { isCommand } from "../../helpers/is-command";
import componentActions from "./component.action";

export default (args: argvType): CommandTerminatedType => {
  const { _, help } = <argvType>args;

  const isCommandWithArgs: Function = isCommand(_);

  const isCreateComponent: boolean = isCommandWithArgs(["create", "component"]);
  const isCopyComponent: boolean = isCommandWithArgs(["copy", "component"]);

  if (isCreateComponent) {
    componentActions.create({ help });

    return finished();
  }

  return notFinished();
};
