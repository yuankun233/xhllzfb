"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeProxy = void 0;
function convert(data, definition) {
    if (Object.keys(definition).length === 0 || typeof data !== 'object') {
        return;
    }
    if (Array.isArray(data)) {
        data.forEach((item) => convert(item, definition));
    }
    else {
        Object.keys(data).forEach((key) => {
            if (definition[key]) {
                if (typeof definition[key] === 'string') {
                    data[definition[key]] = data[key];
                    delete data[key];
                }
                else if (typeof definition[key] === 'object' && definition[key].__type__ === 'array') {
                    Object.keys(definition[key]).forEach((subKey) => {
                        if (subKey === '__type__') {
                            return;
                        }
                        if (typeof definition[key][subKey] === 'string') {
                            data[key].forEach((item) => {
                                item[definition[key][subKey]] = item[subKey];
                                delete item[subKey];
                            });
                        }
                        else {
                            data[key].forEach((item) => {
                                convert(item[subKey], definition[key][subKey]);
                            });
                        }
                    });
                }
                else if (typeof definition[key] === 'object') {
                    convert(data[key], definition[key]);
                }
            }
        });
    }
}
function makeProxy(data, definition, name) {
    if (!data) {
        data = {};
    }
    convert(data, definition);
    if (process.env.NODE_ENV === 'development') {
        const handler = {
            get: function (obj, prop) {
                if (prop in obj) {
                    return obj[prop];
                }
                else {
                    console.warn(`${name} 返回值 ${prop} 在支付宝端不支持`);
                }
            },
        };
        const p = new Proxy(data, handler);
        return p;
    }
    else {
        return data;
    }
}
exports.makeProxy = makeProxy;
