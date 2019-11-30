import { ComponentFileType } from '../types/files.type';

export default ({ theme, file, name }: ComponentFileType): string => {
	const nameLowerCase: string = name.toLowerCase();
	const pattern: RegExp = /\/\/.+\'\.\/styles\';/g;

	if (theme === 'none') return file.replace(pattern, '');

	if (theme === 'css' || theme === 'scss')
		return file.replace(pattern, `import './${nameLowerCase}.${theme}';`);

	return file
		.replace(pattern, `import { Container } from './${nameLowerCase}.styles'`)
		.replace(/<div \/>/g, '<Container />')
		.replace(/<div><\/div>/g, '<Container></Container>');
};
