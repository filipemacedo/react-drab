import applyKebabWhenUpperCase from "./apply-kebab-when-upper-case";

/**
 * This function is responsible for
 * transform first letter to upper case
 * and return complete text
 *
 * @param text
 * @param isOnlyFirst
 */
export const transformFirstLetterToUpperCase = (
  text: any,
  isOnlyFirst: boolean = false
): string => {
  const [firstLetter, ...othersLetters] = text;

  const firstLetterDefined: string = firstLetter.toUpperCase();

  if (isOnlyFirst) return firstLetterDefined;

  return `${firstLetterDefined}${othersLetters.toLowerCase()}`;
};

/**
 * This function is responsible for
 * transform text to pascal case
 *
 * @param completeText
 * @param currentText
 */
export const pascalCase = (completeText: string, currentText: any): string => {
  if (currentText.length === 1) return completeText;

  const text = transformFirstLetterToUpperCase(currentText);

  return `${completeText}${text}`;
};

/**
 * This function is responsible for split
 * space on string and transform to pascal case
 *
 * @param text
 */
export const spaceToPascalCase = (text: string, forcePascal = false) => {
  let nameSplit: string[] = text.trim().split(" ");

  if (nameSplit.length > 1 || forcePascal)
    return nameSplit.reduce(pascalCase, "");

  return text;
};

/**
 * This function is responsible for split space
 * and return kebab text
 *
 * @param text
 */
export const kebabCase = text => {
  let textSplit = text.trim().split(" ");

  if (textSplit.length > 1) return textSplit.join("-");

  textSplit = text.split(/([A-Z])/g);
  textSplit = applyKebabWhenUpperCase(textSplit);

  return textSplit.toLowerCase();
};

export const camelCase = text => {
  const [first, ...others] = text.trim().split(" ");

  return others.reduce(pascalCase, first);
};
