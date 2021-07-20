"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hideShareMenu = exports.showShareMenu = void 0;
function showShareMenu() {
    return my.showSharePanel();
}
exports.showShareMenu = showShareMenu;
function hideShareMenu(...args) {
    return my.hideShareMenu(...args);
}
exports.hideShareMenu = hideShareMenu;
