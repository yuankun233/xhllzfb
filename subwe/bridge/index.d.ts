declare const wx: {
    createSelectorQuery(): any;
    createIntersectionObserver(): any;
    getExtConfig({ success, fail, complete }: {
        success: any;
        fail: any;
        complete: any;
    }): any;
    getExtConfigSync(): any;
    addPhoneContact({ weChatNumber, ...args }: {
        [x: string]: any;
        weChatNumber: any;
    }): any;
    getBatteryInfoSync(...args: any[]): any;
    getBatteryInfo(...args: any[]): any;
    onNetworkStatusChange(...args: any[]): any;
    offNetworkStatusChange(...args: any[]): any;
    getNetworkType(...args: any[]): any;
    setScreenBrightness({ value, success, fail, complete }: {
        value: any;
        success: any;
        fail: any;
        complete: any;
    }): any;
    setKeepScreenOn(...args: any[]): any;
    onUserCaptureScreen(...args: any[]): any;
    offUserCaptureScreen(...args: any[]): any;
    getScreenBrightness({ success, fail, complete }: {
        success: any;
        fail: any;
        complete: any;
    }): any;
    makePhoneCall({ phoneNumber, success, fail, complete }: {
        phoneNumber: any;
        success: any;
        fail: any;
        complete: any;
    }): any;
    offAccelerometerChange(...args: any[]): any;
    onAccelerometerChange(...args: any[]): any;
    onCompassChange(...args: any[]): any;
    offCompassChange(...args: any[]): any;
    onGyroscopeChange(...args: any[]): any;
    offGyroscopeChange(...args: any[]): any;
    onMemoryWarning(...args: any[]): any;
    offMemoryWarning(...args: any[]): any;
    scanCode({ onlyFromCamera, scanType, success, fail, complete }: {
        onlyFromCamera: any;
        scanType: any;
        success: any;
        fail: any;
        complete: any;
    }): any;
    vibrateShort(...args: any[]): any;
    vibrateLong(...args: any[]): any;
    navigateToMiniProgram({ appId, path, extraData, envVersion, success, fail, complete, }: {
        appId: any;
        path: any;
        extraData: any;
        envVersion: any;
        success: any;
        fail: any;
        complete: any;
    }): any;
    navigateBackMiniProgram({ extraData, success, fail, complete }: {
        extraData: any;
        success: any;
        fail: any;
        complete: any;
    }): any;
    reportAnalytics(eventName: any, data: any): any;
    checkSession(): void;
    login(args: any): any;
    getPhoneNumber({ success, fail, complete }: {
        success: any;
        fail: any;
        complete: any;
    }): any;
    getUserInfo({ withCredentials, success, fail, complete }: {
        withCredentials: any;
        success: any;
        fail: any;
        complete: any;
    }): any;
    openSetting({ withSubscriptions, success, fail, complete }: {
        withSubscriptions: any;
        success: any;
        fail: any;
        complete: any;
    }): any;
    getSetting({ withSubscriptions, success, fail, complete }: {
        withSubscriptions: any;
        success: any;
        fail: any;
        complete: any;
    }): any;
    chooseAddress({ success, fail, complete }: {
        success: any;
        fail: any;
        complete: any;
    }): any;
    getSavedFileList({ success, fail, complete }: {
        success: any;
        fail: any;
        complete: any;
    }): any;
    saveFile({ tempFilePath, success, fail, complete }: {
        tempFilePath: any;
        success: any;
        fail: any;
        complete: any;
    }): any;
    removeSavedFile({ filePath, success, fail, complete }: {
        filePath: any;
        success: any;
        fail: any;
        complete: any;
    }): any;
    openDocument({ filePath, showMenu, fileType, success, fail, complete }: {
        filePath: any;
        showMenu: any;
        fileType: any;
        success: any;
        fail: any;
        complete: any;
    }): any;
    getSavedFileInfo({ filePath, success, fail, complete }: {
        filePath: any;
        success: any;
        fail: any;
        complete: any;
    }): any;
    getFileInfo({ filePath, digestAlgorithm, success, fail, complete }: {
        filePath: any;
        digestAlgorithm: any;
        success: any;
        fail: any;
        complete: any;
    }): any;
    createCanvasContext(canvasId: any): any;
    canvasToTempFilePath(obj?: any): void;
    canvasPutImageData(obj?: any): void;
    canvasGetImageData(obj?: any): void;
    showShareMenu(): any;
    hideShareMenu(...args: any[]): any;
    openLocation({ latitude, longitude, scale, name, address, success, fail, complete, }: {
        latitude: any;
        longitude: any;
        scale: any;
        name: any;
        address: any;
        success: any;
        fail: any;
        complete: any;
    }): any;
    getLocation({ type, altitude, isHighAccuracy, highAccuracyExpireTime, success, fail, complete, }: {
        type: any;
        altitude: any;
        isHighAccuracy: any;
        highAccuracyExpireTime: any;
        success: any;
        fail: any;
        complete: any;
    }): any;
    chooseLocation({ latitude, longitude, success, fail, complete }: {
        latitude: any;
        longitude: any;
        success: any;
        fail: any;
        complete: any;
    }): any;
    createMapContext(mapId: any): any;
    previewImage({ urls, current, success, fail, complete }: {
        urls: any;
        current: any;
        success: any;
        fail: any;
        complete: any;
    }): any;
    getImageInfo({ src, success, fail, complete }: {
        src: any;
        success: any;
        fail: any;
        complete: any;
    }): any;
    compressImage({ src, quality, success, fail, complete }: {
        src: any;
        quality: any;
        success: any;
        fail: any;
        complete: any;
    }): any;
    chooseImage({ count, sizeType, sourceType, success, fail, complete }: {
        count: any;
        sizeType: any;
        sourceType: any;
        success: any;
        fail: any;
        complete: any;
    }): any;
    createVideoContext(id: any): any;
    getAvailableAudioSources({ success, fail, complete }: {
        success: any;
        fail: any;
        complete: any;
    }): any;
    createInnerAudioContext(): any;
    setStorageSync(key: any, data: any): any;
    removeStorageSync(key: any): any;
    setStorage({ key, data, success, fail, complete }: {
        key: any;
        data: any;
        success: any;
        fail: any;
        complete: any;
    }): any;
    removeStorage({ key, success, fail, complete }: {
        key: any;
        success: any;
        fail: any;
        complete: any;
    }): any;
    getStorageSync(key: any): any;
    getStorage(options?: any): void;
    getStorageInfoSync(): any;
    getStorageInfo({ success, fail, complete }: {
        success: any;
        fail: any;
        complete: any;
    }): any;
    clearStorageSync(): any;
    clearStorage(...args: any[]): any;
    request({ url, data, header, timeout, method, dataType, responseType, enableHttp2, enableQuic, enableCache, success, fail, complete, }: {
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
    downloadFile({ url, header, timeout, filePath, success, fail, complete }: {
        url: any;
        header: any;
        timeout: any;
        filePath: any;
        success: any;
        fail: any;
        complete: any;
    }): any;
    uploadFile({ url, filePath, name, header, formData, timeout, success, fail, complete, fileType, }: {
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
    sendSocketMessage({ data, success, fail, complete }: {
        data: any;
        success: any;
        fail: any;
        complete: any;
    }): any;
    onSocketOpen(...args: any[]): any;
    onSocketMessage(...args: any[]): any;
    onSocketError(...args: any[]): any;
    onSocketClose(...args: any[]): any;
    connectSocket({ url, header, protocols, tcpNoDelay, perMessageDeflate, timeout, success, fail, complete, }: {
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
    closeSocket({ code, reason, success, fail, complete }: {
        code: any;
        reason: any;
        success: any;
        fail: any;
        complete: any;
    }): any;
    showToast({ title, icon, image, duration, mask, success, fail, complete }: {
        title: any;
        icon: any;
        image: any;
        duration: any;
        mask: any;
        success: any;
        fail: any;
        complete: any;
    }): any;
    showModal({ title, content, showCancel, cancelText, cancelColor, confirmText, confirmColor, success, fail, complete, }: {
        title: any;
        content: any;
        showCancel: any;
        cancelText: any;
        cancelColor: any;
        confirmText: any;
        confirmColor: any;
        success: any;
        fail: any;
        complete: any;
    }): any;
    showLoading(options?: {
        title?: string | undefined;
        success?: any;
        fail?: any;
        complete?: any;
    }): any;
    showActionSheet({ alertText, itemList, itemColor, success, fail, complete }: {
        alertText: any;
        itemList: any;
        itemColor: any;
        success: any;
        fail: any;
        complete: any;
    }): any;
    hideToast(...args: any[]): any;
    hideLoading(...args: any[]): any;
    showNavigationBarLoading(...args: any[]): any;
    setNavigationBarTitle({ title, success, fail, complete }: {
        title: any;
        success: any;
        fail: any;
        complete: any;
    }): any;
    setNavigationBarColor({ frontColor, backgroundColor, animation, success, fail, complete, }: {
        frontColor: any;
        backgroundColor: any;
        animation: any;
        success: any;
        fail: any;
        complete: any;
    }): any;
    hideNavigationBarLoading(...args: any[]): any;
    setBackgroundTextStyle({ textStyle, success, fail, complete }: {
        textStyle: any;
        success: any;
        fail: any;
        complete: any;
    }): any;
    setBackgroundColor({ backgroundColor, backgroundColorTop, backgroundColorBottom, success, fail, complete, }: {
        backgroundColor: any;
        backgroundColorTop: any;
        backgroundColorBottom: any;
        success: any;
        fail: any;
        complete: any;
    }): any;
    showTabBarRedDot({ index, success, fail, complete }: {
        index: any;
        success: any;
        fail: any;
        complete: any;
    }): any;
    showTabBar(...args: any[]): any;
    setTabBarStyle({ color, selectedColor, backgroundColor, borderStyle, success, fail, complete, }: {
        color: any;
        selectedColor: any;
        backgroundColor: any;
        borderStyle: any;
        success: any;
        fail: any;
        complete: any;
    }): any;
    setTabBarItem({ index, text, iconPath, selectedIconPath, success, fail, complete, }: {
        index: any;
        text: any;
        iconPath: any;
        selectedIconPath: any;
        success: any;
        fail: any;
        complete: any;
    }): any;
    setTabBarBadge({ index, text, success, fail, complete }: {
        index: any;
        text: any;
        success: any;
        fail: any;
        complete: any;
    }): any;
    removeTabBarBadge({ index, success, fail, complete }: {
        index: any;
        success: any;
        fail: any;
        complete: any;
    }): any;
    hideTabBarRedDot({ index, success, fail, complete }: {
        index: any;
        success: any;
        fail: any;
        complete: any;
    }): any;
    hideTabBar(...args: any[]): any;
    loadFontFace({ global, family, source, desc, scopes, success, fail, complete }: {
        global: any;
        family: any;
        source: any;
        desc: any;
        scopes: any;
        success: any;
        fail: any;
        complete: any;
    }): any;
    stopPullDownRefresh(...args: any[]): any;
    startPullDownRefresh(...args: any[]): any;
    pageScrollTo({ scrollTop, duration, selector, success, fail, complete }: {
        scrollTop: any;
        duration: any;
        selector: any;
        success: any;
        fail: any;
        complete: any;
    }): any;
    createAnimation({ duration, timingFunction, delay, transformOrigin }: {
        duration: any;
        timingFunction: any;
        delay: any;
        transformOrigin: any;
    }): any;
    hideKeyboard(...args: any[]): any;
    switchTab({ url, success, fail, complete }: {
        url: any;
        success: any;
        fail: any;
        complete: any;
    }): any;
    reLaunch({ url, success, fail, complete }: {
        url: any;
        success: any;
        fail: any;
        complete: any;
    }): any;
    redirectTo({ url, success, fail, complete }: {
        url: any;
        success: any;
        fail: any;
        complete: any;
    }): any;
    navigateTo({ url, success, fail, complete }: {
        url: any;
        success: any;
        fail: any;
        complete: any;
    }): any;
    navigateBack(...args: any[]): any;
    canIUse(params: any): any;
    getSystemInfo({ success, fail, complete }: {
        success: any;
        fail: any;
        complete: any;
    }): any;
    getSystemInfoSync(): any;
    getSystemInfoAsync({ success, fail, complete }: {
        success: any;
        fail: any;
        complete: any;
    }): any;
    updateWeChatApp({ success, fail, complete }: {
        success: any;
        fail: any;
        complete: any;
    }): any;
    getUpdateManager(): any;
    getLaunchOptionsSync(): any;
    onUnhandledRejection(...args: any[]): any;
    offUnhandledRejection(...args: any[]): any;
    onError(...args: any[]): any;
    offError(...args: any[]): any;
    onAudioInterruptionEnd(...args: any[]): any;
    offAudioInterruptionEnd(...args: any[]): any;
    onAudioInterruptionBegin(...args: any[]): any;
    offAudioInterruptionBegin(...args: any[]): any;
    onAppShow(...args: any[]): any;
    offAppShow(...args: any[]): any;
    onAppHide(...args: any[]): any;
    offAppHide(...args: any[]): any;
    getMenuButtonBoundingClientRect(): {
        bottom: number;
        height: number;
        left: number;
        right: number;
        top: number;
        width: number;
    };
};
export default wx;
