type ConfigType = {
  extension: "js" | "ts";
  components: string;
  services: string;
  pages: string;
};

const dir: string = process.cwd();

export const config: ConfigType = require(`${dir}/drab.json`);

/**
 *
 */
export const getComponentDirPath: Function = (): string =>
  `${dir}/${config.components}`;

/**
 *
 */
export const getPageDirPath: Function = (): string => `${dir}/${config.pages}`;

/**
 *
 */
export const getServiceDirPath: Function = (): string =>
  `${dir}/${config.services}`;

export const getExtension: Function = (): string => config.extension || "js";
