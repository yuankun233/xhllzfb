export declare function addPhoneContact({ weChatNumber, ...args }: {
    [x: string]: any;
    weChatNumber: any;
}): any;
export declare function getBatteryInfoSync(...args: any[]): any;
export declare function getBatteryInfo(...args: any[]): any;
export declare function onNetworkStatusChange(...args: any[]): any;
export declare function offNetworkStatusChange(...args: any[]): any;
export declare function getNetworkType(...args: any[]): any;
export declare function setScreenBrightness({ value, success, fail, complete }: {
    value: any;
    success: any;
    fail: any;
    complete: any;
}): any;
export declare function setKeepScreenOn(...args: any[]): any;
export declare function onUserCaptureScreen(...args: any[]): any;
export declare function offUserCaptureScreen(...args: any[]): any;
export declare function getScreenBrightness({ success, fail, complete }: {
    success: any;
    fail: any;
    complete: any;
}): any;
export declare function makePhoneCall({ phoneNumber, success, fail, complete }: {
    phoneNumber: any;
    success: any;
    fail: any;
    complete: any;
}): any;
export declare function offAccelerometerChange(...args: any[]): any;
export declare function onAccelerometerChange(...args: any[]): any;
export declare function onCompassChange(...args: any[]): any;
export declare function offCompassChange(...args: any[]): any;
export declare function onGyroscopeChange(...args: any[]): any;
export declare function offGyroscopeChange(...args: any[]): any;
export declare function onMemoryWarning(...args: any[]): any;
export declare function offMemoryWarning(...args: any[]): any;
export declare function scanCode({ onlyFromCamera, scanType, success, fail, complete }: {
    onlyFromCamera: any;
    scanType: any;
    success: any;
    fail: any;
    complete: any;
}): any;
export declare function vibrateShort(...args: any[]): any;
export declare function vibrateLong(...args: any[]): any;
