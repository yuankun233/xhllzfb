import wx from "../../subwe/bridge"
import WXPage from "../../subwe/page"
// pages/appointment/appointment.js
WXPage({
  /**
   * 页面的初始数据
   */
  data: {
    user: "",
    list: ""
  },

  goOrder(e) {
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: `/pages/order/order_eight/order_eight?index=${e.currentTarget.dataset.id}`
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: "加载中..."
    })

    var _this = this

    wx.getStorage({
      key: "user",

      success(res) {
        console.log(res.data)

        _this.setData({
          user: res.data
        })

        wx.request({
          url: "https://www.xiaohulaile.com/xh/p/wxcx/project/get_list",
          header: {
            "content-type": "application/json" // 默认值
          },
          data: {
            user_token: res.data.user_token
          },

          success(res) {
            console.log(res, "看看是啥")
            if (res.data.message == "请重新登录") {
              wx.showToast({
                title: "请先登录",
                icon: "none",
                duration: 1000
              })
              setTimeout(function () {
                console.log("doSomething")
                wx.reLaunch({
                  url: "/pages/loginzfb/loginzfb"
                })
              }, 1000)
            }
            _this.setData({
              list: res.data.data
            })

            wx.hideLoading()
          }
        })
      },
      fail(res) {
        console.log("请求失败")
        wx.showToast({
          title: "请先登录",
          icon: "none",
          duration: 1000
        })
        setTimeout(function () {
          console.log("doSomething")
          wx.reLaunch({
            url: "/pages/login/login"
          })
        }, 1000)
        return
      }
    })
  }
})
