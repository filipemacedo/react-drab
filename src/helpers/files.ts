import * as fs from "fs";
import { getComponentDirPath, getExtension, getPageDirPath } from "./config";
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

export const createPageDirIfNotExists = () =>
  createDirIfNotExists(getPageDirPath());

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

const createReactComponent = ({ name, type, theme, dirPath }) => {
  const componentFilePath: string = `${dirPath}/index.${getExtension()}`;

  createDirIfNotExists(dirPath);

  const typeFile: string = readTemplateFile({
    file: `${type}.js`,
    from: "components"
  });

  let replacedFile: string = typeFile.replace(/\{componentName\}/g, name);

  replacedFile = <string>(
    defineComponentStyles({ theme, file: replacedFile, name })
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
  const dirPath: string = `${getComponentDirPath()}/${name}`;

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
  const dirPath: string = `${getPageDirPath()}/${name}`;

  return createReactComponent({
    name,
    type,
    theme,
    dirPath
  });
};
