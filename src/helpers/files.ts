import * as fs from "fs";
import {
  getComponentDirPath,
  getExtension,
  getPageDirPath,
  getServiceDirPath,
  getHookDirPath
} from "./config";
import defineComponentStyles from "./define-component-styles";
import {
  TemplateFileType,
  CreateStyleFileType,
  ComponentFileType,
  ComponentType
} from "../types/files.type";
import { kebabCase, pascalCase, spaceToPascalCase } from "./string-cases";

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
 */
export const createPageDirIfNotExists = () =>
  createDirIfNotExists(getPageDirPath());

/**
 *
 */
export const createServiceDirIfNotExists = () =>
  createDirIfNotExists(getServiceDirPath());

export const createHookDirIfNotExists = () =>
  createDirIfNotExists(getHookDirPath());

/**
 *
 * @param param0
 */
const createStyleComponentFile = ({
  name,
  path,
  theme
}: CreateStyleFileType & ComponentFileType) => {
  const nameKebabCase = kebabCase(name);

  if (theme === "css" || theme === "scss")
    return fs.writeFileSync(`${path}/${nameKebabCase}.${theme}`, "");

  const styledFile = <string>readTemplateFile({
    file: "styled.js",
    from: "components"
  });

  return fs.writeFileSync(
    `${path}/${nameKebabCase}.styles.${getExtension()}`,
    styledFile
  );
};

const createReactComponent = ({ name, type, theme, dirPath }) => {
  const componentFilePath: string = `${dirPath}/index.${getExtension()}`;

  createDirIfNotExists(dirPath);

  const typeFile: string = readTemplateFile({
    file: `${type}.js`,
    from: "components"
  });

  let replacedFile: string = typeFile.replace(
    /\{componentName\}/g,
    spaceToPascalCase(name, true)
  );

  replacedFile = <string>(
    defineComponentStyles({ theme, file: replacedFile, name: kebabCase(name) })
  );

  if (theme !== "none")
    createStyleComponentFile({ name, path: dirPath, theme });

  return fs.writeFileSync(componentFilePath, replacedFile);
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
  const dirPath: string = `${getComponentDirPath()}/${spaceToPascalCase(
    name,
    true
  )}`;

  return createReactComponent({
    name,
    type,
    theme,
    dirPath
  });
};

export const createPage = ({
  name,
  type,
  theme
}: ComponentFileType & ComponentType) => {
  const dirPath: string = `${getPageDirPath()}/${spaceToPascalCase(
    name,
    true
  )}`;

  return createReactComponent({
    name,
    type,
    theme,
    dirPath
  });
};
