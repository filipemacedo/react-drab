const fs = require("fs");

type ConfigType = {
  extension: "js" | "ts";
  components: string;
  services: string;
  hooks: string;
  pages: string;
};

const dir: string = process.cwd();
const dirWithoutConfig = `${dir}/src`;
const configPath = `${dir}/drab.json`;

const configFile =
  fs.existsSync(configPath) && fs.readFileSync(`${dir}/drab.json`, "utf8");
  
export const config: ConfigType = configFile && JSON.parse(configFile);

/**
 * This function is responsible for get component path
 */
export const getComponentDirPath: Function = (): string =>
  config ? `${dir}/${config.components}` : `${dirWithoutConfig}/components`;

/**
 * This function is responsible for get page path
 */
export const getPageDirPath: Function = (): string =>
  config ? `${dir}/${config.pages}` : `${dirWithoutConfig}/pages`;

/**
 * This function is responsible for get service path
 */
export const getServiceDirPath: Function = (): string =>
  config ? `${dir}/${config.services}` : `${dirWithoutConfig}/services`;

/**
 * This function is responsible for get hook path
 */
export const getHookDirPath: Function = (): string =>
  config ? `${dir}/${config.hooks}` : `${dirWithoutConfig}/hooks`;

export const getExtension: Function = (): string => config.extension || "js";
