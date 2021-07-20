"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExtConfigSync = exports.getExtConfig = void 0;
function getExtConfig({ success, fail, complete }) {
    return my.getExtConfig({
        success: ({ data }) => {
            if (success) {
                success({
                    extConfig: data,
                });
            }
        },
    });
}
exports.getExtConfig = getExtConfig;
function getExtConfigSync() {
    return my.getExtConfigSync();
}
exports.getExtConfigSync = getExtConfigSync;
