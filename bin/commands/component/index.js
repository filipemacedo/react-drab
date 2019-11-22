"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_action_1 = require("./component.action");
var verify_if_is_command_1 = require("../../helpers/verify-if-is-command");
exports.default = verify_if_is_command_1.default({
    actions: component_action_1.default,
    commands: ["create", "component"]
});
