"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hideKeyboard = exports.createAnimation = exports.pageScrollTo = exports.startPullDownRefresh = exports.stopPullDownRefresh = exports.loadFontFace = exports.hideTabBar = exports.hideTabBarRedDot = exports.removeTabBarBadge = exports.setTabBarBadge = exports.setTabBarItem = exports.setTabBarStyle = exports.showTabBar = exports.showTabBarRedDot = exports.setBackgroundColor = exports.setBackgroundTextStyle = exports.hideNavigationBarLoading = exports.setNavigationBarColor = exports.setNavigationBarTitle = exports.showNavigationBarLoading = exports.hideLoading = exports.hideToast = exports.showActionSheet = exports.showLoading = exports.showModal = exports.showToast = void 0;
// 交互
function showToast({ title, icon, image, duration, mask, success, fail, complete }) {
    let type = 'success';
    if (icon === 'success') {
        type = icon;
    }
    else if (icon === 'error') {
        type = 'fail';
    }
    else if (icon === 'loading') {
        type = 'none';
    }
    else if (icon === 'none') {
        type = icon;
    }
    else {
        type = 'success';
    }
    return my.showToast({
        content: title,
        type,
        duration,
        success,
        fail,
        complete,
    });
}
exports.showToast = showToast;
function showModal({ title, content, showCancel, cancelText, cancelColor, confirmText, confirmColor, success, fail, complete, }) {
    return my.confirm({
        title: title || '',
        content: content || '',
        confirmButtonText: confirmText || '确定',
        cancelButtonText: cancelText || '取消',
        success: ({ confirm }) => {
            if (success) {
                success({ confirm, cancel: !confirm });
            }
        },
        fail,
        complete,
    });
}
exports.showModal = showModal;
function showLoading(options = { title: '' }) {
    return my.showLoading({
        content: options.title,
        success: options.success,
        fail: options.fail,
        complete: options.complete,
    });
}
exports.showLoading = showLoading;
function showActionSheet({ alertText, itemList, itemColor, success, fail, complete }) {
    return my.showActionSheet({
        title: alertText,
        items: itemList,
        success: ({ index }) => {
            if (success) {
                success({ tapIndex: index });
            }
        },
        fail,
        complete,
    });
}
exports.showActionSheet = showActionSheet;
function hideToast(...args) {
    return my.hideToast(...args);
}
exports.hideToast = hideToast;
function hideLoading(...args) {
    return my.hideLoading(...args);
}
exports.hideLoading = hideLoading;
// 导航栏
function showNavigationBarLoading(...args) {
    return my.showNavigationBarLoading(...args);
}
exports.showNavigationBarLoading = showNavigationBarLoading;
function setNavigationBarTitle({ title, success, fail, complete }) {
    return my.setNavigationBar({
        title,
        success,
        fail,
        complete,
    });
}
exports.setNavigationBarTitle = setNavigationBarTitle;
function setNavigationBarColor({ frontColor, backgroundColor, animation, success, fail, complete, }) {
    return my.setNavigationBar({
        backgroundColor,
        success,
        fail,
        complete,
    });
}
exports.setNavigationBarColor = setNavigationBarColor;
function hideNavigationBarLoading(...args) {
    return my.hideNavigationBarLoading(...args);
}
exports.hideNavigationBarLoading = hideNavigationBarLoading;
// 背景
function setBackgroundTextStyle({ textStyle, success, fail, complete }) {
    return my.setBackgroundTextStyle({ textStyle, success, fail, complete });
}
exports.setBackgroundTextStyle = setBackgroundTextStyle;
function setBackgroundColor({ backgroundColor, backgroundColorTop, backgroundColorBottom, success, fail, complete, }) {
    return my.setBackgroundColor({
        backgroundColor,
        backgroundColorTop,
        backgroundColorBottom,
        success,
        fail,
        complete,
    });
}
exports.setBackgroundColor = setBackgroundColor;
// Tab Bar
function showTabBarRedDot({ index, success, fail, complete }) {
    return my.showTabBarRedDot({ index, success, fail, complete });
}
exports.showTabBarRedDot = showTabBarRedDot;
function showTabBar(...args) {
    return my.showTabBar(...args);
}
exports.showTabBar = showTabBar;
function setTabBarStyle({ color, selectedColor, backgroundColor, borderStyle, success, fail, complete, }) {
    return my.setTabBarStyle({
        color,
        selectedColor,
        backgroundColor,
        borderStyle,
        success,
        fail,
        complete,
    });
}
exports.setTabBarStyle = setTabBarStyle;
function setTabBarItem({ index, text, iconPath, selectedIconPath, success, fail, complete, }) {
    return my.setTabBarItem({
        index,
        text,
        iconPath,
        selectedIconPath,
        success,
        fail,
        complete,
    });
}
exports.setTabBarItem = setTabBarItem;
function setTabBarBadge({ index, text, success, fail, complete }) {
    return my.setTabBarBadge({
        index,
        text,
        success,
        fail,
        complete,
    });
}
exports.setTabBarBadge = setTabBarBadge;
function removeTabBarBadge({ index, success, fail, complete }) {
    return my.removeTabBarBadge({ index, success, fail, complete });
}
exports.removeTabBarBadge = removeTabBarBadge;
function hideTabBarRedDot({ index, success, fail, complete }) {
    return my.hideTabBarRedDot({ index, success, fail, complete });
}
exports.hideTabBarRedDot = hideTabBarRedDot;
function hideTabBar(...args) {
    return my.hideTabBar(...args);
}
exports.hideTabBar = hideTabBar;
// 字体
function loadFontFace({ global, family, source, desc, scopes, success, fail, complete }) {
    return my.loadFontFace({
        family,
        source,
        desc,
        success,
        fail,
        complete,
    });
}
exports.loadFontFace = loadFontFace;
// 下拉刷新
function stopPullDownRefresh(...args) {
    return my.stopPullDownRefresh(...args);
}
exports.stopPullDownRefresh = stopPullDownRefresh;
function startPullDownRefresh(...args) {
    return my.startPullDownRefresh(...args);
}
exports.startPullDownRefresh = startPullDownRefresh;
// 滚动
function pageScrollTo({ scrollTop, duration, selector, success, fail, complete }) {
    return my.pageScrollTo({ scrollTop, duration, selector, success, fail, complete });
}
exports.pageScrollTo = pageScrollTo;
// 动画
function createAnimation({ duration, timingFunction, delay, transformOrigin }) {
    return my.createAnimation({ duration, timingFunction, delay, transformOrigin });
}
exports.createAnimation = createAnimation;
// 键盘
function hideKeyboard(...args) {
    return my.hideKeyboard(...args);
}
exports.hideKeyboard = hideKeyboard;
