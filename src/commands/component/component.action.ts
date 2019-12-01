import { createQuestions } from './component.questions';
import { createComponentDirIfNotExists } from '../../helpers/files';
import { createComponent } from './component.file';

export const helpCreate: Function = () => {};
export const helpCopy: Function = () => {};

/**
 *
 * @param help
 */
export const create = async ({ help, native, fileName }): Promise<void> => {
	if (help) return helpCreate();

	const platform = native ? 'react-native' : 'react';

	const { name, theme, type } = await createQuestions(fileName);

	const [definedType] = type.split(' ');
	const definedName: string = fileName || name;

	createComponentDirIfNotExists();
	createComponent({ platform, name: definedName, type: definedType, theme });
};

export default {
	create,
};
