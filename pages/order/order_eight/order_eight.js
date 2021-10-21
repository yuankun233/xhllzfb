import wx from "../../../subwe/bridge"
import WXPage from "../../../subwe/page"
// pages/order/order_eight/order_eight.js
WXPage({
  /**
   * 页面的初始数据
   */
  data: {
    times: [
      {
        id: 1,
        time: "07:00-12:00"
      },
      {
        id: 2,
        time: "13:00-18:00"
      },
      {
        id: 3,
        time: "18:00-22:00"
      }
    ],
    archive_id: "",
    time: "请选择被服务时间段",
    now: "",
    data: "请选择服务日期",
    checkbox: "",
    modalName: "",
    user: "",
    eightList: "",
    eightListLC: "",
    minute: 1,
    price: 0,
    p_price: 0,
    index: 0,
    total_fee: 0,
    top: 1,
    modalName: "",
    name: "请选择信息",
    nums: 1,
    numes: 1,
    xbxy: 1,
    scrollTops: "",
    time_slot: "",
    text: "",
    isPay: false,
    mingxi: 1,
    check: true
  },
  //滑动到底同意勾选
  yuyuebottom(e) {
    this.setData({
      check: false
    })
  },
  //获取时间
  datePicker() {
    var datetime = new Date()
    var year = datetime.getFullYear() //获取完整的年份(4位,1970)

    var month = datetime.getMonth() + 1 //获取月份(0-11,0代表1月,用的时候记得加上1)

    if (month <= 9) {
      month = "0" + month
    }

    var date = datetime.getDate() //获取日(1-31)

    if (date <= 9) {
      date = "0" + date
    }

    var dateformat = year + "-" + month + "-" + date
    my.datePicker({
      currentDate: dateformat,
      startDate: dateformat,
      endDate: "2099-10-9",
      success: (res) => {
        this.setData({
          data: res.date
        })
      }
    })
  },
  mingxis() {
    let that = this

    if (that.data.mingxi == 1) {
      that.setData({
        mingxi: 2
      })
    } else {
      that.setData({
        mingxi: 1
      })
    }
  },

  total() {
    let that = this
    that.setData({
      total_fee: that.data.price
    })
  },

  xuyao() {
    var that = this
    that.setData({
      xbxy: 1,
      p_price: 100,
      numes: 1
    })
    that.total()
  },

  bxuyao() {
    var that = this
    that.setData({
      xbxy: 2,
      p_price: 0,
      numes: 1
    })
    that.total()
  },

  // 拟态框
  showModal(e) {
    // console.log(1233)
    // console.log(e)
    this.huoqubfw()
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },

  DateChange(e) {
    this.setData({
      data: e.detail.value
    })
  },

  radioChange_1(e) {
    var _this = this

    console.log(
      "radio发生change事件，携带index值为：",
      e.currentTarget.dataset.id
    )

    var _this = this

    _this.setData({
      time_slot: e.detail.value,
      time: _this.data.times[e.detail.value - 1].time
    })
  },

  huoqubfw: function () {
    console.log("12333333")

    var _this = this

    wx.getStorage({
      key: "user",

      success(res) {
        console.log("huoqubfw：" + res.data)

        _this.setData({
          users: res.data
        })

        wx.request({
          url: "https://www.xiaohulaile.com/xh/p/wxcx/my/archive",
          //仅为示例，并非真实的接口地址
          // url: 'https://159.75.47.247/xh/p/wxcx/my/archive',
          method: "post",
          data: {
            user_token: res.data.user_token,
            my_id: res.data.my_id
          },
          header: {
            "content-type": "application/json" // 默认值
          },

          success(res) {
            console.log("获取用户健康档案：" + res.data.data)

            _this.setData({
              user_list: res.data.data
            })
          }
        })
      }
    })
  },

  //单选
  radioChange(e) {
    console.log(
      "radio发生change事件，携带index值为：",
      e.currentTarget.dataset.index
    )

    var _this = this

    _this.setData({
      archive_id: e.detail.value
    })

    var list = _this.data.user_list
    var obj = list.find(function (obj) {
      return obj.id == e.detail.value
    })
    console.log(obj)

    _this.setData({
      name: obj.name
    })
  },

  // 订单数
  jiaFN(e) {
    console.log(e)

    var _this = this

    if (e.currentTarget.dataset.id == -1) {
      if (_this.data.nums == 1) {
        return
      } else {
        _this.setData({
          nums: _this.data.nums + parseInt(e.currentTarget.dataset.id)
        })

        _this.setData({
          price: _this.data.nums * _this.data.eightList.price
        })

        _this.total()
      }

      return
    } else {
      _this.setData({
        nums: _this.data.nums + parseInt(e.currentTarget.dataset.id)
      })

      _this.setData({
        price: _this.data.nums * _this.data.eightList.price
      })

      _this.total()
    }
  },

  jiaFNs(e) {
    var _this = this

    if (e.currentTarget.dataset.id == -1) {
      if (_this.data.numes == 1) {
        return
      } else {
        _this.setData({
          numes: _this.data.numes + parseInt(e.currentTarget.dataset.id)
        })

        _this.setData({
          p_price: _this.data.numes * _this.data.eightList.p_price
        })

        _this.total()
      }

      return
    } else {
      if (_this.data.numes < _this.data.nums) {
        _this.setData({
          numes: _this.data.numes + parseInt(e.currentTarget.dataset.id)
        })

        _this.setData({
          p_price: _this.data.numes * _this.data.eightList.p_price
        })

        _this.total()
      } else {
        wx.showToast({
          title: "材料包购买数量不得超过服务项目次数!",
          icon: "none",
          duration: 1500
        })
      }
    }
  },
  //点击
  xiangshang() {
    let that = this
    const query = wx.createSelectorQuery()
    query.select(".order_eight_project").boundingClientRect()
    query.selectViewport().scrollOffset()
    query.exec(function (res) {
      that.setData({
        top: 1
      })
      res[0].top // #the-id节点的上边界坐标

      res[1].scrollTop // 显示区域的竖直滚动位置

      console.log(res[0].top)
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 500
      })
    })
  },

  xiangqing() {
    // return
    let that = this
    const query = wx.createSelectorQuery()
    query.select(".order_eight_2").boundingClientRect()
    query.selectViewport().scrollOffset()
    query.exec(function (res) {
      that.setData({
        top: 2,
        scrollTops: res[0].top
      })
      res[0].top // #the-id节点的上边界坐标

      res[1].scrollTop // 显示区域的竖直滚动位置

      console.log(res[0].top - 50)
      wx.pageScrollTo({
        scrollTop: res[0].top - 100,
        duration: 500
      })
    })
  },

  onPageScroll(e) {
    // return
    let that = this

    if (e.scrollTop == 0) {
      that.setData({
        top: 1
      })
    }

    if (
      e.scrollTop > that.data.scrollTops - 50 ||
      e.scrollTop == that.data.scrollTops - 50
    ) {
      that.setData({
        top: 2
      })
    }
  },

  back() {
    wx.navigateBack({
      delta: 0
    })
  },

  TJfn() {
    console.log("提交订单")
  },

  // 拟态框
  hideModal(e) {
    console.log("111")
    this.setData({
      modalName: null
    })
  },

  ChooseCheckbox(e) {
    let items = this.data.checkbox
    let values = e.currentTarget.dataset.value

    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      if (items[i].value == values) {
        items[i].checked = !items[i].checked
        break
      }
    }

    this.setData({
      checkbox: items
    })
  },

  texts(e) {
    console.log(e)
    this.setData({
      text: e.detail.value
    })
  },

  // 付钱了
  payFn() {
    var _this = this

    if (
      _this.data.archive_id == "" ||
      _this.data.data == "" ||
      _this.data.time_slot == ""
    ) {
      wx.showToast({
        title: "请选择基本信息",
        icon: "none",
        duration: 2000
      })
      return
    }

    if (_this.data.isPay) {
      return
    }

    _this.setData({
      isPay: true
    })

    console.log("付钱")
    wx.request({
      url: "https://www.xiaohulaile.com/xh/p/wxcx/pay/pay",
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      method: "post",
      data: {
        body: _this.data.eightList.title,
        project_id: _this.data.eightList.id,
        num: _this.data.nums,
        total_fee: _this.data.total_fee,
        archive_id: _this.data.archive_id,
        time_slot: _this.data.time_slot,
        content: _this.data.text,
        minute: 1,
        openid: _this.data.users.openid,
        start_time: _this.data.data,
        my_id: _this.data.users.my_id,
        consumables_num: _this.data.numes,
        consumables: _this.data.eightList.pid
      },

      success(res) {
        console.log(res, "11")
        console.log(res.data, "22")

        _this.setData({
          isPay: false
        })

        if (res.data.code == 0) {
          wx.requestPayment({
            timeStamp: res.data.data.timeStamp,
            nonceStr: res.data.data.nonceStr,
            package: res.data.data.package,
            signType: res.data.data.signType,
            paySign: res.data.data.paySign,

            success(res) {
              console.log(res, "成功")
              wx.redirectTo({
                url: "/pages/order/order?index=0"
              })
            },

            fail(res) {
              console.log(res)
              wx.redirectTo({
                url: "/pages/order/order?index=0"
              })
            }
          })
        } else if (res.data.code == 1) {
          wx.showToast({
            title: res.data.message,
            icon: "none"
          })
        } else if (res.data.code == 2) {
          wx.navigateTo({
            url: "/pages/home/login/login"
          })
        }
      }
    })
  },
  //支付宝
  payFnzfb() {
    var _this = this
    console.log("付钱zf1")
    // 未选择信息则不允许下单
    if (
      _this.data.archive_id == "" ||
      _this.data.data == "请选择服务日期" ||
      _this.data.time_slot == ""
    ) {
      wx.showToast({
        title: "请选择基本信息",
        icon: "none",
        duration: 2000
      })
      return
    }
    // 如果已经支付则跳出方法
    if (_this.data.isPay) {
      return
    }
    // 设置订单状态为已支付
    _this.setData({
      isPay: true
    })

    console.log("付钱")
    // let data = {
    //   subject: _this.data.eightList.title,
    //   project_id: _this.data.eightList.id,
    //   num: _this.data.nums,
    //   total_amount: _this.data.total_fee,
    //   archive_id: _this.data.archive_id,
    //   time_slot: _this.data.time_slot,
    //   content: _this.data.text,
    //   minute: 1,
    //   buyer_id: _this.data.users.openid,
    //   start_time: _this.data.data,
    //   my_id: _this.data.users.my_id,
    //   consumables_num: _this.data.numes,
    //   consumables: _this.data.eightList.pid
    // }
    // console.dir(data)
    // console.log("firstrequest参数:" + data)
    my.request({
      url: "https://www.xiaohulaile.com/xh/p/zfbxcx/pay/aliPay",
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      method: "post",
      data: {
        subject: _this.data.eightList.title,
        project_id: _this.data.eightList.id,
        num: _this.data.nums,
        total_amount: _this.data.total_fee,
        // total_amount: 0.01,
        archive_id: _this.data.archive_id,
        time_slot: _this.data.time_slot,
        content: _this.data.text,
        minute: 1,
        buyer_id: _this.data.users.openid,
        start_time: _this.data.data,
        my_id: _this.data.users.my_id,
        consumables_num: _this.data.numes,
        consumables: _this.data.eightList.pid,
        tid:101
      },

      success(res) {
        console.log("request1结果：" + res.data)
        console.log(res)
        var trade_no_1 = res.data.alipay_trade_create_response.trade_no
        console.log(trade_no_1)
        if (res.data.alipay_trade_create_response.msg == "Success") {
          my.tradePay({
            tradeNO: res.data.alipay_trade_create_response.trade_no,
            success: function (res) {
              console.log(res, "成功")
              //告知后台支付结果
              wx.request({
                url: "https://www.xiaohulaile.com/xh/p/zfbxcx/pay/notify",
                header: {
                  "content-type": "application/json" // 默认值
                },
                method: "get",
                data: {
                  trade_no: trade_no_1,
                  total_amount: _this.data.total_fee
                },
                success(res) {
                  console.log(res, "1")
                  console.log(res.data, "2")
                  if (res.data.msg == "支付成功") {
                    wx.redirectTo({
                      url: "/pages/order/order?index=0"
                    })
                  } else {
                    wx.redirectTo({
                      url: "/pages/order/order?index=0"
                    })
                  }
                  console.log(res.data.data, "3")
                }
              })
              // my.alert({
              //   content: JSON.stringify(res),
              // });

              // return
              // wx.redirectTo({
              //   url: "/pages/order/order?index=0"
              // })
            },
            fail: function (res) {
              my.alert({
                content: "支付失败"
              })
              wx.redirectTo({
                url: "/pages/index/index"
              })
              console.log(res, "失败")
            }
          })
          _this.setData({
            isPay: false
          })
        }
        return

        // if (res.data.code == 0) {
        //   wx.requestPayment({
        //     timeStamp: res.data.data.timeStamp,
        //     nonceStr: res.data.data.nonceStr,
        //     package: res.data.data.package,
        //     signType: res.data.data.signType,
        //     paySign: res.data.data.paySign,

        //     success(res) {
        //       console.log(res, '成功');
        //       wx.redirectTo({
        //         url: '/pages/order/order?index=0'
        //       });
        //     },

        //     fail(res) {
        //       console.log(res);
        //       wx.redirectTo({
        //         url: '/pages/order/order?index=0'
        //       });
        //     }

        //   });
        // } else if (res.data.code == 1) {
        //   wx.showToast({
        //     title: res.data.message,
        //     icon: 'none'
        //   });
        // } else if (res.data.code == 2) {
        //   wx.navigateTo({
        //     url: '/pages/home/login/login'
        //   });
        // }
      },
      fail(res) {
        console.log("支付失败" + res)
      }
    })
  },
  // 勾选
  checkboxChange(e) {
    console.log("checkbox发生change事件，携带value值为：", e.detail.value)
    this.setData({
      checkbox: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.index, "参数")
    this.setData({
      index: options.index
    })

    var _this = this

    wx.getStorage({
      key: "user",

      success(res) {
        console.log("获取user成功：", res.data)

        _this.setData({
          user: res.data
        })

        wx.request({
          url: "https://www.xiaohulaile.com/xh/p/wxcx/project/index",
          header: {
            "content-type": "application/json" // 默认值
          },
          method: "post",
          data: {
            id: options.index,
            user_token: res.data.user_token
          },

          success(res) {
            console.log(res.data.data)

            if (res.data.message == "请重新登录") {
              wx.hideLoading()
              console.log(res, 111111)
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
              eightList: res.data.data,
              price: res.data.data.price,
              p_price: res.data.data.p_price,
              total_fee: res.data.data.price
            })

            _this.setData({
              total_fee: _this.data.price
            })
          }
        })
      },
      fail(res) {
        console.log(res)
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
    })
    var datetime = new Date()
    var year = datetime.getFullYear() //获取完整的年份(4位,1970)

    var month = datetime.getMonth() + 1 //获取月份(0-11,0代表1月,用的时候记得加上1)

    if (month <= 9) {
      month = "0" + month
    }

    var date = datetime.getDate() //获取日(1-31)

    if (date <= 9) {
      date = "0" + date
    }

    var dateformat = year + "-" + month + "-" + date
    return
    const query = wx.createSelectorQuery()
    query.select(".order_eight_2").boundingClientRect()
    query.selectViewport().scrollOffset()
    query.exec(function (res) {
      _this.setData({
        scrollTops: res[0].top
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  // onShow: function () {
  //   var _this = this

  //   wx.getStorage({
  //     key: "user",

  //     success(res) {
  //       console.log(res.data)

  //       _this.setData({
  //         user: res.data
  //       })

  //       wx.request({
  //         url: "https://www.xiaohulaile.com/xh/p/wxcx/project/index",
  //         header: {
  //           "content-type": "application/json" // 默认值
  //         },
  //         method: "post",
  //         data: {
  //           id: _this.data.index,
  //           user_token: res.data.user_token
  //         },

  //         success(res) {
  //           if (res.data.message == "请重新登录") {
  //             wx.hideLoading()
  //             console.log(res, 111111)
  //             wx.showToast({
  //               title: "请先登录",
  //               icon: "none",
  //               duration: 1000
  //             })
  //             setTimeout(function () {
  //               console.log("doSomething")
  //               wx.reLaunch({
  //                 url: "/pages/loginzfb/loginzfb"
  //               })
  //             }, 2000)
  //           }

  //           _this.setData({
  //             eightList: res.data.data,
  //             price: res.data.data.price,
  //             p_price: res.data.data.p_price
  //           })

  //           _this.setData({
  //             total_fee: _this.data.p_price + _this.data.price
  //           })
  //         }
  //       })
  //     },
  //     fail(res) {
  //       console.log(res)
  //       wx.showToast({
  //         title: "请先登录",
  //         icon: "none",
  //         duration: 1000
  //       })
  //       setTimeout(function () {
  //         console.log("doSomething")
  //         wx.reLaunch({
  //           url: "/pages/loginzfb/loginzfb"
  //         })
  //       }, 1000)
  //     }
  //   })
  //   var datetime = new Date()
  //   var year = datetime.getFullYear() //获取完整的年份(4位,1970)

  //   var month = datetime.getMonth() + 1 //获取月份(0-11,0代表1月,用的时候记得加上1)

  //   if (month <= 9) {
  //     month = "0" + month
  //   }

  //   var date = datetime.getDate() //获取日(1-31)

  //   if (date <= 9) {
  //     date = "0" + date
  //   }

  //   var dateformat = year + "-" + month + "-" + date
  //   return
  //   const query = wx.createSelectorQuery()
  //   query.select(".order_eight_2").boundingClientRect()
  //   query.selectViewport().scrollOffset()
  //   query.exec(function (res) {
  //     _this.setData({
  //       scrollTops: res[0].top
  //     })
  //   })
  // },

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
