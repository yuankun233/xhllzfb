import wx from '../../../subwe/bridge';
import WXPage from "../../../subwe/page";
// pages/order/order_details/order_details.js
WXPage({
  /**
   * 页面的初始数据
   */
  data: {
    user: '',
    list: '',
    checkbox: '',
    modalName: '',
    isPay: false
  },

  quxiao() {
    let _this = this;

    wx.showModal({
      title: '提示',
      content: '取消订单之后需重新下单',
      success: function (res) {
        wx.request({
          url: 'https://www.xiaohulaile.com/xh/p/zfbxcx/pay/close_order',
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          method: 'post',
          data: {
            id: _this.data.list.id
          },

          success(res) {
            console.log(res, "1");
            console.log(res.data, "2");
            console.log(res.data.data, "3");
            if (res.data.msg == "取消成功") {
              my.alert({
                title: '取消成功',
              });
              my.reLaunch({
                url: '/pages/my/my'
              })
            }
          }

        });
      }
    });

  },

  checkboxChange(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);
    this.setData({
      checkbox: e.detail.value
    });
  },

  hideModal(e) {
    console.log('111');
    this.setData({
      modalName: null
    });
  },

  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    });
  },

  shows() {
    this.setData({
      modalName: 'Modal'
    });
  },

  // 付钱了
  payFn() {
    var _this = this;

    if (_this.data.isPay) {
      return;
    }

    _this.setData({
      isPay: true
    });

    console.log('付钱');
    wx.request({
      url: 'https://www.xiaohulaile.com/xh/p/wxcx/pay/pay',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'post',
      data: {
        id: _this.data.list.id
      },

      success(res) {
        console.log(res, '11');
        console.log(res.data, '22');

        _this.setData({
          isPay: false
        });

        if (res.data.code == 0) {
          wx.requestPayment({
            timeStamp: res.data.data.timeStamp,
            nonceStr: res.data.data.nonceStr,
            package: res.data.data.package,
            signType: res.data.data.signType,
            paySign: res.data.data.paySign,

            success(res) {
              console.log(res, '成功');
              wx.navigateBack({
                delta: 0
              });
            },

            fail(res) {
              console.log(res);
              wx.navigateBack({
                delta: 0
              });
            }

          });
        } else if (res.data.code == 1) {
          wx.showToast({
            title: res.data.message,
            icon: 'none'
          });
        } else if (res.data.code == 2) {
          wx.navigateTo({
            url: '/pages/home/login/login'
          });
        }
      }

    });
  },
  //支付宝付钱了
  payFnZfb() {
    var _this = this;

    if (_this.data.isPay) {
      return;
    }

    _this.setData({
      isPay: true
    });

    console.log('付钱');
    wx.request({
      url: 'https://www.xiaohulaile.com/xh/p/zfbxcx/pay/aliPay',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'post',
      data: {
        id: _this.data.list.id
      },

      success(res) {
        console.log(res, '11');
        console.log(res.data.data, '22');
        var trade_no_1 = res.data.data
        my.tradePay({
          tradeNO: trade_no_1,
          success: function (res) {
            console.log(res, "成功")
            //告知后台支付结果
            wx.request({
              url: 'https://www.xiaohulaile.com/xh/p/zfbxcx/pay/notify',
              header: {
                'content-type': 'application/json' // 默认值
              },
              method: 'get',
              data: {
                trade_no: trade_no_1,
                total_amount: _this.data.total_fee
              },
              success(res) {
                console.log(res, "1")
                console.log(res.data, "2")
                if (res.data.msg == "支付成功") {
                  console.log(res, "支付成功打印")
                  // return
                  wx.redirectTo({
                    url: '/pages/order/order?index=0'
                  });
                } else {
                  console.log(res, "支付失败打印")
                  // return
                  wx.switchTab({
                    url: '/pages/index/index'
                  });
                }
                console.log(res.data.data, "3")
              }

            });
            // my.alert({
            //   content: JSON.stringify(res),
            // });

            return
            wx.redirectTo({
              url: '/pages/order/order?index=0'
            });
          },
          fail: function (res) {
            my.alert({
              content: "支付失败",
            });
            wx.redirectTo({
              url: '/pages/index/index'
            });
            console.log(res, "失败")
          },
        });
        _this.setData({
          isPay: false
        });

        // if (res.data.code == 0) {
        //   wx.requestPayment({
        //     timeStamp: res.data.data.timeStamp,
        //     nonceStr: res.data.data.nonceStr,
        //     package: res.data.data.package,
        //     signType: res.data.data.signType,
        //     paySign: res.data.data.paySign,

        //     success(res) {
        //       console.log(res, '成功');
        //       wx.navigateBack({
        //         delta: 0
        //       });
        //     },

        //     fail(res) {
        //       console.log(res);
        //       wx.navigateBack({
        //         delta: 0
        //       });
        //     }

        //   });
        // } else if (res.data.code == 1) {
        //   wx.showToast({
        //     title: res.data.message,
        //     icon: 'none'
        //   });
        // } else if (res.data.code == 2) {
        //   wx.navigateTo({
        //     url: '/pages/home/login/login'
        //   });
        // }
      }

    });
  },
  refund() {
    console.log('退群');

    var _this = this;

    wx.showModal({
      title: '提示',
      content: '您是否确定退款',

      success(res) {
        if (res.confirm) {
          console.log('用户点击确定');
          wx.request({
            url: 'https://www.xiaohulaile.com/xh/p/zfbxcx/pay/refund_order',
            header: {
              'content-type': 'application/json' // 默认值

            },
            data: {
              id: _this.data.list.id
            },

            success(res) {
              console.log(res, "1");
              console.log(res.data, "2");
              console.log(res.data.code, "3");
              if (res.data.code == "200") {
                wx.showToast({
                  title: '退款成功',
                  icon: 'success',
                  duration: 2000
                });
                wx.redirectTo({
                  url: '/pages/order/order?index=0'
                });

                _this.setData({
                  modalName: null
                });
              } else {
                wx.showToast({
                  title: '退款失败',
                  icon: 'error',
                  duration: 2000
                });

                _this.setData({
                  modalName: null
                });
              }
            }

          });
        } else if (res.cancel) {
          console.log('用户点击取消');

          _this.setData({
            modalName: null
          });
        }
      }

    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    wx.showLoading({
      title: '加载中...'
    });
    console.log(option);

    let _this = this;

    wx.getStorage({
      key: 'user',

      success(res) {
        console.log(res.data);

        _this.setData({
          user: res.data
        });

        wx.request({
          url: 'https://www.xiaohulaile.com/xh/p/wxcx/order/get_data',
          header: {
            'content-type': 'application/json' // 默认值

          },
          data: {
            user_token: res.data.user_token,
            order_id: option.id
          },

          success(res) {
            {
              console.log(res);

              _this.setData({
                list: res.data.data
              });

              wx.hideLoading();
            }
          }

        });
      }

    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () { },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () { },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () { },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () { },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () { },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () { },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () { }
});