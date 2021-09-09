import wx from "../../subwe/bridge"
import WXPage from "../../subwe/page"
// pages/merchant/merchant.js
WXPage({
  /**
   * 页面的初始数据
   */
  data: {
    list: "",
    user: ""
  },

  getList(user) {},

  /**
   * 生命周期函数--监听页面加载
   */
  navto: function (option) {
    console.log(option.currentTarget.id)
    wx.navigateTo({
      url: "/pages/merdetails/merdetails?id=" + option.currentTarget.id
    })
  },
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中...'
    });

    var _this = this // wx.getStorage({})
    // console.log(11);

    wx.getLocation({
      success(res1) {
        console.log(res1.latitude, "1111")
        console.log(res1.longitude, "1111")
        wx.request({
          url: "https://www.xiaohulaile.com/xh/p/wadmin/Nursing/index",
          header: {
            "content-type": "application/json" // 默认值
          },
          data: {
            longitude: res1.longitude,
            latitude: res1.latitude
          },

          success(res) {
            console.log(res)
            // return
            

            _this.setData({
              list: res.data.data
            })

            wx.hideLoading();
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},


})
