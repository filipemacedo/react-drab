import { CommandTerminatedType, argvType } from "../../types/commands.type";
import { finished, notFinished } from "../../helpers/command-terminated";
import { isCommand } from "../../helpers/is-command";
import serviceActions from "./hook.action";

export default (args: argvType): CommandTerminatedType => {
  const { _, help } = <argvType>args;

  const isCommandWithArgs: Function = isCommand(_);

  const isCreateHook: boolean = isCommandWithArgs(["create", "hook"]);

  if (isCreateHook) {
    serviceActions.create({ help });

    return finished();
  }

  return notFinished();
};
