type ConfigType = {
  extension: "js" | "ts";
  component: string;
};

const dir: string = process.cwd();

export const config: ConfigType = require(`${dir}/drab.json`);

export const getComponentDirPath: Function = (): string =>
  `${dir}/${config.component}`;

export const getExtension: Function = (): string => config.extension || "js";
