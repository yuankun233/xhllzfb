"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chooseLocation = exports.getLocation = exports.openLocation = void 0;
const util_1 = require("./util");
function openLocation({ latitude, longitude, scale, name, address, success, fail, complete, }) {
    return my.openLocation({
        latitude,
        longitude,
        name,
        address,
        scale,
        success,
        fail,
        complete,
    });
}
exports.openLocation = openLocation;
function getLocation({ type, altitude, isHighAccuracy, highAccuracyExpireTime, success, fail, complete, }) {
    return my.getLocation({
        success: (res) => {
            if (success) {
                success(util_1.makeProxy(res, {}, 'getLocation'));
            }
        },
        fail,
        complete,
    });
}
exports.getLocation = getLocation;
function chooseLocation({ latitude, longitude, success, fail, complete }) {
    return my.chooseLocation({
        success: (res) => {
            if (success) {
                success(util_1.makeProxy(res, {}, 'chooseLocation'));
            }
        },
        fail,
        complete,
    });
}
exports.chooseLocation = chooseLocation;
