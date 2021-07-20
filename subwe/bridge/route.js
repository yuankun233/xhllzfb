"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.navigateBack = exports.navigateTo = exports.redirectTo = exports.reLaunch = exports.switchTab = void 0;
const util_1 = require("./util");
function switchTab({ url, success, fail, complete }) {
    return my.switchTab({ url, success, fail, complete });
}
exports.switchTab = switchTab;
function reLaunch({ url, success, fail, complete }) {
    return my.reLaunch({ url, success, fail, complete });
}
exports.reLaunch = reLaunch;
function redirectTo({ url, success, fail, complete }) {
    return my.redirectTo({ url, success, fail, complete });
}
exports.redirectTo = redirectTo;
function navigateTo({ url, success, fail, complete }) {
    return my.navigateTo({
        url,
        success: (res) => {
            if (success) {
                success(util_1.makeProxy(res, {}, 'navigateTo'));
            }
        },
        fail,
        complete,
    });
}
exports.navigateTo = navigateTo;
function navigateBack(...args) {
    return my.navigateBack(...args);
}
exports.navigateBack = navigateBack;
