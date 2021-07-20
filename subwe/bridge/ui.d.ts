export declare function showToast({ title, icon, image, duration, mask, success, fail, complete }: {
    title: any;
    icon: any;
    image: any;
    duration: any;
    mask: any;
    success: any;
    fail: any;
    complete: any;
}): any;
export declare function showModal({ title, content, showCancel, cancelText, cancelColor, confirmText, confirmColor, success, fail, complete, }: {
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
export declare function showLoading(options?: {
    title?: string;
    success?: any;
    fail?: any;
    complete?: any;
}): any;
export declare function showActionSheet({ alertText, itemList, itemColor, success, fail, complete }: {
    alertText: any;
    itemList: any;
    itemColor: any;
    success: any;
    fail: any;
    complete: any;
}): any;
export declare function hideToast(...args: any[]): any;
export declare function hideLoading(...args: any[]): any;
export declare function showNavigationBarLoading(...args: any[]): any;
export declare function setNavigationBarTitle({ title, success, fail, complete }: {
    title: any;
    success: any;
    fail: any;
    complete: any;
}): any;
export declare function setNavigationBarColor({ frontColor, backgroundColor, animation, success, fail, complete, }: {
    frontColor: any;
    backgroundColor: any;
    animation: any;
    success: any;
    fail: any;
    complete: any;
}): any;
export declare function hideNavigationBarLoading(...args: any[]): any;
export declare function setBackgroundTextStyle({ textStyle, success, fail, complete }: {
    textStyle: any;
    success: any;
    fail: any;
    complete: any;
}): any;
export declare function setBackgroundColor({ backgroundColor, backgroundColorTop, backgroundColorBottom, success, fail, complete, }: {
    backgroundColor: any;
    backgroundColorTop: any;
    backgroundColorBottom: any;
    success: any;
    fail: any;
    complete: any;
}): any;
export declare function showTabBarRedDot({ index, success, fail, complete }: {
    index: any;
    success: any;
    fail: any;
    complete: any;
}): any;
export declare function showTabBar(...args: any[]): any;
export declare function setTabBarStyle({ color, selectedColor, backgroundColor, borderStyle, success, fail, complete, }: {
    color: any;
    selectedColor: any;
    backgroundColor: any;
    borderStyle: any;
    success: any;
    fail: any;
    complete: any;
}): any;
export declare function setTabBarItem({ index, text, iconPath, selectedIconPath, success, fail, complete, }: {
    index: any;
    text: any;
    iconPath: any;
    selectedIconPath: any;
    success: any;
    fail: any;
    complete: any;
}): any;
export declare function setTabBarBadge({ index, text, success, fail, complete }: {
    index: any;
    text: any;
    success: any;
    fail: any;
    complete: any;
}): any;
export declare function removeTabBarBadge({ index, success, fail, complete }: {
    index: any;
    success: any;
    fail: any;
    complete: any;
}): any;
export declare function hideTabBarRedDot({ index, success, fail, complete }: {
    index: any;
    success: any;
    fail: any;
    complete: any;
}): any;
export declare function hideTabBar(...args: any[]): any;
export declare function loadFontFace({ global, family, source, desc, scopes, success, fail, complete }: {
    global: any;
    family: any;
    source: any;
    desc: any;
    scopes: any;
    success: any;
    fail: any;
    complete: any;
}): any;
export declare function stopPullDownRefresh(...args: any[]): any;
export declare function startPullDownRefresh(...args: any[]): any;
export declare function pageScrollTo({ scrollTop, duration, selector, success, fail, complete }: {
    scrollTop: any;
    duration: any;
    selector: any;
    success: any;
    fail: any;
    complete: any;
}): any;
export declare function createAnimation({ duration, timingFunction, delay, transformOrigin }: {
    duration: any;
    timingFunction: any;
    delay: any;
    transformOrigin: any;
}): any;
export declare function hideKeyboard(...args: any[]): any;
