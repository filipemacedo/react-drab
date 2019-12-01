import * as fs from 'fs';
import {
	getComponentDirPath,
	getExtension,
	getPageDirPath,
	getServiceDirPath,
	getHookDirPath,
} from './config';
import defineComponentStyles from './define-component-styles';
import {
	TemplateFileType,
	CreateStyleFileType,
	ComponentFileType,
	ComponentType,
} from '../types/files.type';
import { kebabCase, pascalCase, spaceToPascalCase } from './string-cases';

const templatePath = `${__dirname}/../templates`;

export const createDirIfNotExists = (path: string) => {
	const [rootDir, ...directories] = path.split('/');

	return directories.reduce((previous, current) => {
		const createPath = `${previous}/${current}`;

		if (!fs.existsSync(createPath)) {
			fs.mkdirSync(createPath);
		}

		return createPath;
	}, rootDir);
};

/**
 *
 * @param param0
 */
export const readTemplateFile = ({ from, file }: TemplateFileType) =>
	fs.readFileSync(`${templatePath}/${from}/${file}`, 'utf-8');

/**
 *
 */
export const createComponentDirIfNotExists = () => createDirIfNotExists(getComponentDirPath());

/**
 *
 */
export const createPageDirIfNotExists = () => createDirIfNotExists(getPageDirPath());

/**
 *
 */
export const createServiceDirIfNotExists = () => createDirIfNotExists(getServiceDirPath());

export const createHookDirIfNotExists = () => createDirIfNotExists(getHookDirPath());

/**
 *
 * @param param0
 */
const createStyleComponentFile = ({
	platform,
	name,
	path,
	theme,
}: CreateStyleFileType & ComponentFileType) => {
	const nameKebabCase = kebabCase(name);

	if (theme === 'css' || theme === 'scss')
		return fs.writeFileSync(`${path}/${nameKebabCase}.${theme}`, '');

	const styledFile = <string>readTemplateFile({
		file: 'styled.js',
		from: `components/${platform}`,
	});

	return fs.writeFileSync(`${path}/${nameKebabCase}.styles.${getExtension()}`, styledFile);
};

export const createReactComponent = ({ platform, name, type, theme, dirPath }) => {
	const componentFilePath: string = `${dirPath}/index.${getExtension()}`;

	createDirIfNotExists(dirPath);

	const typeFile: string = readTemplateFile({
		file: `${type}.js`,
		from: `components/${platform}`,
	});

	let replacedFile: string = typeFile.replace(/\{componentName\}/g, spaceToPascalCase(name));

	replacedFile = <string>(
		defineComponentStyles({ platform, theme, file: replacedFile, name: kebabCase(name) })
	);

	if (theme !== 'none') createStyleComponentFile({ platform, name, path: dirPath, theme });

	return fs.writeFileSync(componentFilePath, replacedFile);
};
