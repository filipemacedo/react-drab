import help from "./help";
import {
  argvType,
  CommandTerminatedType,
  CommandsFunctionType
} from "./commands.type";
import component from "./component";

const commands: CommandsFunctionType[] = [help, component];

export default (argv: argvType) => {
  for (let command of commands) {
    const { done } = <CommandTerminatedType>command(argv);

    if (done) break;
  }
};
