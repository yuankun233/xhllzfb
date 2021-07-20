"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIntersectionObserver = exports.createSelectorQuery = void 0;
const util_1 = require("./util");
function createSelectorQuery() {
    const res = my.createSelectorQuery();
    return util_1.makeProxy(res, {}, 'createSelectorQuery');
}
exports.createSelectorQuery = createSelectorQuery;
function createIntersectionObserver() {
    const res = my.createIntersectionObserver();
    return util_1.makeProxy(res, {}, 'createIntersectionObserver');
}
exports.createIntersectionObserver = createIntersectionObserver;
