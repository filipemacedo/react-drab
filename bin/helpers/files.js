"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var config_1 = require("./config");
var define_component_styles_1 = require("./define-component-styles");
var string_cases_1 = require("./string-cases");
var templatePath = __dirname + "/../templates";
exports.createDirIfNotExists = function (path) {
    if (fs.existsSync(path))
        return;
    return fs.mkdirSync(path);
};
/**
 *
 * @param param0
 */
exports.readTemplateFile = function (_a) {
    var from = _a.from, file = _a.file;
    return fs.readFileSync(templatePath + "/" + from + "/" + file, "utf-8");
};
/**
 *
 */
exports.createComponentDirIfNotExists = function () {
    return exports.createDirIfNotExists(config_1.getComponentDirPath());
};
/**
 *
 */
exports.createPageDirIfNotExists = function () {
    return exports.createDirIfNotExists(config_1.getPageDirPath());
};
/**
 *
 */
exports.createServiceDirIfNotExists = function () {
    return exports.createDirIfNotExists(config_1.getServiceDirPath());
};
exports.createHookDirIfNotExists = function () {
    return exports.createDirIfNotExists(config_1.getHookDirPath());
};
/**
 *
 * @param param0
 */
var createStyleComponentFile = function (_a) {
    var name = _a.name, path = _a.path, theme = _a.theme;
    var nameKebabCase = string_cases_1.kebabCase(name);
    if (theme === "css" || theme === "scss")
        return fs.writeFileSync(path + "/" + nameKebabCase + "." + theme, "");
    var styledFile = exports.readTemplateFile({
        file: "styled.js",
        from: "components"
    });
    return fs.writeFileSync(path + "/" + nameKebabCase + ".styles." + config_1.getExtension(), styledFile);
};
exports.createReactComponent = function (_a) {
    var name = _a.name, type = _a.type, theme = _a.theme, dirPath = _a.dirPath;
    var componentFilePath = dirPath + "/index." + config_1.getExtension();
    exports.createDirIfNotExists(dirPath);
    var typeFile = exports.readTemplateFile({
        file: type + ".js",
        from: "components"
    });
    var replacedFile = typeFile.replace(/\{componentName\}/g, string_cases_1.spaceToPascalCase(name, true));
    replacedFile = (define_component_styles_1.default({ theme: theme, file: replacedFile, name: string_cases_1.kebabCase(name) }));
    if (theme !== "none")
        createStyleComponentFile({ name: name, path: dirPath, theme: theme });
    return fs.writeFileSync(componentFilePath, replacedFile);
};
