export const pascalCase = (completeText: string, currentText: any): string => {
  const [firstLetter] = currentText;

  if (currentText.length === 1) return completeText;

  return `${completeText}${firstLetter.toUpperCase()}${currentText
    .toLowerCase()
    .slice(1)}`;
};

export const spaceToPascalCase = text => {
  const nameSplit: string[] = text.trim().split(" ");

  return nameSplit.reduce(pascalCase, "");
};

export const kebabCase = text => text.trim().replace(/ /g, "-");
export const camelCase = text => {
  const [first, ...others] = text.trim().split(" ");

  return others.reduce(pascalCase, first);
};
