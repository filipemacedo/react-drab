import { ComponentFileType, ComponentType } from "../../types/files.type";
import { getComponentDirPath } from "../../helpers/config";
import { spaceToPascalCase } from "../../helpers/string-cases";
import { createReactComponent } from "../../helpers/files";

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
