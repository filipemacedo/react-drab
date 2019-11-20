export declare const helpCreate: Function;
declare type HookCreateType = {
    help: boolean;
};
/**
 *
 * @param help
 */
export declare const create: ({ help }: HookCreateType) => Promise<any>;
declare const _default: {
    create: ({ help }: HookCreateType) => Promise<any>;
};
export default _default;
