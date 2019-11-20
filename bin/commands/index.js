"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var help_1 = require("./help");
var component_1 = require("./component");
var page_1 = require("./page");
var service_1 = require("./service");
var hook_1 = require("./hook");
var commands = [help_1.default, component_1.default, page_1.default, service_1.default, hook_1.default];
exports.default = (function (argv) {
    for (var _i = 0, commands_1 = commands; _i < commands_1.length; _i++) {
        var command = commands_1[_i];
        var done = command(argv).done;
        if (done)
            break;
    }
});
