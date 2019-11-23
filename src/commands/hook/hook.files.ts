import { readTemplateFile } from "../../helpers/files";
import * as fs from "fs";
import { getExtension, getHookDirPath } from "../../helpers/config";
import {
  kebabCase,
  spaceToPascalCase,
  transformFirstLetterToUpperCase
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

  const firstLetterOfHookName = transformFirstLetterToUpperCase(
    namePascalCase,
    true
  );

  const definedHookName = namePascalCase.includes("use")
    ? namePascalCase
    : `use${firstLetterOfHookName}${namePascalCase.slice(1)}`;

  let hookFile: string = hookTemplateFile.replace(
    /\{hookName\}/g,
    definedHookName
  );

  const fileNameWithoutUse = nameKebabCase
    .toLocaleLowerCase()
    .replace("use-", "");

  return fs.writeFileSync(
    `${getHookDirPath()}/${fileNameWithoutUse}.hook.${getExtension()}`,
    hookFile
  );
};
