// pages/start/start.js
import wx from '../../subwe/bridge';
import WXPage from "../../subwe/page";
import {$myRequestThree} from '../../utils/qyyRequestThree'
WXPage({
  /**
   * 页面的初始数据
   */
  data: {
    nurseList:'',
    img:''
  },
  back:function(){
    wx.navigateBack({})
  },
 async getnurseList(res) {
  const resList = await $myRequestThree({
      url:'attendant/api/starteam',
      data:{
        bianhao: res
      }
  })
  this.setData({
    nurseList:resList[0]
  })
  console.log(resList);
  if(resList[0].zhicheng == '护师'){
      this.setData({
        img:'https://www.xiaohulaile.com/xh/p/doc/hushi2.png'
      })
  }else if (resList[0].zhicheng == '护士') {
    this.setData({
      img:'https://www.xiaohulaile.com/xh/p/doc/hushi1.png'
    })
  }else if (resList[0].zhicheng == '主管护师') {
    this.setData({
      img:'https://www.xiaohulaile.com/xh/p/doc/zhuguanhushi.png'
    })
  }
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中...',
    })
    wx.hideLoading()
    console.log(options);
    this.getnurseList(options.id);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})