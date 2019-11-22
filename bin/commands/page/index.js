"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var page_action_1 = require("./page.action");
var verify_if_is_command_1 = require("../../helpers/verify-if-is-command");
exports.default = verify_if_is_command_1.default({
    actions: page_action_1.default,
    commands: ["create", "page"]
});
