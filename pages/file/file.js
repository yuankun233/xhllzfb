import wx from '../../subwe/bridge';
import WXPage from "../../subwe/page";
// pages/file/file.js
WXPage({
  /**
   * 页面的初始数据
   */
  data: {
    user: '',
    name: '',
    sex: '',
    date: '',
    region: '请输入',
    number: '',
    text: '',
    address: '',
    pickerVisible: false
  },
  openSelect() {
    this.setData({
      pickerVisible: true
    })
  },
  addressPickerChange(d) {
    if (d.type == "confirm") {
      this.setData({
        region: d.value.city + d.value.county + d.value.province,
        pickerVisible: false
      })
    } else {
      this.setData({
        pickerVisible: false
      })
    }
    console.log(d)
  },
  nameFn(v) {
    console.log(v.detail.value);

    var _this = this;

    _this.setData({
      name: v.detail.value
    });
  },

  numberFn(v) {
    var _this = this;

    _this.setData({
      number: v.detail.value
    });
  },

  dataFn(v) {
    var _this = this;

    _this.setData({
      date: v.detail.value
    });
  },

  textFn(v) {
    var _this = this;

    _this.setData({
      text: v.detail.value
    });
  },

  addressFn(v) {
    var _this = this;

    _this.setData({
      address: v.detail.value
    });
  },

  radioChange(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);

    var _this = this;

    _this.setData({
      sex: e.detail.value
    });
  },

  RegionChange: function (e) {
    console.log(e.detail.value);
    var data = e.detail.value[0] + e.detail.value[1] + e.detail.value[2];
    this.setData({
      region: data
    });
  },

  addUser() {
    console.log(111);

    var _this = this;

    console.log(_this.data.name);
    console.log(_this.data.sex);
    console.log(_this.data.date);
    console.log(_this.data.region);
    console.log(_this.data.number);
    console.log(_this.data.text);

    if (_this.data.name == '') {
      wx.showToast({
        title: '请输入名字',
        icon: 'error',
        duration: 2000
      });
      return;
    }

    if (_this.data.sex == '') {
      wx.showToast({
        title: '请输入性别',
        icon: 'error',
        duration: 2000
      });
      return;
    }

    if (_this.data.date == '') {
      wx.showToast({
        title: '请输入年龄',
        icon: 'error',
        duration: 2000
      });
      return;
    }

    if (_this.data.region == '' || _this.data.region == '请输入') {
      wx.showToast({
        title: '请输入区域',
        icon: 'error',
        duration: 2000
      });
      return;
    }

    if (_this.data.number == '') {
      wx.showToast({
        title: '请输入手机',
        icon: 'error',
        duration: 2000
      });
      return;
    }

    wx.request({
      url: 'https://www.xiaohulaile.com/xh/p/wxcx/my/archiveadd',
      data: {
        name: _this.data.name,
        sex: _this.data.sex,
        age: _this.data.date,
        region: _this.data.region,
        phone: _this.data.number,
        text: _this.data.text,
        address: _this.data.address,
        my_id: _this.data.user.my_id,
        user_token: _this.data.user.user_token
      },
      method: 'post',
      header: {
        'content-type': 'application/json' // 默认值

      },

      success(res) {
        console.log(res.data.code);

        if (res.data.code == 0) {
          wx.redirectTo({
            url: '/pages/file/file_y/file_y'
          });
        }
      }

    });
  },

  CUser() {
    var _this = this;

    console.log(_this.data.name);
    console.log(_this.data.sex);
    console.log(_this.data.date);
    console.log(_this.data.region);
    console.log(_this.data.number);
    console.log(_this.data.text);

    if (_this.data.name == '') {
      wx.showToast({
        title: '请输入名字',
        icon: 'error',
        duration: 2000
      });
      return;
    }

    if (_this.data.sex == '') {
      wx.showToast({
        title: '请输入性别',
        icon: 'error',
        duration: 2000
      });
      return;
    }

    if (_this.data.date == '') {
      wx.showToast({
        title: '请输入年龄',
        icon: 'error',
        duration: 2000
      });
      return;
    }

    if (_this.data.region == '' || _this.data.region == '请输入') {
      wx.showToast({
        title: '请输入区域',
        icon: 'error',
        duration: 2000
      });
      return;
    }

    if (_this.data.number == '') {
      wx.showToast({
        title: '请输入手机',
        icon: 'error',
        duration: 2000
      });
      return;
    }

    wx.request({
      url: 'https://www.xiaohulaile.com/xh/p/wxcx/my/archivedit',
      data: {
        name: _this.data.name,
        sex: _this.data.sex,
        age: _this.data.date,
        region: _this.data.region,
        phone: _this.data.number,
        text: _this.data.text,
        address: _this.data.address,
        user_token: _this.data.user.user_token,
        id: _this.data.id
      },
      method: 'post',
      header: {
        'content-type': 'application/json' // 默认值

      },

      success(res) {
        console.log(res.data.code);

        if (res.data.code == 0) {
          wx.redirectTo({
            url: '/pages/file/file_y/file_y'
          });
        }
      }

    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.bj, '是');

    var _this = this;

    if (options.bj) {
      _this.setData({
        bj: options.bj
      });

      wx.getStorage({
        key: 'user_order',

        success(res) {
          console.log(res.data, '192838139');

          _this.setData({
            name: res.data.name,
            sex: res.data.sex,
            date: res.data.age,
            region: res.data.region,
            number: res.data.phone,
            text: res.data.text,
            address: res.data.address,
            id: res.data.id
          });
        }

      });
    }

    wx.getStorage({
      key: 'user',

      success(res) {
        console.log(res.data);

        _this.setData({
          user: res.data
        });
      }

    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () { },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () { },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () { },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () { },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () { },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () { },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () { }
});