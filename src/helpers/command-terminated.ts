import { CommandTerminatedType } from "../commands/commands.type";

export const finished = (): CommandTerminatedType => ({ done: true });
export const notFinished = (): CommandTerminatedType => ({ done: false });
