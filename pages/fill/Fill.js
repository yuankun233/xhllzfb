import wx from "../../subwe/bridge"
import WXPage from "../../subwe/page"
// pages/fill/Fill.js
WXPage({
  /**
   * 页面的初始数据
   */
  data: {
    agreement: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: "加载中...",
      mask: true
    })
    var _this = this
    // 获取协议
    wx.request({
      url: "https://www.xiaohulaile.com/xh/p/xcx/Tagreement/index",
      method: "POST",
      dataType: "json",
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },

      success(res) {
        wx.hideLoading()
        console.log(res.data.data)

        if (res.data.code == 0) {
          _this.setData({
            agreement: res.data.data
          })
        } else if (res.data.code == 1) {
          wx.showToast({
            title: "服务器繁忙",
            icon: "none",
            duration: 2000
          })
        }
      },
      fail(){
        wx.hideLoading()
        console.log('获取失败')
        wx.showToast({
          title: "服务器繁忙",
          icon: "none",
          duration: 2000
        })
      }
    })
  }
})
