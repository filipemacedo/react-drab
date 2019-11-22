"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (_a) {
    var theme = _a.theme, file = _a.file, name = _a.name;
    var nameLowerCase = name.toLowerCase();
    var pattern = /\/\/.+\'\.\/styles\';/g;
    if (theme === "none")
        return file.replace(pattern, "");
    if (theme === "css" || theme === "scss")
        return file.replace(pattern, "import './" + nameLowerCase + "." + theme + "';");
    return file
        .replace(pattern, "import { Container } from './" + nameLowerCase + ".styles'")
        .replace(/<div \/>/g, "<Container />")
        .replace(/<div><\/div>/g, "<Container></Container>");
});
