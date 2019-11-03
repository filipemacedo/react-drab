import * as fs from "fs";
import { getComponentDirPath, getExtension } from "./config";
import defineComponentStyles from "./define-component-styles";
import {
  TemplateFileType,
  CreateStyleFileType,
  ComponentFileType,
  ComponentType
} from "../types/files.type";

const templatePath = `${__dirname}/../templates`;

export const createDirIfNotExists = (path: string) => {
  if (fs.existsSync(path)) return;

  return fs.mkdirSync(path);
};

/**
 *
 * @param param0
 */
export const readTemplateFile = ({ from, file }: TemplateFileType) =>
  fs.readFileSync(`${templatePath}/${from}/${file}`, "utf-8");

/**
 *
 */
export const createComponentDirIfNotExists = () =>
  createDirIfNotExists(getComponentDirPath());

/**
 *
 * @param param0
 */
const createStyleComponentFile = ({
  name,
  path,
  theme
}: CreateStyleFileType & ComponentFileType) => {
  const nameLowerCase = <string>name.toLowerCase();

  if (theme === "css")
    return fs.writeFileSync(`${path}/${nameLowerCase}.css`, "");

  const styledFile = <string>readTemplateFile({
    file: "styled.js",
    from: "components"
  });

  return fs.writeFileSync(
    `${path}/${nameLowerCase}.styles.${getExtension()}`,
    styledFile
  );
};

/**
 *
 * @param name
 * @param type
 */
export const createComponent = ({
  name,
  type,
  theme
}: ComponentFileType & ComponentType) => {
  const componentDirPath: string = `${getComponentDirPath()}/${name}`;
  const componentFilePath: string = `${componentDirPath}/index.${getExtension()}`;

  createDirIfNotExists(componentDirPath);

  const typeFile: string = readTemplateFile({ file: `${type}.js`, from: "components" });

  let replacedFile: string = typeFile.replace(/\{componentName\}/g, name);

  replacedFile = <string>defineComponentStyles({ theme, file: replacedFile, name });

  if (theme !== "none")
    createStyleComponentFile({ name, path: componentDirPath, theme });

  return fs.writeFileSync(componentFilePath, replacedFile);
};
