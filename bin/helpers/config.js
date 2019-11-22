"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dir = process.cwd();
exports.config = require(dir + "/drab.json");
/**
 *
 */
exports.getComponentDirPath = function () {
    return dir + "/" + exports.config.components;
};
/**
 *
 */
exports.getPageDirPath = function () { return dir + "/" + exports.config.pages; };
/**
 *
 */
exports.getServiceDirPath = function () {
    return dir + "/" + exports.config.services;
};
exports.getHookDirPath = function () { return dir + "/" + exports.config.hooks; };
exports.getExtension = function () { return exports.config.extension || "js"; };
