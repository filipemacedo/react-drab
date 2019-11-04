import { CommandTerminatedType, argvType } from "../../types/commands.type";
import { finished, notFinished } from "../../helpers/command-terminated";
import { isCommand } from "../../helpers/is-command";
import pageActions from "./page.action";

export default (args: argvType): CommandTerminatedType => {
  const { _, help } = <argvType>args;

  const isCommandWithArgs: Function = isCommand(_);

  const isCreatePage: boolean = isCommandWithArgs(["create", "page"]);

  if (isCreatePage) {
    pageActions.create({ help });

    return finished();
  }

  return notFinished();
};
