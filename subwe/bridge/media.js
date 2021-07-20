"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInnerAudioContext = exports.getAvailableAudioSources = exports.createVideoContext = exports.chooseImage = exports.compressImage = exports.getImageInfo = exports.previewImage = exports.createMapContext = void 0;
const util_1 = require("./util");
// 地图
function createMapContext(mapId) {
    const res = my.createMapContext(mapId);
    return util_1.makeProxy(res, {}, 'createMapContext');
}
exports.createMapContext = createMapContext;
// 图片
function previewImage({ urls, current, success, fail, complete }) {
    return my.previewImage({ urls, current, success, fail, complete });
}
exports.previewImage = previewImage;
function getImageInfo({ src, success, fail, complete }) {
    return my.getImageInfo({
        src,
        success: (res) => {
            if (success) {
                success(util_1.makeProxy(res, {}, 'getImageInfo'));
            }
        },
        fail,
        complete,
    });
}
exports.getImageInfo = getImageInfo;
function compressImage({ src, quality, success, fail, complete }) {
    let compressLevel = 4;
    if (quality < 50) {
        compressLevel = 0;
    }
    else if (quality < 80 && quality >= 50) {
        compressLevel = 1;
    }
    else if (quality < 100 && quality >= 80) {
        compressLevel = 2;
    }
    else if (quality === 100) {
        compressLevel = 3;
    }
    return my.compressImage({
        apFilePaths: [src],
        compressLevel,
        success: ({ apFilePaths }) => {
            if (success) {
                success({
                    tempFilePath: apFilePaths[0],
                });
            }
        },
        fail,
        complete,
    });
}
exports.compressImage = compressImage;
function chooseImage({ count, sizeType, sourceType, success, fail, complete }) {
    return my.chooseImage({
        count,
        sizeType,
        sourceType,
        success: ({ apFilePaths, tempFiles }) => {
            if (success) {
                success({
                    tempFilePaths: apFilePaths || [],
                    tempFiles: tempFiles || [],
                });
            }
        },
        fail,
        complete,
    });
}
exports.chooseImage = chooseImage;
// 视频
function createVideoContext(id) {
    const res = my.createVideoContext(id);
    return util_1.makeProxy(res, {}, 'createVideoContext');
}
exports.createVideoContext = createVideoContext;
// 音频
function getAvailableAudioSources({ success, fail, complete }) {
    return my.getAvailableAudioSources({
        fail,
        complete,
        success: ({ audioSources }) => {
            if (success) {
                success({ audioSources });
            }
        },
    });
}
exports.getAvailableAudioSources = getAvailableAudioSources;
function createInnerAudioContext() {
    const res = my.createInnerAudioContext();
    return util_1.makeProxy(res, {}, 'createInnerAudioContext');
}
exports.createInnerAudioContext = createInnerAudioContext;
