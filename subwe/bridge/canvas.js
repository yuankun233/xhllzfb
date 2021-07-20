"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canvasGetImageData = exports.canvasPutImageData = exports.canvasToTempFilePath = exports.createCanvasContext = void 0;
const util_1 = require("./util");
function createCanvasContext(canvasId) {
    const res = my.createCanvasContext(canvasId);
    return util_1.makeProxy(res, {}, 'createCanvasContext');
}
exports.createCanvasContext = createCanvasContext;
function canvasToTempFilePath(obj = {}) {
    const context = my.createCanvasContext(obj.canvasId);
    context.toTempFilePath({
        ...obj,
        success(res) {
            res.tempFilePath = res.apFilePath;
            delete res.apFilePath;
            res.errMsg = 'canvasToTempFilePath:ok';
            obj.success && obj.success(res);
        },
    });
}
exports.canvasToTempFilePath = canvasToTempFilePath;
function canvasPutImageData(obj = {}) {
    const context = my.createCanvasContext(obj.canvasId);
    context.putImageData({
        ...obj,
        success(res) {
            obj.success && obj.success(res);
        },
    });
}
exports.canvasPutImageData = canvasPutImageData;
function canvasGetImageData(obj = {}) {
    const context = my.createCanvasContext(obj.canvasId);
    context.getImageData({
        ...obj,
        success(res) {
            obj.success && obj.success(res);
        },
    });
}
exports.canvasGetImageData = canvasGetImageData;
