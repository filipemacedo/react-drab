"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apply_kebab_when_upper_case_1 = require("./apply-kebab-when-upper-case");
/**
 * This function is responsible for
 * transform first letter to upper case
 * and return complete text
 *
 * @param text
 * @param isOnlyFirst
 */
exports.transformFirstLetterToUpperCase = function (text, isOnlyFirst) {
    if (isOnlyFirst === void 0) { isOnlyFirst = false; }
    var firstLetter = text[0], othersLetters = text.slice(1);
    var firstLetterDefined = firstLetter.toUpperCase();
    if (isOnlyFirst)
        return firstLetterDefined;
    return "" + firstLetterDefined + othersLetters.toLowerCase();
};
/**
 * This function is responsible for
 * transform text to pascal case
 *
 * @param completeText
 * @param currentText
 */
exports.pascalCase = function (completeText, currentText) {
    if (currentText.length === 1)
        return completeText;
    var text = exports.transformFirstLetterToUpperCase(currentText);
    return "" + completeText + text;
};
/**
 * This function is responsible for split
 * space on string and transform to pascal case
 *
 * @param text
 */
exports.spaceToPascalCase = function (text, forcePascal) {
    if (forcePascal === void 0) { forcePascal = false; }
    var nameSplit = text.trim().split(" ");
    if (nameSplit.length > 1 || forcePascal)
        return nameSplit.reduce(exports.pascalCase, "");
    return text;
};
/**
 * This function is responsible for split space
 * and return kebab text
 *
 * @param text
 */
exports.kebabCase = function (text) {
    var textSplit = text.trim().split(" ");
    if (textSplit.length > 1)
        return textSplit.join("-");
    textSplit = text.split(/([A-Z])/g);
    textSplit = apply_kebab_when_upper_case_1.default(textSplit);
    return textSplit.toLowerCase();
};
exports.camelCase = function (text) {
    var _a = text.trim().split(" "), first = _a[0], others = _a.slice(1);
    return others.reduce(exports.pascalCase, first);
};
