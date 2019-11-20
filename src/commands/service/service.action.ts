import { createQuestions, initQuestions } from "./service.questions";
import { createServiceDirIfNotExists } from "../../helpers/files";
import { createBase, createService } from "./service.files";

export const helpCreate: Function = () => {};

/**
 *
 */
const isInit = async () => {
  const { host } = await initQuestions();

  return createBase({ host });
};

/**
 *
 * @param help
 */
export const create = async ({ help, init, fileName }) => {
  if (help) return helpCreate();

  createServiceDirIfNotExists();

  if (init) return isInit();

  const { name, endpoint, verbs } = await createQuestions(fileName);

  const definedName = fileName || name;

  return createService({ name: definedName, endpoint, verbs });
};

export default {
  create
};
