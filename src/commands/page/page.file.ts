import { ComponentFileType, ComponentType } from '../../types/files.type';
import { getPageDirPath } from '../../helpers/config';
import { spaceToPascalCase } from '../../helpers/string-cases';
import { createReactComponent } from '../../helpers/files';

export const createPage = ({ platform, name, type, theme }: ComponentFileType & ComponentType) => {
	const dirPath: string = `${getPageDirPath()}/${spaceToPascalCase(name)}`;

	return createReactComponent({
		platform,
		name,
		type,
		theme,
		dirPath,
	});
};
