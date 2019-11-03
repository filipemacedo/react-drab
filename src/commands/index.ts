import help from "./help";
import {
  argvType,
  CommandTerminatedType,
  CommandsFunctionType
} from "./commands.type";
import component from "./component";
import page from "./page";

const commands: CommandsFunctionType[] = [help, component, page];

export default (argv: argvType) => {
  for (let command of commands) {
    const { done } = <CommandTerminatedType>command(argv);

    if (done) break;
  }
};
