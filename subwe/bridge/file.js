"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFileInfo = exports.getSavedFileInfo = exports.openDocument = exports.removeSavedFile = exports.saveFile = exports.getSavedFileList = void 0;
const definitions_1 = require("./definitions");
const util_1 = require("./util");
function getSavedFileList({ success, fail, complete }) {
    return my.getSavedFileList({
        success: (res) => {
            if (success) {
                success(util_1.makeProxy(res, definitions_1.FILE.getSavedFileList, 'getSavedFileList'));
            }
        },
        fail,
        complete,
    });
}
exports.getSavedFileList = getSavedFileList;
function saveFile({ tempFilePath, success, fail, complete }) {
    return my.saveFile({
        apFilePath: tempFilePath,
        success: ({ apFilePath }) => {
            if (success) {
                success({
                    savedFilePath: apFilePath,
                });
            }
        },
        fail,
        complete,
    });
}
exports.saveFile = saveFile;
function removeSavedFile({ filePath, success, fail, complete }) {
    return my.removeSavedFile({
        apFilePath: filePath,
        success,
        fail,
        complete,
    });
}
exports.removeSavedFile = removeSavedFile;
function openDocument({ filePath, showMenu, fileType, success, fail, complete }) {
    return my.openDocument({
        filePath,
        fileType,
        success,
        fail,
        complete,
    });
}
exports.openDocument = openDocument;
function getSavedFileInfo({ filePath, success, fail, complete }) {
    return my.getSavedFileInfo({
        apFilePath: filePath,
        success,
        fail,
        complete,
    });
}
exports.getSavedFileInfo = getSavedFileInfo;
function getFileInfo({ filePath, digestAlgorithm, success, fail, complete }) {
    return my.getFileInfo({
        apFilePath: filePath,
        digestAlgorithm,
        success,
        fail,
        complete,
    });
}
exports.getFileInfo = getFileInfo;
