import { ComponentFileType } from "../types/files.type";

export default ({ theme, file, name }: ComponentFileType): string => {
  const nameLowerCase: string = name.toLowerCase();
  const pattern: RegExp = /\/\/.+;/g;

  if (theme === "none") return file.replace(pattern, "");
  if (theme === "css")
    return file.replace(pattern, `import './${nameLowerCase}.css';`);

  return file.replace(
    pattern,
    `import { Container } from './${nameLowerCase}.styles'`
  );
};
