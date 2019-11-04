import help from "./help";
import {
  argvType,
  CommandTerminatedType,
  CommandsFunctionType
} from "./commands.type";
import component from "./component";
import page from "./page";
import service from "./service";
import hook from "./hook";

const commands: CommandsFunctionType[] = [help, component, page, service, hook];

export default (argv: argvType) => {
  for (let command of commands) {
    const { done } = <CommandTerminatedType>command(argv);

    if (done) break;
  }
};
