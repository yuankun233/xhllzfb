/**! __CODEPLACEHOLDER_START__ */ /*[PositionForHostEntryCodeBegin]*/ /**! __CODEPLACEHOLDER_END__ */
if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');
require('./importScripts$');

      function getUserAgentInPlatformWeb() {
        return typeof navigator !== 'undefined' ? navigator.swuserAgent || navigator.userAgent || '' : '';
      }
      if(getUserAgentInPlatformWeb() && (getUserAgentInPlatformWeb().indexOf('LyraVM') > 0 || getUserAgentInPlatformWeb().indexOf('AlipayIDE') > 0) ) {
        var AFAppX = self.AFAppX.getAppContext ? self.AFAppX.getAppContext().AFAppX : self.AFAppX;
      } else {
        importScripts('https://appx/af-appx.worker.min.js');
        var AFAppX = self.AFAppX;
      }
      self.getCurrentPages = AFAppX.getCurrentPages;
      self.getApp = AFAppX.getApp;
      self.Page = AFAppX.Page;
      self.App = AFAppX.App;
      self.my = AFAppX.bridge || AFAppX.abridge;
      self.abridge = self.my;
      self.Component = AFAppX.WorkerComponent || function(){};
      self.$global = AFAppX.$global;
      self.requirePlugin = AFAppX.requirePlugin;
    

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../node_modules/mini-ali-ui-rpx/es/am-icon/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui-rpx/es/title/index?hash=4dc76819ab39c9009cae231986217ccac63ee3f3');
require('../../node_modules/mini-ali-ui-rpx/es/popup/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../common/cop/AddressPicker/AddressPicker?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/index/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/loginzfb/loginzfb?hash=a16474da6092abe82a020d9cbe7b8d3216615163');
require('../../pages/login/login?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/fill/Fill?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/phone/phone?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/message/message?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/message_details/message_details?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/merchant/merchant?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/merdetails/merdetails?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/my/my?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/map/map?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/file/file?hash=2ef798281d17ba125515042c930af1b5791f0123');
require('../../pages/order/order?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/specialty/specialty?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/appointment/appointment?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/order/order_eight/order_eight?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/order/order_item/order_item?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/file/file_y/file_y?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/order/order_details/order_details?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/aboutus/aboutus?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/scancode/scancode?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/start/start?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/ledge/ledge?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}