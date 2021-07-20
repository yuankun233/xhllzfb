"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bridge_1 = __importDefault(require("./bridge"));
function getBehavior(behaviors) {
    const objectList = ['data', 'properties', 'methods', 'lifetimes', 'pageLifetimes', 'behaviors'];
    const functionList = ['created', 'attached', 'ready', 'moved', 'detached', 'error'];
    function merge(a, b) {
        const obj = {};
        objectList.forEach((item) => {
            if (a[item] || b[item]) {
                obj[item] = {
                    ...a[item],
                    ...b[item],
                };
            }
        });
        functionList.forEach((item) => {
            if (b[item]) {
                obj[item] = b[item];
            }
        });
        return obj;
    }
    let obj = {};
    function get(config = {}) {
        const { behaviors = [], ...rest } = config;
        let obj = {
            ...rest,
        };
        behaviors.forEach((behavior) => {
            obj = merge(get(behavior), obj);
        });
        return obj;
    }
    behaviors.forEach((behavior) => {
        obj = merge(get(behavior), obj);
    });
    const { methods = {} } = obj;
    delete obj.methods;
    return { ...methods, ...obj };
}
function WXPage(config) {
    if (!config.createSelectorQuery) {
        config.createSelectorQuery = bridge_1.default.createSelectorQuery;
    }
    config.__subweSaveRef__ = function (ref) {
        if (!this.__subwe_refs__) {
            this.__subwe_refs__ = [];
        }
        this.__subwe_refs__.push({
            className: ref.props.className
                ? ref.props.className
                    .trim()
                    .split(/\s+/)
                    .map((item) => `.${item}`)
                : [],
            id: ref.props.id ? `#${ref.props.id.trim()}` : '',
            instance: ref,
        });
    };
    config.selectComponent = function (selector) {
        if (!this.__subwe_refs__) {
            return null;
        }
        if (selector.indexOf('.') > -1) {
            // 小程序引擎支持 Array.find
            const ref = this.__subwe_refs__.find((ref) => ref.className.includes(selector));
            if (ref) {
                return ref.instance;
            }
        }
        if (selector.indexOf('#') > -1) {
            const ref = this.__subwe_refs__.find((ref) => ref.id === selector);
            if (ref) {
                return ref.instance;
            }
        }
        console.warn('目前只支持 class 或 id 选择器，或没有找到组件实例');
        return null;
    };
    let obj = config;
    if (obj.behaviors) {
        obj = { ...getBehavior(obj.behaviors), ...obj };
    }
    Page(obj);
}
exports.default = WXPage;
