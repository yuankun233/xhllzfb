import wx from "../../subwe/bridge"
import WXPage from "../../subwe/page"
import { $myrequest1 } from "../../utils/request1"
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
  async getList() {
    wx.showLoading({
      title: "加载中...",
      mask: true
    })
    const token = this.data.user.user_token
    console.log(token)
    // 获取预约服务列表
    const res = await $myrequest1({
      url: "/project/get_list",
      data: {
        user_token: token
      }
    })
    wx.hideLoading()
    console.log(res)
    // token过期，重新登录
    if (res.message == "请重新登录") {
      wx.showToast({
        title: "请重新登录",
        icon: "none",
        duration: 1000
      })
      setTimeout(() => {
        wx.reLaunch({
          url: "/pages/loginzfb/loginzfb"
        })

      }, 1000)
      return

    }
    let serve = res.data


    // 储存到data
    this.setData({
      list: serve
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this

    wx.getStorage({
      key: "user",

      success(res) {
        console.log(res.data)
        // 存到data
        _this.setData({
          user: res.data
        })
        // 获取列表
        _this.getList()
      },
      fail(res) {
        console.log("请求失败")
        wx.showToast({
          title: "请先登录",
          icon: "none",
          duration: 1000
        })

        setTimeout(() => {
          wx.reLaunch({
            url: "/pages/loginzfb/loginzfb"
          })

        }, 1000)

        return
      }
    })
  }
})
