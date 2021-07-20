"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeSocket = exports.connectSocket = exports.onSocketClose = exports.onSocketError = exports.onSocketMessage = exports.onSocketOpen = exports.sendSocketMessage = exports.uploadFile = exports.downloadFile = exports.request = void 0;
const util_1 = require("./util");
function request({ url, data, header = {}, timeout, method, dataType, responseType, enableHttp2, enableQuic, enableCache, success, fail, complete, }) {
    const newHeader = {};
    if (header !== null && typeof header === 'object') {
        Object.keys(header).forEach((key) => {
            if (header[key] === undefined) {
                newHeader[key] = '';
            }
            else {
                newHeader[key] = header[key];
            }
        });
    }
    const res = my.request({
        url,
        headers: newHeader,
        method,
        data,
        timeout,
        dataType,
        responseType,
        success: ({ data, status, headers }) => {
            if (success) {
                success(util_1.makeProxy({ data, statusCode: status, header: headers }, {}, 'request'));
            }
        },
        fail(err) {
            const errMsg = 'request:fail abort';
            if (err.errorMessage === errMsg) {
                err = {
                    errMsg,
                };
            }
            fail && fail(err);
        },
        complete,
    });
    return util_1.makeProxy(res, {}, 'request');
}
exports.request = request;
function downloadFile({ url, header, timeout, filePath, success, fail, complete }) {
    const res = my.downloadFile({
        url,
        header,
        success: ({ apFilePath }) => {
            if (success) {
                success(util_1.makeProxy({ tempFilePath: apFilePath }, {}, 'downloadFile'));
            }
        },
        fail,
        complete,
    });
    return util_1.makeProxy(res, {}, 'downloadFile');
}
exports.downloadFile = downloadFile;
function uploadFile({ url, filePath, name, header, formData, timeout, success, fail, complete, fileType, }) {
    if (!fileType) {
        console.log('请填写 fileType，（image / video / audio）');
        return;
    }
    const res = my.uploadFile({
        url,
        filePath,
        fileName: name,
        fileType,
        header,
        formData,
        success: ({ data, statusCode, header }) => {
            if (success) {
                success({ data, statusCode });
            }
        },
        fail,
        complete,
    });
    return util_1.makeProxy(res, {}, 'uploadFile');
}
exports.uploadFile = uploadFile;
function sendSocketMessage({ data, success, fail, complete }) {
    return my.sendSocketMessage({ data, success, fail, complete });
}
exports.sendSocketMessage = sendSocketMessage;
function onSocketOpen(...args) {
    return my.onSocketOpen(...args);
}
exports.onSocketOpen = onSocketOpen;
function onSocketMessage(...args) {
    return my.onSocketMessage(...args);
}
exports.onSocketMessage = onSocketMessage;
function onSocketError(...args) {
    return my.onSocketError(...args);
}
exports.onSocketError = onSocketError;
function onSocketClose(...args) {
    return my.onSocketClose(...args);
}
exports.onSocketClose = onSocketClose;
function connectSocket({ url, header, protocols, tcpNoDelay, perMessageDeflate, timeout, success, fail, complete, }) {
    const res = my.connectSocket({
        url,
        header,
        success,
        fail,
        complete,
    });
    util_1.makeProxy(res, {}, 'connectSocket');
}
exports.connectSocket = connectSocket;
function closeSocket({ code, reason, success, fail, complete }) {
    return my.closeSocket({ success, fail, complete });
}
exports.closeSocket = closeSocket;
