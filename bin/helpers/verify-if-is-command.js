"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var command_terminated_1 = require("./command-terminated");
var is_command_1 = require("./is-command");
exports.default = (function (_a) {
    var actions = _a.actions, commands = _a.commands;
    return function (args) {
        var _a = args, _ = _a._, help = _a.help, name = _a.name, props = __rest(_a, ["_", "help", "name"]);
        var isCommandWithArgs = is_command_1.isCommand(_);
        var isDefinedCommand = isCommandWithArgs(commands);
        if (isDefinedCommand) {
            actions.create(__assign({ help: help, fileName: name || _[2] }, props));
            return command_terminated_1.finished();
        }
        return command_terminated_1.notFinished();
    };
});
