import wx from "../../subwe/bridge"
import WXPage from "../../subwe/page"
// pages/merdetails/merdetails.js
WXPage({
  /**
   * 页面的初始数据
   */
  data: {
    user: "",
    list: ""
  },
  back: function () {
    wx.navigateBack({})
  },
  daohang: function () {
    let _this = this

    wx.getLocation({
      type: "gcj02",

      //返回可以用于wx.openLocation的经纬度
      success(res) {
        const latitude = parseInt(_this.data.list.latitude)
        const longitude = parseInt(_this.data.list.longitude)
        const name = _this.data.list.name
        const address = _this.data.list.address
        wx.openLocation({
          latitude,
          longitude,
          name,
          address,
          scale: 18
        })
      }
    })
  },

  goSpecialty() {
    // wx.navigateTo({
    //   url: '/pages/specialty/specialty',
    // });
    wx.makePhoneCall({
      phoneNumber: "4009155291"
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)

    let _this = this

    wx.request({
      url: "https://www.xiaohulaile.com/xh/p/wxcx/nursing/get_data",
      header: {
        "content-type": "application/json" // 默认值
      },
      data: {
        nursing_id: options.id
      },

      success(res) {
        console.log(res)

        _this.setData({
          list: res.data.data
        })

        console.log(_this.data.list)
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
