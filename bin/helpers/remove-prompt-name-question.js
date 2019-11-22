"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (hasName, questions) {
    if (questions === void 0) { questions = []; }
    if (hasName)
        return questions.filter(function (_a) {
            var name = _a.name;
            return name !== "name";
        });
    return questions;
});
