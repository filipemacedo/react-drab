"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var files_1 = require("../../helpers/files");
var fs = require("fs");
var config_1 = require("../../helpers/config");
var string_cases_1 = require("../../helpers/string-cases");
exports.createBase = function (_a) {
    var host = _a.host;
    var baseTemplateFile = files_1.readTemplateFile({
        file: "api.js",
        from: "services"
    });
    var baseFile = baseTemplateFile.replace(/\{host\}/g, "'" + host + "'");
    return fs.writeFileSync(config_1.getServiceDirPath() + "/api." + config_1.getExtension(), baseFile);
};
var createFunctionsOfVerb = function (name) { return function (file, verb) {
    var verbLowerCase = verb.toLowerCase();
    var nameLowerCase = name.toLowerCase();
    var verbTemplateFile = files_1.readTemplateFile({
        file: verbLowerCase + ".js",
        from: "services"
    });
    var verbReplaced = verbTemplateFile.replace(/\{serviceNameLowerCase\}/g, string_cases_1.camelCase(nameLowerCase));
    return file + "\n\n" + verbReplaced;
}; };
exports.createService = function (_a) {
    var name = _a.name, endpoint = _a.endpoint, verbs = _a.verbs;
    var serviceTemplateFile = files_1.readTemplateFile({
        file: "service.js",
        from: "services"
    });
    var nameKebabCase = string_cases_1.kebabCase(name);
    var serviceFile = serviceTemplateFile.replace(/\{endpoint\}/g, endpoint);
    serviceFile = verbs.reduce(createFunctionsOfVerb(name), serviceFile);
    return fs.writeFileSync(config_1.getServiceDirPath() + "/" + nameKebabCase.toLowerCase() + ".service." + config_1.getExtension(), serviceFile + "\n");
};
