import wx from "../../subwe/bridge"
import WXPage from "../../subwe/page"
// import { $myrequest } from "../../utils/request" // 引入ajax请求方法
// pages/index/index.js
WXPage({
   data: {
    funlist: [
      {
        img: "../../images/syImage/wenzhen.png",
        title: "极速问诊",
        mes: "专人在线答疑"
      },
      {
        img: "../../images/syImage/ystb.png",
        title: "在线医生",
        mes: "一键语音问诊"
      },
      {
        img: "../../images/syImage/yyfw.png",
        title: "预约服务",
        mes: "按需求找服务"
      }
    ],
    wdlist: [
      {
        img1: "../../images/syImage/wen.png",
        mes1: "小护你好：你们上门会带些什么工具？"
      },
      {
        img1: "../../images/syImage/da.png",
        mes1: "你好,我们护士上门会带一些健康测量的工具的,如血压器等。也会根据服务的内容准备好相应的物品。"
      },
      {
        img1: "../../images/syImage/wen.png",
        mes1: "小护你好,我表哥刚做完腹膜透析,那个肚子里的管子一直要放在里面的？全家人都很担心"
      },
      {
        img1: "../../images/syImage/da.png",
        mes1: "你好,一般来说腹膜透析是终生的治疗方案之一,但各项条件允许的话可以进行肾移植。那么可以停止腹膜透析治疗了。"
      }
    ],
    address: "" //地址
  },
  //获取地理位置
  map() {
    var QQMapWX = require("../../lib/qqmap-wx-jssdk.min.js")
    var qqmapsdk
    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: "EXYBZ-NKXC3-BB53J-3FOMZ-LK7DQ-APF7G"
    })
    var that = this
    // 调用接口
    qqmapsdk.reverseGeocoder({
      poi_options: "policy=2",
      success: function (res) {
        that.setData({
          address: res.result.address_component.city.substring(0, 2)
        })
      },
      fail: function (res) {},
      complete: function (res) {}
    })
  },
  //功能
  goSpecialty(e) {
    console.log()
    if (e.currentTarget.dataset.id == 0) {
      wx.makePhoneCall({
        phoneNumber: "4009155291"
      })
    }
    if (e.currentTarget.dataset.id == 1) {
      wx.makePhoneCall({
        phoneNumber: "4009155291"
      })
    }
    if (e.currentTarget.dataset.id == 2) {
      wx.navigateTo({
        url: "/pages/appointment/appointment"
      })
    }
  },
  //跳转到订单详情
  goOrder(e) {
    console.log("onTap")
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: `/pages/order/order_eight/order_eight?index=${e.currentTarget.dataset.id}`
    })
  },
  //跳转机构护士
  goMes(e) {
    if (e.currentTarget.dataset.id == 0) {
      wx.switchTab({
        url: "../merchant/merchant"
      })
    } else if (e.currentTarget.dataset.id == 1) {
      wx.navigateTo({
        url: "../nurseList/nurseList"
      })
    }
  },

  // 处理url
  parseQuery(url) {
    var queryObj = {}
    var reg = /[?&]([^=&#]+)=([^&#]*)/g
    var querys = url.match(reg)
    if (querys) {
      for (var i in querys) {
        var query = querys[i].split("=")
        var key = query[0].substr(1),
          value = query[1]
        queryObj[key]
          ? (queryObj[key] = [].concat(queryObj[key], value))
          : (queryObj[key] = value)
      }
    }
    return queryObj
  },
  //
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const q = decodeURIComponent(options.q) // 获取到二维码原始链接内容
    
    let params = this.parseQuery(q) //处理获取的参数
    console.log("二维码携带参数:", params.tid)
    // 如果tid存在则更新本地储存
    if (params.tid) {
      wx.setStorageSync("tid", params.tid)
    }
    //调用获取地图
    this.map()
  }














  // /**
  //  * 页面的初始数据
  //  */
  // data: {
  //   indicatorDots: true,
  //   vertical: false,
  //   autoplay: true,
  //   interval: 5000,
  //   duration: 500,
  //   address: "加载中..",
  //   list: "", //临床护理服务列表
  //   professionlist: [], //专业护理服务列表
  //   // 护士列表
  //   nurseList: ""
  // },

  // // 获取当前定位信息
  // position() {
  //   // wx.getLocation({
  //   //   type: 'wgs84',
  //   //   success (res) {
  //   //     console.log(res)
  //   //     const latitude = res.latitude
  //   //     const longitude = res.longitude
  //   //     const speed = res.speed
  //   //     const accuracy = res.accuracy
  //   //   }
  //   //  });
  //   var QQMapWX = require("../../lib/qqmap-wx-jssdk.min.js")

  //   var qqmapsdk // 实例化API核心类

  //   qqmapsdk = new QQMapWX({
  //     key: "EXYBZ-NKXC3-BB53J-3FOMZ-LK7DQ-APF7G"
  //   })
  //   var that = this // 调用接口

  //   qqmapsdk.reverseGeocoder({
  //     poi_options: "policy=2",
  //     success: function (res) {
  //       // console.log(res);
  //       that.setData({
  //         address: res.result.address
  //       })
  //       wx.hideLoading()
  //     },
  //     fail: function (res) {},
  //     complete: function (res) {}
  //   })
  // },

  // // 跳转到护士详情
  // gostart(e) {
  //   const nurseid = JSON.stringify(e.currentTarget.dataset.nurseid)
  //   wx.navigateTo({
  //     url: `/pages/start/start?nurseid=${nurseid}`
  //   })
  // },

  // tobanner1() {
  //   wx.navigateTo({
  //     url: "/pages/aboutus/aboutus"
  //   })
  // },

  // tobanner2() {
  //   wx.switchTab({
  //     url: "/pages/message/message"
  //   })
  // },

  // tobanner3() {
  //   wx.navigateTo({
  //     url: "/pages/appointment/appointment"
  //   })
  // },

  // // 专业解答
  // goSpecialty() {
  //   // wx.navigateTo({
  //   //   url: '/pages/specialty/specialty',
  //   // });
  //   wx.makePhoneCall({
  //     phoneNumber: "4009155291"
  //   })
  // },
  // // 预约服务
  // goAppointment() {
  //   wx.getStorage({
  //     key: "user",

  //     fail(res) {
  //       wx.showToast({
  //         title: "请先登录",
  //         icon: "none",
  //         duration: 1000
  //       })
  //       setTimeout(function () {
  //         console.log("doSomething")
  //         wx.reLaunch({
  //           url: "/pages/login/login"
  //         })
  //       }, 1000)
  //       return
  //     }
  //   })
  //   wx.navigateTo({
  //     url: "/pages/appointment/appointment"
  //   })
  // },

  // // go_eight(e) {
  // //   wx.getStorage({
  // //     key: "user",

  // //     fail(res) {
  // //       wx.showToast({
  // //         title: "请先登录",
  // //         icon: "none",
  // //         duration: 1000
  // //       })
  // //       setTimeout(function () {
  // //         console.log("doSomething")
  // //         wx.reLaunch({
  // //           url: "/pages/login/login"
  // //         })
  // //       }, 1000)
  // //     }
  // //   })
  // //   console.log(e.currentTarget.dataset.id)

  // //   if (
  // //     e.currentTarget.dataset.id == "30" ||
  // //     e.currentTarget.dataset.id == "13" ||
  // //     e.currentTarget.dataset.id == "32" ||
  // //     e.currentTarget.dataset.id == "33" ||
  // //     e.currentTarget.dataset.id == "16" ||
  // //     e.currentTarget.dataset.id == "35"
  // //   ) {
  // //     wx.navigateTo({
  // //       url: `/pages/order/order_eight/order_eight?index=${e.currentTarget.dataset.id}`
  // //     })
  // //   } else {
  // //     wx.showToast({
  // //       title: "敬请期待....",
  // //       icon: "none",
  // //       duration: 2000
  // //     })
  // //   }
  // // },
  // // 跳转到地图
  // goMap() {
  //   wx.navigateTo({
  //     url: "/pages/map/map",
  //     events: {
  //       // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
  //       acceptDataFromOpenedPage: function (data) {
  //         console.log(data)
  //       },
  //       someEvent: function (data) {
  //         console.log(data)
  //       }
  //     },
  //     success: function (res) {
  //       // 通过eventChannel向被打开页面传送数据
  //       res.eventChannel.emit("acceptDataFromOpenerPage", {
  //         data: "test"
  //       })
  //     }
  //   })
  // },
  // // 跳转到具体服务
  // goOrder(e) {
  //   console.log(e.currentTarget.dataset.id)
  //   wx.navigateTo({
  //     url: `/pages/order/order_eight/order_eight?index=${e.currentTarget.dataset.id}`
  //   })
  // },

  // //获取护士列表的方法
  // async getNurseList() {
  //   wx.showLoading({
  //     title: "加载中...",
  //     mask: true
  //   })
  //   // 请求护士列表
  //   const res = await $myrequest({
  //     url: "/nurse/list"
  //   })
  //   console.log("获取护士列表", res)
  //   // 储存到data
  //   this.setData({
  //     nurseList: res.data
  //   })
  //   wx.hideLoading()
  // },
  // // 获取专科护理的方法
  // async getProfessionList() {
  //   wx.showLoading({
  //     title: "加载中...",
  //     mask: true
  //   })
  //   // 请求专科护理服务列表
  //   const res = await $myrequest({
  //     url: "/project/get_list",
  //     data: {
  //       cate: 2
  //     }
  //   })
  //   console.log("获取专科服务列表", res)
  //   // 储存到data
  //   this.setData({
  //     professionlist: res.data.data
  //   })
  //   wx.hideLoading()
  // },
  // //获取临床护理的方法
  // async getClinicList() {
  //   wx.showLoading({
  //     title: "加载中...",
  //     mask: true
  //   })
  //   // 请求临床服务列表
  //   const res = await $myrequest({
  //     url: "/project/get_list",
  //     data: {
  //       cate: 1
  //     }
  //   })
  //   let serve = res.data.data
  //   // let serve1 = serve.slice(0, 3)
  //   // serve1.forEach((item) => {
  //   //   serve.push(item)
  //   // })
  //   // console.log(serve1)
  //   console.log("获取临床服务列表", res)

  //   // 储存到data
  //   this.setData({
  //     list: serve
  //   })
  //   wx.hideLoading()
  // },
  // /**
  //  * 生命周期函数--监听页面加载
  //  */
  // onLoad: function (options) {
  //   // 初始化定位
  //   this.position()
  //   // 获取护士列表
  //   this.getNurseList()

  //   // 获取临床服务列表
  //   this.getClinicList()

  //   // 获取专科服务列表
  //   this.getProfessionList()
  // }
})
