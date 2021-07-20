export declare function request({ url, data, header, timeout, method, dataType, responseType, enableHttp2, enableQuic, enableCache, success, fail, complete, }: {
    url: any;
    data: any;
    header?: {} | undefined;
    timeout: any;
    method: any;
    dataType: any;
    responseType: any;
    enableHttp2: any;
    enableQuic: any;
    enableCache: any;
    success: any;
    fail: any;
    complete: any;
}): any;
export declare function downloadFile({ url, header, timeout, filePath, success, fail, complete }: {
    url: any;
    header: any;
    timeout: any;
    filePath: any;
    success: any;
    fail: any;
    complete: any;
}): any;
export declare function uploadFile({ url, filePath, name, header, formData, timeout, success, fail, complete, fileType, }: {
    url: any;
    filePath: any;
    name: any;
    header: any;
    formData: any;
    timeout: any;
    success: any;
    fail: any;
    complete: any;
    fileType: any;
}): any;
export declare function sendSocketMessage({ data, success, fail, complete }: {
    data: any;
    success: any;
    fail: any;
    complete: any;
}): any;
export declare function onSocketOpen(...args: any[]): any;
export declare function onSocketMessage(...args: any[]): any;
export declare function onSocketError(...args: any[]): any;
export declare function onSocketClose(...args: any[]): any;
export declare function connectSocket({ url, header, protocols, tcpNoDelay, perMessageDeflate, timeout, success, fail, complete, }: {
    url: any;
    header: any;
    protocols: any;
    tcpNoDelay: any;
    perMessageDeflate: any;
    timeout: any;
    success: any;
    fail: any;
    complete: any;
}): void;
export declare function closeSocket({ code, reason, success, fail, complete }: {
    code: any;
    reason: any;
    success: any;
    fail: any;
    complete: any;
}): any;
