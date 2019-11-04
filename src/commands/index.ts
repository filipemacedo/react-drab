import help from "./help";

import component from "./component";
import page from "./page";
import service from "./service";
import hook from "./hook";
import {
  argvType,
  CommandTerminatedType,
  CommandsFunctionType
} from "../types/commands.type";

const commands: CommandsFunctionType[] = [help, component, page, service, hook];

export default (argv: argvType) => {
  for (let command of commands) {
    const { done } = <CommandTerminatedType>command(argv);

    if (done) break;
  }
};
