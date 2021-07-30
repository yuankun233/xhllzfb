import wx from "../../subwe/bridge"
import WXPage from "../../subwe/page"
import { $myrequest } from "../../utils/request" // 引入ajax请求方法
// pages/index/index.js
WXPage({
  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 5000,
    duration: 500,
    address: "加载中..",
    list: "",
    // 护士列表
    nurseList: ""
  },

  gostart(e) {
    const nurseid = JSON.stringify(e.currentTarget.dataset.nurseid)
    wx.navigateTo({
      url: `/pages/start/start?nurseid=${nurseid}`
    })
  },

  tobanner1() {
    wx.navigateTo({
      url: "/pages/aboutus/aboutus"
    })
  },

  tobanner2() {
    wx.switchTab({
      url: "/pages/message/message"
    })
  },

  tobanner3() {
    wx.navigateTo({
      url: "/pages/appointment/appointment"
    })
  },

  // 专业解答
  goSpecialty() {
    // wx.navigateTo({
    //   url: '/pages/specialty/specialty',
    // });
    wx.makePhoneCall({
      phoneNumber: "4009155291"
    })
  },

  goAppointment() {
    wx.getStorage({
      key: "user",

      fail(res) {
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
    wx.navigateTo({
      url: "/pages/appointment/appointment"
    })
  },

  go_eight(e) {
    wx.getStorage({
      key: "user",

      fail(res) {
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
      }
    })
    console.log(e.currentTarget.dataset.id)

    if (
      e.currentTarget.dataset.id == "30" ||
      e.currentTarget.dataset.id == "13" ||
      e.currentTarget.dataset.id == "32" ||
      e.currentTarget.dataset.id == "33" ||
      e.currentTarget.dataset.id == "16" ||
      e.currentTarget.dataset.id == "35"
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

  goMap() {
    wx.navigateTo({
      url: "/pages/map/map",
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        acceptDataFromOpenedPage: function (data) {
          console.log(data)
        },
        someEvent: function (data) {
          console.log(data)
        }
      },
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit("acceptDataFromOpenerPage", {
          data: "test"
        })
      }
    })
  },
  goOrder(e) {
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: `/pages/order/order_eight/order_eight?index=${e.currentTarget.dataset.id}`
    })
  },
  //获取护士列表的方法
  async getNurseList() {
    // 请求护士列表
    const res = await $myrequest({
      url: "/nurse/list"
    })
    // 储存到data
    this.setData({
      nurseList: res.data
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: "加载中...",
      mask: true
    }) // wx.getLocation({
    //   type: 'wgs84',
    //   success (res) {
    //     console.log(res)
    //     const latitude = res.latitude
    //     const longitude = res.longitude
    //     const speed = res.speed
    //     const accuracy = res.accuracy
    //   }
    //  });

    var QQMapWX = require("../../lib/qqmap-wx-jssdk.min.js")

    var qqmapsdk // 实例化API核心类

    qqmapsdk = new QQMapWX({
      key: "EXYBZ-NKXC3-BB53J-3FOMZ-LK7DQ-APF7G"
    })
    var that = this // 调用接口

    qqmapsdk.reverseGeocoder({
      poi_options: "policy=2",
      success: function (res) {
        // console.log(res);
        that.setData({
          address: res.result.address
        })
        wx.hideLoading()
      },
      fail: function (res) {},
      complete: function (res) {}
    })
    var _this = this
    //获取服务列表
    wx.request({
      url: "https://www.xiaohulaile.com/xh/p/gw/project/get_list",
      header: {
        "content-type": "application/json" // 默认值
      },
      data: {
        cate: 1
      },
      success(res) {
        _this.setData({
          list: res.data.data.data
        })
        console.log(_this.data.list)
      }
    })
    // 获取护士列表
    this.getNurseList()
    console.log("获取护士列表")
  }
})
