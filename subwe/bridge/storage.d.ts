export declare function setStorageSync(key: any, data: any): any;
export declare function removeStorageSync(key: any): any;
export declare function setStorage({ key, data, success, fail, complete }: {
    key: any;
    data: any;
    success: any;
    fail: any;
    complete: any;
}): any;
export declare function removeStorage({ key, success, fail, complete }: {
    key: any;
    success: any;
    fail: any;
    complete: any;
}): any;
export declare function getStorageSync(key: any): any;
export declare function getStorage(options?: any): void;
export declare function getStorageInfoSync(): any;
export declare function getStorageInfo({ success, fail, complete }: {
    success: any;
    fail: any;
    complete: any;
}): any;
export declare function clearStorageSync(): any;
export declare function clearStorage(...args: any[]): any;
