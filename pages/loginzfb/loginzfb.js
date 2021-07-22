import wx from '../../subwe/bridge';
import WXPage from "../../subwe/page";
WXPage({
  data: {
    systemInfo: "",
    authCode: "",
    user: "",
    showBottom: false,
  },
  //
  onTopBtnTap() {
    this.setData({
      showBottom: true,
    });
  },

  // 用户协议
  userAgreementC() {
    console.log(111);
    wx.navigateTo({
      url: '/pages/fill/Fill'
    });
  },
  loginIphone() {
    wx.navigateTo({
      url: '/pages/phone/phone'
    });
  },
  // .js 
  // 获取用户基本信息一键登录
  onGetAuthorize() {
    var _this = this
    // my.getSystemInfo({
    //   success: (res) => {
    //     console.log(res)
    //     _this.setData({
    //       systemInfo: res
    //     })
    //   }
    // })
    // console.log("获取信息")
    my.getAuthCode({
      scopes: ['auth_base'],
      success: ({ authCode }) => {
        var item = authCode
        //登录
        _this.setData({
          authCode: authCode
        })
        my.request({
          url: 'https://www.xiaohulaile.com/xh/p/zfbxcx/login/getAliUserId',
          data: {
            code: item
          },
          method: 'POST',
          success: res => {
            //判断是不是有手机号
            var id = res.data.errno
            var phone = res.data.errmsg
            // return
            console.log(res.data.data.alipay_system_oauth_token_response, "2")
            this.setData({
              user: res.data.data.alipay_system_oauth_token_response
            })
            my.getOpenUserInfo({
              fail: (error) => {
                console.error('getAuthUserInfo', error);
              },
              success: (res) => {
                console.log(`userInfo:`, res);
                let userInfo = JSON.parse(res.response).response // 以下方的报文格式解析两层 response
                this.setData({
                  userInfo,
                });
                console.log(userInfo)
                console.log(_this, "看看")
                if (id == 2) {
                  this.setData({
                    showBottom: true
                  })
                } else {
                  console.log(_this.data.userInfo, "卡卡")
                  console.log(_this.data.userInfo, "卡卡")
                  my.request({
                    url: 'https://www.xiaohulaile.com/xh/p/zfbxcx/login/login',
                    data: {
                      // code: item
                      wx_openid: _this.data.user.user_id,
                      nickname: _this.data.userInfo.nickName,
                      sex: _this.data.userInfo.gender,
                      head_logo: _this.data.userInfo.avatar,
                      phone: phone,
                    },
                    method: 'POST',
                    success: res => {
                      console.log(res, "看一下111")
                      console.log(res.data, "看一下222")
                      console.log(res.data.data, "看一下333")
                      // return
                      if (res.data.code == "200") {
                        my.setStorage({
                          key: 'user',
                          data: res.data.data
                        });
                        my.reLaunch({
                          url: '/pages/index/index'
                        });
                        // return;
                      }
                    }
                  })
                }
              }
            });



          }
        });
      },
    });




  },
  getPhoneNumber() {
    var _this = this
    console.log("22")
    my.getPhoneNumber({
      success: (res) => {
        let encryptedData = res.response;
        console.log(encryptedData)
        my.request({
          url: 'https://www.xiaohulaile.com/xh/p/zfbxcx/login/get_phone',
          data: encryptedData,
          method: 'POST',
          success: res => {
            console.log(res, "1")
            console.log(res.data, "11")
            if (res.data.code == "10000") {
              my.request({
                url: 'https://www.xiaohulaile.com/xh/p/zfbxcx/login/login',
                data: {
                  // code: item
                  wx_openid: _this.data.user.user_id,
                  nickname: _this.data.userInfo.nickName,
                  sex: _this.data.userInfo.gender,
                  head_logo: _this.data.userInfo.avatar,
                  phone: res.data.mobile,
                },
                method: 'POST',
                success: res => {
                  console.log(res, "看一下")
                  console.log(res.data, "看一下")
                  console.log(res.data.data, "看一下")
                  // return
                  if (res.data.code == "200") {
                    my.setStorage({
                      key: 'user',
                      data: res.data.data
                    });
                    my.reLaunch({
                      url: '/pages/index/index'
                    });
                    // return;
                  }
                }
              })
            } else {
              my.alert({
                title: '登录失败',
              });
              this.setData({
                showBottom: false
              })
            }
          }
        });
      },
      fail: (res) => {
        console.log(res);
        console.log('getPhoneNumber_fail');
      },
    });
    // return

  },
  onAuthError(res) {
    console.log(res, "失败")
  },
  onReady: function () {
    // var _this = this

  },
});
