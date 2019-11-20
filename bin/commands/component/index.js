"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var command_terminated_1 = require("../../helpers/command-terminated");
var is_command_1 = require("../../helpers/is-command");
var component_action_1 = require("./component.action");
exports.default = (function (args) {
    var _a = args, _ = _a._, help = _a.help;
    var isCommandWithArgs = is_command_1.isCommand(_);
    var isCreateComponent = isCommandWithArgs(["create", "component"]);
    var isCopyComponent = isCommandWithArgs(["copy", "component"]);
    if (isCreateComponent) {
        component_action_1.default.create({ help: help });
        return command_terminated_1.finished();
    }
    return command_terminated_1.notFinished();
});
