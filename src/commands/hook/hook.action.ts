import { createQuestions } from "./hook.questions";
import { config } from "../../helpers/config";
import { createHookDirIfNotExists } from "../../helpers/files";
import { createHook } from "./hook.files";

export const helpCreate: Function = () => {};

type HookCreateType = {
  help: boolean;
};

/**
 *
 * @param help
 */
export const create = async ({ help }: HookCreateType) => {
  if (help) return helpCreate();

  createHookDirIfNotExists();

  const { name } = await createQuestions();

  return createHook({ name });
};

export default {
  create
};
