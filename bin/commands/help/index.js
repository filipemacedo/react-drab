"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var command_terminated_1 = require("../../helpers/command-terminated");
var help_action_1 = require("./help.action");
exports.default = (function (args) {
    var _a = args, _ = _a._, help = _a.help;
    if (!_.length && help) {
        help_action_1.default();
        return command_terminated_1.finished();
    }
    return command_terminated_1.notFinished();
});
