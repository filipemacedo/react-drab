"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (words) {
    return words.reduce(function (p, c) {
        var isCapital = c.match(/[A-Z]/);
        if (!p.length)
            return c;
        return isCapital ? p + "-" + c : "" + p + c;
    }, "");
});
