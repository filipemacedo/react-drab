import { createQuestions } from "./component.questions";
import { config } from "../../helpers/config";
import {
  createComponentDirIfNotExists,
} from "../../helpers/files";
import { createComponent } from "./component.file";

export const helpCreate: Function = () => {};
export const helpCopy: Function = () => {};

/**
 *
 * @param help
 */
export const create = async ({ help, fileName }): Promise<void> => {
  if (help) return helpCreate();

  const { name, theme, type } = await createQuestions(fileName);

  const definedName: string = fileName || name;

  createComponentDirIfNotExists();
  createComponent({ name: definedName, type, theme });
};

export const copy: Function = ({ help }) => {
  if (help) return helpCreate();
};

export default {
  create,
  copy
};
