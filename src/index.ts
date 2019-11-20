#!/usr/bin/env node

import chalk from "chalk";
import * as figlet from "figlet";
import * as minimist from "minimist";
import * as fs from "fs";
import messages from "./messages";
import commands from "./commands";

const argv = minimist(process.argv.slice(2));

type DefaultFigletConfig = {
  horizontalLayout: string;
  verticalLayout: string;
};

const figletConfigs: DefaultFigletConfig = {
  horizontalLayout: "default",
  verticalLayout: "default"
};

const packageName: string = <string>figlet.textSync("DRAB", figletConfigs);

console.log(chalk.magenta(packageName));

// console.log(DRAB_CONFIG)

// console.log(chalk.white(messages.welcome));

commands(argv);
