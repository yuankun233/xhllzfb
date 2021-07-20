"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearStorage = exports.clearStorageSync = exports.getStorageInfo = exports.getStorageInfoSync = exports.getStorage = exports.getStorageSync = exports.removeStorage = exports.setStorage = exports.removeStorageSync = exports.setStorageSync = void 0;
function setStorageSync(key, data) {
    return my.setStorageSync({ key, data });
}
exports.setStorageSync = setStorageSync;
function removeStorageSync(key) {
    return my.removeStorageSync({ key });
}
exports.removeStorageSync = removeStorageSync;
function setStorage({ key, data, success, fail, complete }) {
    return my.setStorage({ key, data, success, fail, complete });
}
exports.setStorage = setStorage;
function removeStorage({ key, success, fail, complete }) {
    return my.removeStorage({ key, success, fail, complete });
}
exports.removeStorage = removeStorage;
function getStorageSync(key) {
    const res = my.getStorageSync({ key });
    if (res.data) {
        if (res.message === '查无此key') {
            return '';
        }
        return res.data;
    }
    else {
        return '';
    }
}
exports.getStorageSync = getStorageSync;
function getStorage(options = {}) {
    my.getStorage({
        key: options.key,
        success: (res) => {
            if (res.message === '查无此key' || !res.data) {
                options.fail &&
                    options.fail({
                        errMsg: 'getStorage:fail data not found',
                    });
            }
            else {
                options.success && options.success(res);
            }
        },
        fail: (res) => {
            options.fail && options.fail(res);
        },
        complete: (res) => {
            options.complete && options.complete(res);
        },
    });
}
exports.getStorage = getStorage;
function getStorageInfoSync() {
    return my.getStorageInfoSync();
}
exports.getStorageInfoSync = getStorageInfoSync;
function getStorageInfo({ success, fail, complete }) {
    return my.getStorageInfo({ success, fail, complete });
}
exports.getStorageInfo = getStorageInfo;
function clearStorageSync() {
    return my.clearStorageSync();
}
exports.clearStorageSync = clearStorageSync;
function clearStorage(...args) {
    return my.clearStorage(...args);
}
exports.clearStorage = clearStorage;
