import { CommandTerminatedType, argvType } from "../commands.type";
import { finished, notFinished } from "../../helpers/command-terminated";
import { isCommand } from "../../helpers/is-command";
import serviceActions from "./service.action";

export default (args: argvType): CommandTerminatedType => {
  const { _, help, init } = <argvType>args;

  const isCommandWithArgs: Function = isCommand(_);

  const isCreateService: boolean = isCommandWithArgs(["create", "service"]);

  if (isCreateService) {
    serviceActions.create({ help, init });

    return finished();
  }

  return notFinished();
};
