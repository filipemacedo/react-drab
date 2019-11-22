"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var files_1 = require("../../helpers/files");
var fs = require("fs");
var config_1 = require("../../helpers/config");
var string_cases_1 = require("../../helpers/string-cases");
exports.createHook = function (_a) {
    var name = _a.name;
    var nameKebabCase = string_cases_1.kebabCase(name);
    var namePascalCase = string_cases_1.spaceToPascalCase(name);
    var hookTemplateFile = files_1.readTemplateFile({
        from: "hooks",
        file: "hooks.js"
    });
    var firstLetterOfHookName = string_cases_1.transformFirstLetterToUpperCase(namePascalCase, true);
    console.log(firstLetterOfHookName);
    var definedHookName = namePascalCase.includes("use")
        ? namePascalCase
        : "use" + firstLetterOfHookName + namePascalCase.slice(1);
    var hookFile = hookTemplateFile.replace(/\{hookName\}/g, definedHookName);
    var fileNameWithoutUse = nameKebabCase
        .toLocaleLowerCase()
        .replace("use-", "");
    return fs.writeFileSync(config_1.getHookDirPath() + "/" + fileNameWithoutUse + ".hook." + config_1.getExtension(), hookFile);
};
