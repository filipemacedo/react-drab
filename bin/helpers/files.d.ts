import { TemplateFileType } from "../types/files.type";
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
export declare const createReactComponent: ({ name, type, theme, dirPath }: {
    name: any;
    type: any;
    theme: any;
    dirPath: any;
}) => void;
