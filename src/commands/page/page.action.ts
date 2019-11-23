import { createQuestions } from "./page.questions";
import { createPageDirIfNotExists } from "../../helpers/files";
import { createPage } from "./page.file";

export const helpCreate: Function = () => {};

/**
 *
 * @param help
 */
export const create = async ({ help, fileName }) => {
  if (help) return helpCreate();

  const { name, theme, type } = await createQuestions(fileName);

  const [definedType] = type.split(" ");
  const definedName = fileName || name;

  createPageDirIfNotExists();
  createPage({ name: definedName, type: definedType, theme });
};

export default {
  create
};
