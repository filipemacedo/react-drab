import { readTemplateFile } from "../../helpers/files";
import * as fs from "fs";
import { getExtension, getServiceDirPath } from "../../helpers/config";
import { kebabCase, camelCase } from "../../helpers/string-cases";

type CreateServiceType = {
  name: string;
  endpoint: string;
  verbs: string[];
};

type CreateBaseType = {
  host: string;
};

export const createBase = ({ host }: CreateBaseType) => {
  const baseTemplateFile: string = readTemplateFile({
    file: "api.js",
    from: "services"
  });

  let baseFile: string = baseTemplateFile.replace(/\{host\}/g, `'${host}'`);

  return fs.writeFileSync(
    `${getServiceDirPath()}/api.${getExtension()}`,
    baseFile
  );
};

const createFunctionsOfVerb = (name: string) => (
  file: string,
  verb: string
): string => {
  const verbLowerCase: string = verb.toLowerCase();
  const nameLowerCase: string = name.toLowerCase();

  const verbTemplateFile: string = readTemplateFile({
    file: `${verbLowerCase}.js`,
    from: "services"
  });

  const verbReplaced: string = verbTemplateFile.replace(
    /\{serviceNameLowerCase\}/g,
    camelCase(nameLowerCase)
  );

  return `${file}\n\n${verbReplaced}`;
};

export const createService = ({ name, endpoint, verbs }: CreateServiceType) => {
  const serviceTemplateFile: string = readTemplateFile({
    file: "service.js",
    from: "services"
  });

  const nameKebabCase: string = kebabCase(name);

  let serviceFile: string = serviceTemplateFile.replace(
    /\{endpoint\}/g,
    endpoint
  );

  serviceFile = <string>verbs.reduce(createFunctionsOfVerb(name), serviceFile);

  return fs.writeFileSync(
    `${getServiceDirPath()}/${nameKebabCase.toLowerCase()}.service.${getExtension()}`,
    `${serviceFile}\n`
  );
};
