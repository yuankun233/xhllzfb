// pages/specialty/specialty.js
import wx from "../../subwe/bridge"
import WXPage from "../../subwe/page"
WXPage({
  /**
   * 页面的初始数据
   */
  data: {
    showIndex: 0,
    list: "",
    lists: ""
  },
  panel: function (e) {
    console.log(e.currentTarget.dataset.index)
    if (e.currentTarget.dataset.index != this.data.showIndex) {
      this.setData({
        showIndex: e.currentTarget.dataset.index
      })
    } else {
      this.setData({
        showIndex: 0
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.request({
      url: "https://www.xiaohulaile.com/xh/p/wxcx/Ledge/Ledge_list",
      header: {
        "content-type": "application/json" // 默认值
      },
      data: {},
      success(res) {
        console.log(res)
        that.setData({
          list: res.data.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {}
})
