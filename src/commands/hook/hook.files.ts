import { readTemplateFile } from "../../helpers/files";
import * as fs from "fs";
import { getExtension, getHookDirPath } from "../../helpers/config";
import {
  kebabCase,
  spaceToPascalCase
} from "../../helpers/string-cases";

type CreateHookType = {
  name: string;
};

export const createHook = ({ name }: CreateHookType) => {
  const nameKebabCase: string = kebabCase(name);
  const namePascalCase: string = spaceToPascalCase(name);

  const hookTemplateFile: string = readTemplateFile({
    from: "hooks",
    file: "hooks.js"
  });

  let hookFile: string = hookTemplateFile.replace(
    /\{hookName\}/g,
    namePascalCase
  );

  return fs.writeFileSync(
    `${getHookDirPath()}/${nameKebabCase.toLowerCase()}.hook.${getExtension()}`,
    hookFile
  );
};
