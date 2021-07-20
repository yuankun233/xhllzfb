export declare function navigateToMiniProgram({ appId, path, extraData, envVersion, success, fail, complete, }: {
    appId: any;
    path: any;
    extraData: any;
    envVersion: any;
    success: any;
    fail: any;
    complete: any;
}): any;
export declare function navigateBackMiniProgram({ extraData, success, fail, complete }: {
    extraData: any;
    success: any;
    fail: any;
    complete: any;
}): any;
export declare function reportAnalytics(eventName: any, data: any): any;
export declare function checkSession(): void;
export declare function login(args: any): any;
export declare function getPhoneNumber({ success, fail, complete }: {
    success: any;
    fail: any;
    complete: any;
}): any;
export declare function getUserInfo({ withCredentials, success, fail, complete }: {
    withCredentials: any;
    success: any;
    fail: any;
    complete: any;
}): any;
export declare function openSetting({ withSubscriptions, success, fail, complete }: {
    withSubscriptions: any;
    success: any;
    fail: any;
    complete: any;
}): any;
export declare function getSetting({ withSubscriptions, success, fail, complete }: {
    withSubscriptions: any;
    success: any;
    fail: any;
    complete: any;
}): any;
export declare function chooseAddress({ success, fail, complete }: {
    success: any;
    fail: any;
    complete: any;
}): any;
