"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMenuButtonBoundingClientRect = exports.offAppHide = exports.onAppHide = exports.offAppShow = exports.onAppShow = exports.offAudioInterruptionBegin = exports.onAudioInterruptionBegin = exports.offAudioInterruptionEnd = exports.onAudioInterruptionEnd = exports.offError = exports.onError = exports.offUnhandledRejection = exports.onUnhandledRejection = exports.getLaunchOptionsSync = exports.getUpdateManager = exports.updateWeChatApp = exports.getSystemInfoAsync = exports.getSystemInfoSync = exports.getSystemInfo = exports.canIUse = void 0;
const definitions_1 = require("./definitions");
const util_1 = require("./util");
function canIUse(params) {
    return my.canIUse(params);
}
exports.canIUse = canIUse;
function getSystemInfo({ success, fail, complete }) {
    return my.getSystemInfo({
        success: (res) => {
            if (success) {
                success(util_1.makeProxy({
                    ...res,
                    theme: 'light',
                    SDKVersion: my.SDKVersion,
                    safeArea: {
                        bottom: res.screenHeight,
                        height: res.screenHeight - res.statusBarHeight,
                        left: 0,
                        right: res.screenWidth,
                        top: res.statusBarHeight,
                        width: res.screenWidth,
                    },
                }, definitions_1.BASIC.getSystemInfo, 'getSystemInfo'));
            }
        },
        fail,
        complete,
    });
}
exports.getSystemInfo = getSystemInfo;
function getSystemInfoSync() {
    const res = my.getSystemInfoSync();
    return util_1.makeProxy({
        ...res,
        theme: 'light',
        SDKVersion: my.SDKVersion,
        safeArea: {
            bottom: res.screenHeight,
            height: res.screenHeight - res.statusBarHeight,
            left: 0,
            right: res.screenWidth,
            top: res.statusBarHeight,
            width: res.screenWidth,
        },
    }, definitions_1.BASIC.getSystemInfo, 'getSystemInfoSync');
}
exports.getSystemInfoSync = getSystemInfoSync;
function getSystemInfoAsync({ success, fail, complete }) {
    return my.getSystemInfo({
        success: (res) => {
            if (success) {
                success(util_1.makeProxy({
                    ...res,
                    theme: 'light',
                    SDKVersion: my.SDKVersion,
                    safeArea: {
                        bottom: res.screenHeight,
                        height: res.screenHeight - res.statusBarHeight,
                        left: 0,
                        right: res.screenWidth,
                        top: res.statusBarHeight,
                        width: res.screenWidth,
                    },
                }, definitions_1.BASIC.getSystemInfo, 'getSystemInfoAsync'));
            }
        },
        fail,
        complete,
    });
}
exports.getSystemInfoAsync = getSystemInfoAsync;
function updateWeChatApp({ success, fail, complete }) {
    return my.ap.updateAlipayClient({ success, fail, complete });
}
exports.updateWeChatApp = updateWeChatApp;
function getUpdateManager() {
    return my.getUpdateManager();
}
exports.getUpdateManager = getUpdateManager;
function getLaunchOptionsSync() {
    const res = my.getLaunchOptionsSync();
    return util_1.makeProxy(res, {}, 'getLaunchOptionsSync');
}
exports.getLaunchOptionsSync = getLaunchOptionsSync;
function onUnhandledRejection(...args) {
    return my.onUnhandledRejection(...args);
}
exports.onUnhandledRejection = onUnhandledRejection;
function offUnhandledRejection(...args) {
    return my.offUnhandledRejection(...args);
}
exports.offUnhandledRejection = offUnhandledRejection;
function onError(...args) {
    return my.onError(...args);
}
exports.onError = onError;
function offError(...args) {
    return my.offError(...args);
}
exports.offError = offError;
function onAudioInterruptionEnd(...args) {
    return my.onAudioInterruptionEnd(...args);
}
exports.onAudioInterruptionEnd = onAudioInterruptionEnd;
function offAudioInterruptionEnd(...args) {
    return my.offAudioInterruptionEnd(...args);
}
exports.offAudioInterruptionEnd = offAudioInterruptionEnd;
function onAudioInterruptionBegin(...args) {
    return my.onAudioInterruptionBegin(...args);
}
exports.onAudioInterruptionBegin = onAudioInterruptionBegin;
function offAudioInterruptionBegin(...args) {
    return my.offAudioInterruptionBegin(...args);
}
exports.offAudioInterruptionBegin = offAudioInterruptionBegin;
function onAppShow(...args) {
    return my.onAppShow(...args);
}
exports.onAppShow = onAppShow;
function offAppShow(...args) {
    return my.offAppShow(...args);
}
exports.offAppShow = offAppShow;
function onAppHide(...args) {
    return my.onAppHide(...args);
}
exports.onAppHide = onAppHide;
function offAppHide(...args) {
    return my.offAppHide(...args);
}
exports.offAppHide = offAppHide;
// fake
function getMenuButtonBoundingClientRect() {
    return {
        bottom: 56,
        height: 32,
        left: 278,
        right: 365,
        top: 24,
        width: 87,
    };
}
exports.getMenuButtonBoundingClientRect = getMenuButtonBoundingClientRect;
