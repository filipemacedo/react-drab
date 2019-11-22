/**
 * This function is responsible for
 * transform first letter to upper case
 * and return complete text
 *
 * @param text
 * @param isOnlyFirst
 */
export declare const transformFirstLetterToUpperCase: (text: any, isOnlyFirst?: boolean) => string;
/**
 * This function is responsible for
 * transform text to pascal case
 *
 * @param completeText
 * @param currentText
 */
export declare const pascalCase: (completeText: string, currentText: any) => string;
/**
 * This function is responsible for split
 * space on string and transform to pascal case
 *
 * @param text
 */
export declare const spaceToPascalCase: (text: string, forcePascal?: boolean) => string;
/**
 * This function is responsible for split space
 * and return kebab text
 *
 * @param text
 */
export declare const kebabCase: (text: any) => any;
export declare const camelCase: (text: any) => any;
