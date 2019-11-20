import { createQuestions } from "./hook.questions";
import { config } from "../../helpers/config";
import { createHookDirIfNotExists } from "../../helpers/files";
import { createHook } from "./hook.files";

export const helpCreate: Function = () => {};

type HookCreateType = {
  help: boolean;
  fileName?: string;
};

/**
 *
 * @param help
 */
export const create = async ({ help, fileName }: HookCreateType) => {
  if (help) return helpCreate();

  createHookDirIfNotExists();

  const { name } = await createQuestions(fileName);

  const definedName: string = fileName || name;

  return createHook({ name: definedName });
};

export default {
  create
};
