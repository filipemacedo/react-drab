import { TemplateFileType, ComponentFileType, ComponentType } from "../types/files.type";
export declare const createDirIfNotExists: (path: string) => void;
/**
 *
 * @param param0
 */
export declare const readTemplateFile: ({ from, file }: TemplateFileType) => string;
/**
 *
 */
export declare const createComponentDirIfNotExists: () => void;
/**
 *
 */
export declare const createPageDirIfNotExists: () => void;
/**
 *
 */
export declare const createServiceDirIfNotExists: () => void;
export declare const createHookDirIfNotExists: () => void;
/**
 *
 * @param name
 * @param type
 */
export declare const createComponent: ({ name, type, theme }: ComponentFileType & ComponentType) => void;
export declare const createPage: ({ name, type, theme }: ComponentFileType & ComponentType) => void;
