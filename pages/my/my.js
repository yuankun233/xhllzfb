import wx from "../../subwe/bridge"
import WXPage from "../../subwe/page"
// pages/my/my.js
WXPage({
  /**
   * 页面的初始数据
   */
  data: {
    users: "",
    user: "",
    statusnum1: "",
    statusnum: "",
    statusnum2: "",
    isLogin: false
  },

  goFile() {
    var _this = this

    // 请重新登录弹窗
    this.resetLoginToast()
    wx.request({
      url: "https://www.xiaohulaile.com/xh/p/wxcx/my/archive",
      //仅为示例，并非真实的接口地址
      // url: 'https://159.75.47.247/xh/p/wxcx/my/archive',
      method: "post",
      data: {
        user_token: _this.data.user.user_token,
        my_id: _this.data.user.id
      },
      header: {
        "content-type": "application/json" // 默认值
      },

      success(res) {
        console.log(res)
        console.log(res.data.code)

        if (res.data.code == 1) {
          wx.navigateTo({
            url: "/pages/file/file"
          })
          return
        }

        if (res.data.code == 0) {
          wx.navigateTo({
            url: "/pages/file/file_y/file_y"
          })
          return
        }
      }
    })
  },
  // 跳转登录
  goLogin() {
    console.log("跳转登录~~~")
    wx.navigateTo({
      url: "/pages/loginzfb/loginzfb"
    })
  },
  // 请重新登录弹窗
  resetLoginToast() {
    // 判断是否登录
    if (this.data.isLogin == false) {
      wx.showToast({
        title: "请先登录",
        icon: "none",
        duration: 1000
      })
      setTimeout(function () {
        console.log("doSomething")
        wx.navigateTo({
          url: "/pages/loginzfb/loginzfb"
        })
      }, 1000)
      return
    }
  },
  goOurder(e) {
    // 请重新登录弹窗
    this.resetLoginToast()
    if (this.data.isLogin == true) {
      console.log(e.currentTarget.dataset.id)
      wx.navigateTo({
        url: `/pages/order/order?index=${e.currentTarget.dataset.id}`
      })
    }
  },

  goSpecialty() {
    console.log("跳转常见问答")
    wx.navigateTo({
      url: "/pages/specialty/specialty"
    }) // wx.makePhoneCall({
    //   phoneNumber: '4009155291',
    // });
  },
  goSpecialtys() {
    console.log("跳转小护知识")
    wx.navigateTo({
      url: "/pages/ledge/ledge"
    })
  },
  zwFn() {
    my.showToast({
      type: "none",
      content: "暂未开放",
      duration: 3000,
      success: () => {
        console.log("111")
      }
    })
  },
  gosurvey() {
    wx.navigateTo({
      url: "../survey/survey"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this

    wx.getStorage({
      key: "user",

      success(res) {
        console.log(res.data)

        // 获取用户的信息
        wx.request({
          url: "https://www.xiaohulaile.com/xh/p/wxcx/my/my",
          header: {
            "content-type": "application/json" // 默认值
          },
          data: {
            user_token: res.data.user_token,
            my_id: res.data.my_id
          },

          success(res) {
            console.log(res)
            _this.setData({
              user: res.data.data,
              isLogin: true
            })
          }
        })
        // 获取用户订单数量
        wx.request({
          url: "https://www.xiaohulaile.com/xh/p/wxcx/order/order_num",
          header: {
            "content-type": "application/json" // 默认值
          },
          data: {
            user_token: res.data.user_token,
            my_id: res.data.my_id,
            status: 1
          },
          success(res) {
            console.log(res)
            _this.setData({
              statusnum1: res.data.data
            })
          }
        })
        wx.request({
          url: "https://www.xiaohulaile.com/xh/p/wxcx/order/order_num",
          header: {
            "content-type": "application/json" // 默认值
          },
          data: {
            user_token: res.data.user_token,
            my_id: res.data.my_id,
            status: 2
          },
          success(res) {
            console.log(res)
            _this.setData({
              statusnum: res.data.data
            })
          }
        })
        wx.request({
          url: "https://www.xiaohulaile.com/xh/p/wxcx/order/order_num",
          header: {
            "content-type": "application/json" // 默认值
          },
          data: {
            user_token: res.data.user_token,
            my_id: res.data.my_id,
            status: 3
          },
          success(res) {
            console.log(res.data.message, 111)
            _this.setData({
              statusnum2: res.data.data
            })
          }
        })
      },
      fail(res) {
        // console.log(res)
        // wx.showToast({
        //   title: "请先登录",
        //   icon: "none",
        //   duration: 1000
        // })
        // setTimeout(function () {
        //   console.log("doSomething")
        //   wx.reLaunch({
        //     url: "/pages/loginzfb/loginzfb"
        //   })
        // }, 1000)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {}
})
