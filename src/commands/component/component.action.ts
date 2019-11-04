import { createQuestions } from "./component.questions";
import { config } from "../../helpers/config";
import {
  createComponentDirIfNotExists,
  createComponent
} from "../../helpers/files";

export const helpCreate: Function = () => {};
export const helpCopy: Function = () => {};

/**
 *
 * @param help
 */
export const create = async ({ help }): Promise<void> => {
  if (help) return helpCreate();

  const { name, theme, type } = await createQuestions();

  createComponentDirIfNotExists();
  createComponent({ name, type, theme });
};

export const copy: Function = ({ help }) => {
  if (help) return helpCreate();
};

export default {
  create,
  copy
};
