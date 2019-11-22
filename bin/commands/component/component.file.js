"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../../helpers/config");
var string_cases_1 = require("../../helpers/string-cases");
var files_1 = require("../../helpers/files");
/**
 *
 * @param name
 * @param type
 */
exports.createComponent = function (_a) {
    var name = _a.name, type = _a.type, theme = _a.theme;
    var dirPath = config_1.getComponentDirPath() + "/" + string_cases_1.spaceToPascalCase(name, true);
    return files_1.createReactComponent({
        name: name,
        type: type,
        theme: theme,
        dirPath: dirPath
    });
};
