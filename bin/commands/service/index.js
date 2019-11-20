"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var command_terminated_1 = require("../../helpers/command-terminated");
var is_command_1 = require("../../helpers/is-command");
var service_action_1 = require("./service.action");
exports.default = (function (args) {
    var _a = args, _ = _a._, help = _a.help, init = _a.init;
    var isCommandWithArgs = is_command_1.isCommand(_);
    var isCreateService = isCommandWithArgs(["create", "service"]);
    if (isCreateService) {
        service_action_1.default.create({ help: help, init: init });
        return command_terminated_1.finished();
    }
    return command_terminated_1.notFinished();
});
