import { ComponentFileType, ComponentType } from "../../types/files.type";
import { getPageDirPath } from "../../helpers/config";
import { spaceToPascalCase } from "../../helpers/string-cases";
import { createReactComponent } from "../../helpers/files";

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
