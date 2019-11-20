export declare type TemplateFileType = {
    file: string;
    from: string;
};
export declare type CreateStyleFileType = {
    path: string;
};
export declare type ComponentType = {
    type: string;
};
export declare type ComponentFileType = {
    name: string;
    theme: "css" | "styled-components" | "none" | "scss";
    file?: string;
};
