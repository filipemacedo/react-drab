import {
  CommandTerminatedType,
  argvType
} from "../commands.type";
import { finished, notFinished } from "../../helpers/command-terminated";
import helpAction from "./help.action";

export default (args: argvType): CommandTerminatedType => {
  const { _, help } = <argvType>args;

  if (!_.length && help) {
    helpAction();
    
    return finished();
  }

  return notFinished();
};
