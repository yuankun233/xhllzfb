"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWXComponent = void 0;
const bridge_1 = __importDefault(require("./bridge"));
function hyphen2CamelCase(str) {
    if (str.length === 0 || str.indexOf('-') < 0)
        return str;
    return str.replace(/-([a-z])/g, (m) => m[1].toUpperCase());
}
function getVal(val) {
    if (val === String) {
        return '';
    }
    if (val === Object) {
        return null;
    }
    if (val === Number) {
        return 0;
    }
    if (val === Boolean) {
        return false;
    }
    if (val === Array) {
        return [];
    }
    return '';
}
function getConfig(config) {
    const objectList = ['data', 'properties', 'methods', 'lifetimes', 'pageLifetimes', 'props'];
    const functionList = [
        'created',
        'attached',
        'ready',
        'moved',
        'detached',
        'error',
        'onInit',
        'didMount',
        'didUpdate',
        'deriveDataFromProps',
        'didUnmount',
    ];
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
    function get(config = {}) {
        const { behaviors = [], mixins = [], ...rest } = config;
        let obj = {
            ...rest,
        };
        behaviors.forEach((behavior) => {
            obj = merge(get(behavior), obj);
        });
        mixins.forEach((mixin) => {
            obj = merge(get(mixin), obj);
        });
        return obj;
    }
    return get(config);
}
function getWXComponent(cfg) {
    const config = getConfig(cfg);
    const { data = {}, properties = {}, methods = {}, lifetimes = {}, pageLifetimes = {}, created, attached, ready, moved, detached, error, onInit, didMount, didUpdate, deriveDataFromProps, didUnmount, } = config;
    const real_created = lifetimes.created || created;
    const real_attached = lifetimes.attached || attached;
    const real_ready = lifetimes.ready || ready;
    const real_moved = lifetimes.moved || moved;
    const real_detached = lifetimes.detached || detached;
    const real_error = lifetimes.error || error;
    const observerMap = {};
    Object.keys(properties).forEach((key) => {
        const val = properties[key] || {};
        if (typeof val.type === 'undefined') {
            data[key] = getVal(val);
            return;
        }
        if (typeof val.observer !== 'undefined') {
            observerMap[key] = val.observer;
        }
        if (typeof val.value !== 'undefined') {
            data[key] = JSON.parse(JSON.stringify(val.value));
        }
        else {
            data[key] = getVal(val.type);
        }
    });
    const hook_methods = {};
    Object.keys(methods).forEach((key) => {
        hook_methods[key] = function (...args) {
            if (real_error) {
                try {
                    return methods[key].call(this, ...args);
                }
                catch (err) {
                    real_error.call(this, err);
                }
            }
            else {
                return methods[key].call(this, ...args);
            }
        };
    });
    hook_methods.__subweSaveRef__ = function (ref) {
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
    function hook_deriveDataFromProps(nextProps) {
        const props = this.props;
        const obj = {};
        Object.keys(this.properties).forEach((key) => {
            if (!nextProps.hasOwnProperty(key)) {
                return;
            }
            if (this.__$update) {
                if (nextProps[key] !== props[key]) {
                    obj[key] = nextProps[key];
                }
            }
            else {
                obj[key] = nextProps[key];
            }
        });
        if (Object.keys(obj).length > 0) {
            this.__setData(obj, () => {
                this.properties = this.data;
            });
            Object.keys(observerMap).forEach((key) => {
                if (obj.hasOwnProperty(key)) {
                    const newVal = obj[key];
                    const prevVal = this.__$update ? props[key] : data[key];
                    if (newVal !== prevVal) {
                        this.data[key] = newVal;
                        typeof observerMap[key] === 'function' && observerMap[key].call(this, newVal, prevVal);
                        if (typeof observerMap[key] === 'string' &&
                            typeof methods[observerMap[key]] === 'function') {
                            methods[observerMap[key]].call(this, newVal, prevVal);
                        }
                    }
                }
            });
        }
        this.__$update = true;
        if (deriveDataFromProps) {
            deriveDataFromProps.call(this, nextProps);
        }
    }
    function hook_onInit() {
        this.__setData = this.setData;
        this.properties = this.data;
        this.setData = function (data, cb) {
            const prevData = this.data;
            this.__setData(data, cb);
            Object.keys(observerMap).forEach((key) => {
                if (data.hasOwnProperty(key)) {
                    const newVal = data[key];
                    const prevVal = prevData[key];
                    if (newVal !== prevVal) {
                        this.data[key] = newVal;
                        typeof observerMap[key] === 'function' && observerMap[key].call(this, newVal, prevVal);
                        if (typeof observerMap[key] === 'string' &&
                            typeof methods[observerMap[key]] === 'function') {
                            methods[observerMap[key]].call(this, newVal, prevVal);
                        }
                    }
                }
            });
        };
        this.selectComponent = function (selector) {
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
        this.createSelectorQuery = bridge_1.default.createSelectorQuery;
        this.triggerEvent = function (type, detail) {
            const name = hyphen2CamelCase(`on-${type}`);
            if (typeof this.props[name] !== 'function') {
                return;
            }
            const e = {
                type,
                timeStamp: Math.floor(Math.random() * 90000 + 10000),
                target: {
                    dataset: {},
                },
                currentTarget: {
                    dataset: {},
                },
                mark: {},
                detail,
                touches: undefined,
                changedTouches: undefined,
                mut: false,
                _requireActive: undefined,
            };
            Object.keys(this.props).forEach((prop) => {
                if (prop.match(/^data-/)) {
                    let originProp = prop;
                    prop = prop.replace(/[A-Z]/g, function ($) {
                        return $.toLowerCase();
                    });
                    prop = prop.split('-');
                    prop.shift();
                    prop = prop.join('');
                    e.target.dataset[prop] = this.props[originProp];
                    e.currentTarget.dataset[prop] = this.props[originProp];
                }
            });
            setTimeout(() => this.props[name](e), 0);
        };
        if (real_created) {
            real_created.call(this);
        }
        if (onInit) {
            onInit.call(this);
        }
    }
    function hook_didMount() {
        if (real_attached) {
            real_attached.call(this);
        }
        if (real_ready) {
            real_ready.call(this);
        }
        if (didMount) {
            didMount.call(this);
        }
    }
    function hook_didUpdate(prevProps, prevData) {
        if (didUpdate) {
            didUpdate.call(this, prevProps, prevData);
        }
    }
    function hook_didUnmount() {
        if (real_detached) {
            real_detached.call(this);
        }
        if (didUnmount) {
            didUnmount.call(this);
        }
    }
    return {
        ...config,
        methods: hook_methods,
        deriveDataFromProps: hook_deriveDataFromProps,
        data,
        onInit: hook_onInit,
        didMount: hook_didMount,
        didUpdate: hook_didUpdate,
        didUnmount: hook_didUnmount,
    };
}
exports.getWXComponent = getWXComponent;
function WXComponent(config) {
    const obj = getWXComponent(config);
    Component(obj);
}
exports.default = WXComponent;
