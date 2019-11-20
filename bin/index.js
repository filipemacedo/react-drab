#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = require("chalk");
var figlet = require("figlet");
var minimist = require("minimist");
var commands_1 = require("./commands");
var argv = minimist(process.argv.slice(2));
var figletConfigs = {
    horizontalLayout: "default",
    verticalLayout: "default"
};
var packageName = figlet.textSync("DRAB", figletConfigs);
console.log(chalk_1.default.magenta(packageName));
// console.log(DRAB_CONFIG)
// console.log(chalk.white(messages.welcome));
commands_1.default(argv);
