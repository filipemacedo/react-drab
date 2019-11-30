export type TemplateFileType = {
	file: string;
	from: string;
};

export type CreateStyleFileType = {
	path: string;
};

export type ComponentType = {
	type: string;
};

export type ComponentFileType = {
	name: string;
	theme: 'css' | 'styled-components' | 'none' | 'scss';
	file?: string;
};
