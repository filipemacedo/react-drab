declare type CreateServiceType = {
    name: string;
    endpoint: string;
    verbs: string[];
};
declare type CreateBaseType = {
    host: string;
};
export declare const createBase: ({ host }: CreateBaseType) => void;
export declare const createService: ({ name, endpoint, verbs }: CreateServiceType) => void;
export {};
