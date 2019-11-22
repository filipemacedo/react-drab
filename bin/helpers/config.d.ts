declare type ConfigType = {
    extension: "js" | "ts";
    components: string;
    services: string;
    hooks: string;
    pages: string;
};
export declare const config: ConfigType;
/**
 *
 */
export declare const getComponentDirPath: Function;
/**
 *
 */
export declare const getPageDirPath: Function;
/**
 *
 */
export declare const getServiceDirPath: Function;
export declare const getHookDirPath: Function;
export declare const getExtension: Function;
export {};
