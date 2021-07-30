import wx from "../../subwe/bridge"
import WXPage from "../../subwe/page"
import { $myrequest } from "../../utils/request" // 引入ajax请求方法
// pages/start/start.js
WXPage({
  /**
   * 页面的初始数据
   */
  data: {
    hushi1: "http://www.xiaohulaile.com/xh/p/doc/hushi1.png",
    hushi2: "http://www.xiaohulaile.com/xh/p/doc/hushi2.png",
    zghs: "http://www.xiaohulaile.com/xh/p/doc/zhuguanhushi.png"
  },
  back: function () {
    wx.navigateBack({})
  },

  go_eight(e) {
    console.log(e.currentTarget.dataset.id)

    if (
      e.currentTarget.dataset.id == "1" ||
      e.currentTarget.dataset.id == "3" ||
      e.currentTarget.dataset.id == "5" ||
      e.currentTarget.dataset.id == "6"
    ) {
      wx.navigateTo({
        url: `/pages/order/order_eight/order_eight?index=${e.currentTarget.dataset.id}`
      })
    } else {
      wx.showToast({
        title: "敬请期待....",
        icon: "none",
        duration: 2000
      })
    }
  },
  // 根据ID获取某一护士信息
  async getNurse(nurseid) {
    // 请求护士信息
    const res = await $myrequest({
      url: "/nurse/index",
      data: {
        id: nurseid
      }
    })
    console.log(res)
    // 设置到data中
    this.setData({
      nurse: res.data
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: "加载中..."
    })
    console.log("当前护士id:" + options.nurseid)
    // 请求护士信息
    this.getNurse(options.nurseid)

    wx.hideLoading()
  }
})
