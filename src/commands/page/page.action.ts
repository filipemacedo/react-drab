import { createQuestions } from "./page.questions";
import { config } from "../../helpers/config";
import {
  createPageDirIfNotExists,
  createPage
} from "../../helpers/files";

export const helpCreate: Function = () => {};

/**
 *
 * @param help
 */
export const create = async ({ help }) => {
  if (help) return helpCreate();

  const { name, theme, type } = await createQuestions();

  createPageDirIfNotExists();
  createPage({ name, type, theme });
};

export default {
  create
};
