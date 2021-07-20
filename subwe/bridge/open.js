"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chooseAddress = exports.getSetting = exports.openSetting = exports.getUserInfo = exports.getPhoneNumber = exports.login = exports.checkSession = exports.reportAnalytics = exports.navigateBackMiniProgram = exports.navigateToMiniProgram = void 0;
const util_1 = require("./util");
function navigateToMiniProgram({ appId, path, extraData, envVersion, success, fail, complete, }) {
    return my.navigateToMiniProgram({
        appId,
        path,
        extraData,
        success,
        fail,
        complete,
    });
}
exports.navigateToMiniProgram = navigateToMiniProgram;
function navigateBackMiniProgram({ extraData, success, fail, complete }) {
    return my.navigateBackMiniProgram({ extraData, success, fail, complete });
}
exports.navigateBackMiniProgram = navigateBackMiniProgram;
// TODO requestPayment authorize
function reportAnalytics(eventName, data) {
    return my.reportAnalytics(eventName, data);
}
exports.reportAnalytics = reportAnalytics;
// 支付宝端无 checkSession 这种机制
function checkSession() {
    // do nothing
}
exports.checkSession = checkSession;
// 微信端的 openid 对应支付宝端的 user_id，前提是需要 code 去换
function login(args) {
    return my.getAuthCode({
        scopes: ['auth_base'],
        success: ({ authCode }) => {
            if (args.success) {
                args.success({
                    code: authCode,
                    errMsg: 'login:ok',
                });
            }
        },
        fail: (e) => {
            if (args.fail) {
                args.fail(e);
            }
        },
        complete: (res) => {
            if (args.complete) {
                if (res.authCode) {
                    args.complete({
                        errMsg: 'login:ok',
                        code: res.authCode,
                    });
                }
                else {
                    args.complete(res);
                }
            }
        },
    });
}
exports.login = login;
// 微信无 getPhoneNumber
function getPhoneNumber({ success, fail, complete }) {
    return my.getPhoneNumber({
        success: (res) => {
            if (success) {
                let encryptedData = '';
                try {
                    encryptedData = JSON.parse(res.response).response;
                }
                catch (e) {
                    if (fail) {
                        fail(e);
                    }
                }
                success({
                    encryptedData,
                    iv: '',
                    errMsg: 'getPhoneNumber:ok',
                });
            }
        },
        fail: (e) => {
            console.log('getPhoneNumber', e);
            fail && fail(e);
        },
    });
}
exports.getPhoneNumber = getPhoneNumber;
function getUserInfo({ withCredentials, success, fail, complete }) {
    return my.getOpenUserInfo({
        success: (res) => {
            let userInfo = {};
            try {
                userInfo = JSON.parse(res.response).response;
                if (+userInfo.code !== 10000) {
                    throw new Error(userInfo.subMsg);
                }
            }
            catch (e) {
                if (fail)
                    fail(e);
            }
            if (success) {
                const info = {
                    avatarUrl: userInfo.avatar,
                    city: userInfo.city,
                    country: userInfo.countryCode,
                    gender: userInfo.gender === 'm' ? 1 : 2,
                    nickName: userInfo.nickName,
                    province: userInfo.province,
                    language: 'zh_CN',
                };
                success(util_1.makeProxy({
                    errMsg: 'getUserInfo:ok',
                    rawData: JSON.stringify(info),
                    userInfo: info,
                }, {}, 'getUserInfo'));
            }
        },
        fail: (e) => {
            console.log('getUserInfo', e);
            fail && fail(e);
        },
        complete,
    });
}
exports.getUserInfo = getUserInfo;
function openSetting({ withSubscriptions, success, fail, complete }) {
    return my.openSetting({
        success: ({ authSetting }) => {
            if (success) {
                const settings = {};
                const keyMap = {
                    userInfo: 'scope.userInfo',
                    location: 'scope.userLocation',
                    album: 'scope.writePhotosAlbum',
                    camera: 'scope.camera',
                };
                for (let key in authSetting) {
                    if (authSetting[key]) {
                        if (keyMap[key]) {
                            settings[keyMap[key]] = authSetting[key];
                        }
                    }
                }
                success(util_1.makeProxy({
                    authSetting: settings,
                }, {}, 'openSetting'));
            }
        },
        fail: (e) => {
            console.log('openSetting', e);
            fail && fail(e);
        },
        complete,
    });
}
exports.openSetting = openSetting;
function getSetting({ withSubscriptions, success, fail, complete }) {
    return my.getSetting({
        success,
        fail,
        complete,
    });
}
exports.getSetting = getSetting;
function chooseAddress({ success, fail, complete }) {
    return my.getAddress({
        success: ({ result }) => {
            if (success) {
                success({
                    userName: result.fullname,
                    postalCode: '',
                    provinceName: result.prov,
                    cityName: result.city,
                    countyName: result.area,
                    detailInfo: result.street,
                    nationalCode: result.country,
                    telNumber: result.mobilePhone,
                });
            }
        },
        fail,
        complete,
    });
}
exports.chooseAddress = chooseAddress;
