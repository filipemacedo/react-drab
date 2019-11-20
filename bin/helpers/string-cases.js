"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pascalCase = function (completeText, currentText) {
    var firstLetter = currentText[0];
    if (currentText.length === 1)
        return completeText;
    return "" + completeText + firstLetter.toUpperCase() + currentText
        .toLowerCase()
        .slice(1);
};
exports.spaceToPascalCase = function (text) {
    var nameSplit = text.trim().split(" ");
    return nameSplit.reduce(exports.pascalCase, "");
};
exports.kebabCase = function (text) { return text.trim().replace(/ /g, "-"); };
exports.camelCase = function (text) {
    var _a = text.trim().split(" "), first = _a[0], others = _a.slice(1);
    return others.reduce(exports.pascalCase, first);
};
