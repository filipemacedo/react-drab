export declare const helpCreate: Function;
declare type HookCreateType = {
    help: boolean;
    fileName?: string;
};
/**
 *
 * @param help
 */
export declare const create: ({ help, fileName }: HookCreateType) => Promise<any>;
declare const _default: {
    create: ({ help, fileName }: HookCreateType) => Promise<any>;
};
export default _default;
