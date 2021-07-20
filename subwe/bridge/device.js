"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vibrateLong = exports.vibrateShort = exports.scanCode = exports.offMemoryWarning = exports.onMemoryWarning = exports.offGyroscopeChange = exports.onGyroscopeChange = exports.offCompassChange = exports.onCompassChange = exports.onAccelerometerChange = exports.offAccelerometerChange = exports.makePhoneCall = exports.getScreenBrightness = exports.offUserCaptureScreen = exports.onUserCaptureScreen = exports.setKeepScreenOn = exports.setScreenBrightness = exports.getNetworkType = exports.offNetworkStatusChange = exports.onNetworkStatusChange = exports.getBatteryInfo = exports.getBatteryInfoSync = exports.addPhoneContact = void 0;
const util_1 = require("./util");
// TODO 蓝牙相关
function addPhoneContact({ weChatNumber, ...args }) {
    return my.addPhoneContact({
        alipayAccount: weChatNumber,
        ...args,
    });
}
exports.addPhoneContact = addPhoneContact;
function getBatteryInfoSync(...args) {
    return my.getBatteryInfoSync(...args);
}
exports.getBatteryInfoSync = getBatteryInfoSync;
function getBatteryInfo(...args) {
    return my.getBatteryInfo(...args);
}
exports.getBatteryInfo = getBatteryInfo;
function onNetworkStatusChange(...args) {
    return my.onNetworkStatusChange(...args);
}
exports.onNetworkStatusChange = onNetworkStatusChange;
function offNetworkStatusChange(...args) {
    return my.offNetworkStatusChange(...args);
}
exports.offNetworkStatusChange = offNetworkStatusChange;
function getNetworkType(...args) {
    return my.getNetworkType(...args);
}
exports.getNetworkType = getNetworkType;
function setScreenBrightness({ value, success, fail, complete }) {
    return my.setScreenBrightness({
        brightness: value,
        success,
        fail,
        complete,
    });
}
exports.setScreenBrightness = setScreenBrightness;
function setKeepScreenOn(...args) {
    return my.setKeepScreenOn(...args);
}
exports.setKeepScreenOn = setKeepScreenOn;
function onUserCaptureScreen(...args) {
    return my.onUserCaptureScreen(...args);
}
exports.onUserCaptureScreen = onUserCaptureScreen;
function offUserCaptureScreen(...args) {
    return my.offUserCaptureScreen(...args);
}
exports.offUserCaptureScreen = offUserCaptureScreen;
function getScreenBrightness({ success, fail, complete }) {
    return my.getScreenBrightness({
        success: ({ brightness }) => {
            if (success) {
                success({ value: brightness });
            }
        },
        fail,
        complete,
    });
}
exports.getScreenBrightness = getScreenBrightness;
function makePhoneCall({ phoneNumber, success, fail, complete }) {
    return my.makePhoneCall({
        number: phoneNumber,
        success,
        fail,
        complete,
    });
}
exports.makePhoneCall = makePhoneCall;
function offAccelerometerChange(...args) {
    return my.offAccelerometerChange(...args);
}
exports.offAccelerometerChange = offAccelerometerChange;
function onAccelerometerChange(...args) {
    return my.onAccelerometerChange(...args);
}
exports.onAccelerometerChange = onAccelerometerChange;
function onCompassChange(...args) {
    return my.onCompassChange(...args);
}
exports.onCompassChange = onCompassChange;
function offCompassChange(...args) {
    return my.offCompassChange(...args);
}
exports.offCompassChange = offCompassChange;
function onGyroscopeChange(...args) {
    return my.onGyroscopeChange(...args);
}
exports.onGyroscopeChange = onGyroscopeChange;
function offGyroscopeChange(...args) {
    return my.offGyroscopeChange(...args);
}
exports.offGyroscopeChange = offGyroscopeChange;
function onMemoryWarning(...args) {
    return my.onMemoryWarning(...args);
}
exports.onMemoryWarning = onMemoryWarning;
function offMemoryWarning(...args) {
    return my.offMemoryWarning(...args);
}
exports.offMemoryWarning = offMemoryWarning;
function scanCode({ onlyFromCamera, scanType, success, fail, complete }) {
    const types = scanType.map((item) => {
        let type;
        if (scanType === 'barCode') {
            type = 'barCode';
        }
        else if (scanType === 'qrCode') {
            type = 'qrCode';
        }
        else if (scanType === 'datamatrix') {
            type = 'dmCode';
        }
        else if (scanType === 'pdf417') {
            type = 'pdf417Code';
        }
        return type;
    });
    return my.scan({
        scanType: types,
        hideAlbum: onlyFromCamera,
        success: ({ code, qrCode, barCode, codeType, codeContent, imageChannel, rawData }) => {
            if (success) {
                success(util_1.makeProxy({
                    result: codeContent,
                    scanType: codeType,
                    charSet: '',
                    rawData,
                }, {}, 'scan'));
            }
        },
        fail,
        complete,
    });
}
exports.scanCode = scanCode;
function vibrateShort(...args) {
    return my.vibrateShort(...args);
}
exports.vibrateShort = vibrateShort;
function vibrateLong(...args) {
    return my.vibrateLong(...args);
}
exports.vibrateLong = vibrateLong;
