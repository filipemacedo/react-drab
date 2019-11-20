export declare type argvType = {
    _: string[];
    [property: string]: any;
};
export declare type CommandsFunctionType = (args: argvType) => {};
export declare type CommandTerminatedType = {
    done: boolean;
};
